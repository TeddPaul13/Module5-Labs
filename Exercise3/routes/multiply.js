const express = require("express");
const router = express.Router();

router.get('/multiply', (req, res)=>{
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = number1*number2;
    res.status(200)
    res.json({result:product})
    
})

module.exports = router;