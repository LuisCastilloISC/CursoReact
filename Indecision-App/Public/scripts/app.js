"use strict";

console.log('app.js is running');

//jsx JavaScript XML
//var template = <h1>Hola, quiero ver si cambio mi codigo</h1>;
//var template = React.createElement("H1", { id: "someid"}, "This is JSX from app.js"); Sentencia compilada por Babel

var count = 0;
var AddOne = function AddOne() {
    count++;
    console.log("se ha sumado uno");
    renderizado();
};

var MinusOne = function MinusOne() {
    count--;
    console.log("Se ha restado uno");
    renderizado();
};

var Reset = function Reset() {
    count = 0;
    console.clear();
    console.log("reset");
    renderizado();
};

var AppRoot = document.getElementById('app');

var renderizado = function renderizado() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Mi app de botones"
        ),
        React.createElement(
            "h2",
            null,
            "Contador: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: AddOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: MinusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: Reset },
            "Reset"
        )
    );

    ReactDOM.render(template, AppRoot);
};

renderizado();
