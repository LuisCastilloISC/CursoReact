console.log('app.js is running');

//jsx JavaScript XML
//var template = <h1>Hola, quiero ver si cambio mi codigo</h1>;
//var template = React.createElement("H1", { id: "someid"}, "This is JSX from app.js"); Sentencia compilada por Babel

const app =
{
    title: "Este es un titulo",
    subtitle: "Este es un sub-titulo",
    option: ["uno", "dos"]
};
//<h1>{app.title}</h1>
const template =
    <div>
        
        <p>{true && app.subtitle}</p>
        {(true && app.subtitle) && <p>Aqui hay un texto plano</p>}
        <p>Opciones: {app.option.length > 0 ? app.option : "No hay opciones, la vida se acabo"}</p>
        
    </div>;
    /*<div>
        
        {VerificarSubtitulo(app.subtitle)}
        {MostrarParrafo(VerificarSubtitulo(app.subtitle))}
        {MostrarOpciones(app.option)}
        
    </div>;*/

function VerificarSubtitulo(subtitulo)
{
    if(subtitulo)
    {
        return <p>{subtiulo}</p>;
    }
    else
    {
        return undefined;
    }
}

function MostrarParrafo(valor)
{
    if(valor != null)
    {
        return <p>aqui hay un texto plano</p>;
    }
    else
    {
        return undefined;
    }
}

function MostrarOpciones(lista)
{
    if(lista)
    {
        return <p>Opciones: {lista}</p>;
    }
    else
    {
        return <p>No hay opciones, la vida se acabo</p>;
    }
}



//Objeto 'user'
const user =
{
    name: "Mwry",
    age: 20,
    location: "MemeLandia"
};

function getLocation(location)
{
    if(location)
    {
        return <p>Location: {location}</p>;
    }
    else
    {
        return undefined;
    }
}


const templatetwo =
    <div>
        <h1>{user.name ? user.name : "Muerto alw"}</h1>
        {(user.age && user.age >= 18) && <p>Edad: {user.age}</p>}
        {getLocation(user.location)}
    </div>;

const AppRoot = document.getElementById('app');

ReactDOM.render(template, AppRoot);