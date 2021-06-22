// Composant : Tâche
class Tache extends React.Component {
    constructor(props) {
        super(props)
    }

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

    tachesArray = [
        { value: 'Ma tache 1', done: true },
        { value: 'Ma tache 2', done: false },
        { value: 'Ma tache 3', done: false }
    ];

    constructor(props) {
        super(props)


    }

    render() {

        let tachesArrayMap = this.tachesArray.map((tache, i) => {
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
                                <input type="text" id="addInput" className="form-control" placeholder="Entrer une tache ...." />
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