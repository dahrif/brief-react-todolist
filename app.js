// Composant : Tâche
class Tache extends React.Component {
   

  render() {
      let class_name = 'tache'
      class_name += this.props.done ? ' tache-faite' : ' tache-info';

      return (
          <div className={class_name}>
              <span>{this.props.value}</span>
              <i className="close" onClick={this.props.onClickClose}>&times;</i>
          </div>
      )
  }
}

// Application
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
       tacheList: []
    };
  }
  componentDidMount() {
    this.chargementDonnees();
  }
  chargementDonnees(){

    var dataList = null;
    
    // affichage de données par Ajax

    $.getJSON( "api/showtasks.php", 
    function( data ) {
      this.setState({ tacheList: data});
    }.bind(this))
    .fail(function(jqXHR, textStatus, errorThrown) 
    {
       console.log(errorThrown);
   })
    ;
 
  }

  addTask(e) {

    $.ajax({
      url:"/api/addtask.php",
      method:"POST",
      data:{
          taskname : addInput.value ,
      },
      success:function(data) {
        this.chargementDonnees()
        console.log(data)
    }.bind(this)
    })
    
    
  //   if (addInput.value.length != 0) {
  //    this.state.tasksArray.push({
  //      value: addInput.value,
  //      done: false
  //    })
     
     
  //    this.setState(state => ({
  //      tasksArray: state.tasksArray
  //    }));

  //  }

  alert('add')

   e.preventDefault()
 }


  render() {
   
    let tachesArrayMap = this.state.tacheList.map((tache, i) => {
      return (
        <Tache 
          key={i}
          value={tache.taskname}
          done={tache.done}
        />
      )
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1> Mes taches</h1>
            <form
              id="form-add"
              className="form-horizontal" onSubmit={this.addTask.bind(this)}>
              <div className="input-group">
                <input type="text" id="addInput" className="form-control"  placeholder="Enterz une tache..." />
                <div className="input-group-btn">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-plus-sign"></span>
                  </button>
                </div>
              </div>
            </form>

            {tachesArrayMap}
                        
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));