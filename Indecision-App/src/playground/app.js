class Indecisionapp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.HandelReset = this.HandelReset.bind(this);
        this.HandelRandomPick = this.HandelRandomPick.bind(this);
        this.HandleaddOption = this.HandleaddOption.bind(this);
        this.HandleDeleteOption = this.HandleDeleteOption.bind(this);

        this.state = {
            options: []
        };
    }

    componentDidMount()
    {
        try
        {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options)
            {
                this.setState( () => ({options}));
            }
        }
        catch (e)
        {

        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(prevState.options !== this.state.options)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount()
    {

    }

    HandelReset()
    {
        this.setState( () => ({ options: [] }) );
        // () => {} funcion flecha con cuerpo de la funcion
        // () => {{}} funcion flecha devolviendo un objeto vacio
    }

    HandleDeleteOption(otraOpcion)
    {
        this.setState( (prevState) => ({
            options: prevState.options.filter( (option) => {
                return otraOpcion !== option;
            })
        }));
    }

    HandelRandomPick()
    {
        alert(this.state.options[(Math.floor(Math.random() * this.state.options.length))]);
    }

    HandleaddOption(option)
    {   if(!option)
        {
            return 'Enter valid value';
        }
        else
        {
            if(this.state.options.indexOf(option ) > -1)
            {
                return 'Already in';
            }
        }
        
        this.setState( (prevState) => {
            return {
                options : prevState.options.concat([option])
            };
        });
    }

    render()
    {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header title = {title} subtitle = {subtitle} />
                <Action hasOptions = {this.state.options.length > 0 ? true : false} HandelRandomPick = {this.HandelRandomPick} />
                <Opcions options = {this.state.options} HandelReset = {this.HandelReset} HandleDeleteOption = {this.HandleDeleteOption}/>
                <AddOpcion HandleaddOption = {this.HandleaddOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button disabled = {!props.hasOptions} onClick = {props.HandelRandomPick}>Boton</button>
        </div>
    );
}

const Opcions = (props) => {
    return (
        <div>
            <button onClick={props.HandelReset}>Remove All</button>
            {
                props.options.map((option) => 
                    <Option 
                        key = {option} 
                        option = {option}
                        HandleDeleteOption = {props.HandleDeleteOption} /> 
                )
            }
        </div>
    );
}

const Option = (props) => {
    return(
        <div>
            {props.option}
            <button 
                onClick = {(e) => {
                    props.HandleDeleteOption(props.option);
                }}
            >
                Remove
            </button>
        </div>
    );
}

class AddOpcion extends React.Component
{       
    constructor(props)
    {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
            error: undefined
        }
    }

    onFormSubmit(e)
    {
        e.preventDefault();

        const op = e.target.elements.Option.value.trim();
        const error = this.props.HandleaddOption(op);
        e.target.elements.Option.value = '';
        this.setState(() => {
            return { error };
        });
        
    }

    render()
    {
        return (
            <div>
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="Option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<Indecisionapp />, document.getElementById('app'));



