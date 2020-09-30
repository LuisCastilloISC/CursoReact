console.log('app.js is running');

//jsx JavaScript XML
//var template = <h1>Hola, quiero ver si cambio mi codigo</h1>;
//var template = React.createElement("H1", { id: "someid"}, "This is JSX from app.js"); Sentencia compilada por Babel

let count = 0;
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

renderizado();