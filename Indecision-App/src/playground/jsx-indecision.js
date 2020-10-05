console.log('app.js is running');

//jsx JavaScript XML
//var template = <h1>Hola, quiero ver si cambio mi codigo</h1>;
//var template = React.createElement("H1", { id: "someid"}, "This is JSX from app.js"); Sentencia compilada por Babel

let app = {
    titulo: '',
    subtitulo: '',
    opciones: []   
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const op = e.target.elements.Option.value;

    if(op)
    {
        app.opciones.push(op);
        e.target.elements.Option.value = '';
    }
    renderizado();
};

const onFormClick = () => {
    app.opciones = [];
    renderizado();
};


const AppRoot = document.getElementById('app');

const renderizado = () => {
    const template = (
        <div>
            <p>{app.opciones.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="Option"/>
                <button>Add Option</button>
                <button onClick = {onFormClick}>Remove All</button>
            </form>
            <ol>
                {
                    app.opciones.map( (opcion) => { 
                        return <li key={opcion}><button>{opcion}</button></li>;
                    })
                } 
            </ol>
        </div>
    );
    
    ReactDOM.render(template, AppRoot);
};

renderizado();
