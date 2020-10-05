class Visibilitytoggle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.HandleVisibility = this.HandleVisibility.bind(this);
        this.state = {
            Visibility: false
        };
    }

    HandleVisibility()
    {
        this.setState((prevState) => {
            return {
                Visibility: !prevState.Visibility
            };
        });
    }

    render()
    {
        return (
            <div>
                <h1>Alternar visibilidad</h1>
                <button onClick={this.HandleVisibility}>{this.state.Visibility?'Ocultar':'Mostrar'}</button>
                <p>{this.state.Visibility? "text" : undefined}</p>
            </div>
        );
    }
}

ReactDOM.render(<Visibilitytoggle />, document.getElementById('app'));