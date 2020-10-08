const isAdult = (edad) => edad < 18? "Is not an adult" : "Is an adult";

const canDrink = (edad) => edad < 21? "Can't drink" : "Can drink";

const isSenior = (edad) => edad < 65? "Is not a senior" : "Is a senior"

export {isAdult, canDrink, isSenior as default};

