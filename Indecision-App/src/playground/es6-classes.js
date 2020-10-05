class Persona
{
    constructor(strNombre, intEdad) 
    {
        this.strNombre = strNombre;
        this.intEdad = intEdad;
    }

    MostrarGratitud()
    {
        return "Hola, soy " + this.strNombre;   
    }

    MostrarDatos()
    {
        return `Hola, soy ${this.strNombre} y tengo ${this.intEdad} años`; //No me gustan este tipo de cadenas.
    }
}

class Viajero extends Persona
{
    constructor(Nombre, Edad, UbicacionHogar)
    {
        super(Nombre, Edad); //Sinonimo del constructor de la clase padre. recibira todos los datos necesarios de dicho metodo.
        this.UbicacionHogar = UbicacionHogar;
    }

    MostrarGratitud()
    {
        if(this.UbicacionHogar)
        {
            return super.MostrarGratitud() + " y soy de " + this.UbicacionHogar;
        }

        return super.MostrarGratitud();
    }
}

const unaPersona = new Viajero("Mwry", 20/*, "Mexico"*/);

console.log(unaPersona.MostrarGratitud());