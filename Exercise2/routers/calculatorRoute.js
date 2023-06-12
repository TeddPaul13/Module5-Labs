
const express = require("express");
const router = express.Router();

router.get('/add', (req, res)=>{
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1+number2;
    let sub = number1-number2;
    let product = number1*number2;
    let divide = number1/number2;
    console.log(sum)
    console.log(sub)
    console.log(product)
    console.log(divide)
    res.status(200)
    res.json({result:sum})
    
})

module.exports = router;

