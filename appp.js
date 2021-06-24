// Composant : Tâche
class Tache extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let class_name = 'tache'
    class_name += this.props.done ? ' tache-faite' : ' tache-info';
  
    return (
      <div className={class_name} onClick={this.props.onClickTache}>
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
      tachesListe: [],
      value: ''
    }
  }

  addTache(e) {
    
    
    //  if (addInput.value.length != 0) {
    //   this.state.tachesListe.push({
    //     value: addInput.value,
    //     done: false
    //   })
      
      
    //   this.setState(state => ({
    //     tachesListe: state.tachesListe
    //   }));
      

    // }
    
    alert('add')
    e.preventDefault()
  }

  removeTache(i) {
    this.state.tachesListe.splice(i, 1)
    this.setState({
      tachesListe: this.state.tachesListe
    })
  }

  markDone(i) {
    let tachesListe = this.state.tachesListe
    let tache = this.state.tachesListe[i]
    tachesListe.splice(i, 1)
    tache.done = !tache.done 
    
    tache.done ? tachesListe.push(tache) : tachesListe.unshift(tache)


    this.setState({
      tachesListe: tachesListe
    })

    
  }

  onChangeInput(e) {
    // this.setState({value: e.target.value})
  }

  render() {
    let tachesListe = this.state.tachesListe.map((tache, i) => {
      return (
        <Tache 
          key={i}
          value={tache.value}
          done={tache.done}
          onClickClose={this.removeTache.bind(this, i)}
          onClickTache={this.markDone.bind(this, i)}
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
              className="form-horizontal"
              onSubmit={this.addTache.bind(this)}>
              <div className="input-group">
                <input type="text" id="addInput" className="form-control" onChange={this.onChangeInput.bind(this)} placeholder="Description de la tâche..." />
                <div className="input-group-btn">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-plus-sign"></span>
                  </button>
                </div>
              </div>
            </form>
        
              {tachesListe}
 

           
            
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));