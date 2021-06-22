// Composant : Tâche
class Tache extends React.Component {
   

  render() {
      let class_name = 'tache'
      class_name += this.props.done ? ' tache-faite' : ' tache-info';

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
       tacheList: []
    };
  }
  componentDidMount() {
    this.chargementDonnees();
  }
  chargementDonnees(){

    var dataList = null;
    
    // Chargement de données par Ajax

    $.getJSON( "data.json", 
    function( data ) {
      this.setState({ tacheList: data});
    }.bind(this))
    .fail(function(jqXHR, textStatus, errorThrown) 
    {
   
       console.log(errorThrown);
   })
    ;
 
  }

  render() {
   
    let tachesArrayMap = this.state.tacheList.map((tache, i) => {
      return (
        <Tache 
          key={i}
          value={tache.value}
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
              className="form-horizontal">
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