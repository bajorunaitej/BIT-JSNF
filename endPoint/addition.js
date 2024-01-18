// Addition Endpoint
// Endpoint: /addition/<number1>/<number2>
// Task: Create an API that takes two numbers as parameters and returns their sum.
// Example: /addition/1/2 should return 3.

const express = require('express');
const app = express();

// Define the route for addition
app.get('/addition/:number1/:number2', (req, res) => {
  // Extract numbers from the request parameters
  const number1 = parseInt(req.params.number1);
  const number2 = parseInt(req.params.number2);

  // Check if both parameters are valid numbers
  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
  }

  // Perform the addition
  const sum = number1 + number2;

  // Return the result as JSON
  res.json({ result: sum });
});

// Start the server
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});
