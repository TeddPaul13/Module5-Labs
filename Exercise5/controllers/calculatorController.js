const Calculator = require ('../libraries/calcLib.js');
const Message = require('../libraries/messageLib.js');

let myCalc = new Calculator();
let messageToBeLogged = new Message();

const addNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let result= myCalc.add(number1, number2);
    console.log(messageToBeLogged)
    res.status(200)
    res.json({"result":result}) 
    console.log(req.query)
}

const subtractNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let result=myCalc.subtract(number1, number2);
    console.log(messageToBeLogged)
    res.status(200)
    res.json({"result":result}) 
}

const multiplyNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let result=myCalc.multiply(number1, number2);
    console.log(messageToBeLogged)
    res.status(200)
    res.json({"result":result}) 
}

const divideNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let result=myCalc.divide(number1, number2);
    console.log(messageToBeLogged)
    res.status(200)
    res.json({"result":result}) 
}

module.exports = {
    addNumbers,
    subtractNumbers,
    divideNumbers,
    multiplyNumbers
}