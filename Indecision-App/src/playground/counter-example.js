class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.HandleMinusOne = this.HandleMinusOne.bind(this);
        this.HandlePlusOne = this.HandlePlusOne.bind(this);
        this.HandleReset = this.HandleReset.bind(this);
        this.state = {
            count: props.count
        };
    }
    
    HandlePlusOne()
    {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    HandleMinusOne()
    {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    HandleReset()
    {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render()
    {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.HandlePlusOne}>+1</button>
                <button onClick = {this.HandleMinusOne}>-1</button>
                <button onClick = {this.HandleReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count : 0
};


ReactDOM.render(<Counter /*count = {10}*/ />, document.getElementById('app'));

/*let count = 0;
const AddOne = () => {
    count++;
    console.log("se ha sumado uno");
    renderizado();
};

const MinusOne = () => {
    count--;
    console.log("Se ha restado uno");
    renderizado();
};

const Reset = () => {
    count = 0;
    console.clear();
    console.log("reset");
    renderizado();
};

const AppRoot = document.getElementById('app');

const renderizado = () => {
    const template = (
        <div>
            <h1>Mi app de botones</h1>
            <h2>Contador: {count}</h2>
            <button onClick= {AddOne}>+1</button>
            <button onClick= {MinusOne}>-1</button>
            <button onClick= {Reset}>Reset</button>
        </div>
    );
    
    ReactDOM.render(template, AppRoot);
};

renderizado();*/