const Logger = require('./Logger');

class Calculator {
    constructor(){
        this.id = Math.floor(Math.random() * 10000);
        //part 3
        this.logger = new Logger('Calculator', this.id);
    }

    
    #log = (value) => {
        console.log(`[calculator : ${this.id}: ${value}]`)
    }

    add(num1,num2){
        const value = num1 + num2;
        //part 2
        // this.#log(value);

        //part 3
        this.logger.log(value);
        return value;
    }
    subtract(num1,num2){
        const value = num1 - num2;
        //part 2
        // this.#log(value);

        //part 3
        this.logger.log(value);
        return value;
    }
    multiply(num1,num2){
        const value = num1 * num2;
        //part 2
        // this.#log(value);

        //part 3
        this.logger.log(value);
        return value;
    }
    divide(num1,num2){
        const value = num1/num2;
        //part 2
        // this.#log(value);

        //part 3
        this.logger.log(value);
        return value;
    }
}
module.exports = Calculator;