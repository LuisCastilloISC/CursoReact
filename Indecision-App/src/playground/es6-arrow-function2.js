const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    Multiply() 
    { 
        return this.numbers.map((number) => this.multiplyBy * number );
    }
};

console.log(multiplier.Multiply());