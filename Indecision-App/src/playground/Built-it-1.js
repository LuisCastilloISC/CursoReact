let ver = undefined;

const siClick = () => {
    ver = !ver;
    renderizado();
};

const AppRoot = document.getElementById('app');

const renderizado = () => {
    const template = (
        <div>
            <h1>Alternar visibilidad</h1>
            <button onClick={siClick}>{ver?'Ocultar':'Mostrar'}</button>
            <p>{ver != true ? undefined : "texto"}</p>
        </div>
    );
    
    ReactDOM.render(template, AppRoot);
};

renderizado();

//La aplicación unicamente muestra u oculta información segun un botón.