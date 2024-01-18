// Multiplication Endpoint
// Endpoint: /multiply/<number1>/<number2>
// Task: Build an API that multiplies two numbers. Handle any exceptions like multiplying by a string.
// Example: /multiply/3/4 should return 12.

const express = require('express');
const app = express();

app.get('/multiply/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    if(typeof num1 !== NaN || typeof num2 !== NaN ) {
        return res.status(400).json({
            error: 'No go with string. Gimme numbers'
        });
    }

    const multiply = num1 * num2;

    res.json({
        result: multiply
    })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})