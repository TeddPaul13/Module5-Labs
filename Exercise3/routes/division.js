const express = require("express");
const router = express.Router();

router.get('/div', (req, res)=>{
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let divide = number1/number2;
    console.log(divide)
    res.status(200)
    res.json({result:divide})
    
})

module.exports = router;