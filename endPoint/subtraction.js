// Endpoint: /subtract/<number1>/<number2>
// Task: Create an API to subtract the second number from the first. Include validation to ensure subtraction from zero is not allowed.
// Example: /subtract/3/0 should return Subtraction from 0 cannot be done.

const express = require('express');
const app = express();

app.get('/subtract/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    if(isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            message: `Įvedei ne tai, ką reikia ${String.fromCodePoint(0x1F621)}`
        })
    }

    if(num2 === 0) {
        return res.status(400).json({
            message: "Iš nulio atimtis šiandien negalima"
        })
    }

    const sub = num2 - num1;

    res.json({
        result: sub
    });
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})