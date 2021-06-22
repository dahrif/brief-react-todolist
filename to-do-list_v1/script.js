// Composant : Tâche
class Task extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let class_name = 'task'
    class_name += this.props.done ? ' task-success' : ' task-info';
  
    return (
      <div className={class_name}>
        <span>{this.props.value}</span>
        <i className="close">&times;</i>
      </div>
    )
  }
}

// Application
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
       taskList: [{value:"tâche1",done : true}]
    };
  }
  componentDidMount() {
    this.chargementDonnees();
  }
  chargementDonnees(){

    var dataList = null;
    // Chargement de données par Ajax
    $.getJSON( "/5-%C3%A9v%C3%A9nements-state/to-do-list_v1/data.json", 
    function( data ) {
      this.setState({ taskList: data});
    }.bind(this))
    .fail(function(jqXHR, textStatus, errorThrown) 
    {
   
       console.log(errorThrown);
   })
    ;
 
  }

  render() {
   
    let tasksArrayMap = this.state.taskList.map((task, i) => {
      return (
        <Task 
          key={i}
          value={task.value}
          done={task.done}
        />
      )
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1> Tâches à faire</h1>
            <form
              id="form-add"
              className="form-horizontal">
              <div className="input-group">
                <input type="text" id="addInput" className="form-control"  placeholder="Description de la tâche..." />
                <div className="input-group-btn">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-plus-sign"></span>
                  </button>
                </div>
              </div>
            </form>

            {tasksArrayMap}
            
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));