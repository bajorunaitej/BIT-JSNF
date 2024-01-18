// Check If User Exists
// Endpoint: /check-if-user-exists/<userId>
// Task: Implement an API that checks if a user with a given ID exists in an array. Respond with 200: true if the user exists, or 404: false if not.
// Example: /check-if-user-exists/2 should check if a user with ID 2 exists.

const express = require('express');
const app = express();

//Sampling the users
const users = [
    {id: 1, name: 'Aldas'},
    {id: 2, name: 'Jurgė'},
];

app.get('/user-exists/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);

    //Does user exist?
    const userExists = users.some(user => user.id === userId);

    if(userExists) {
        res.status(200).json({
            message: true
        });
    }else res.status(404).json({message: false});
});

app.listen(3000, () => {
    console.log('linkas: http://localhost:3000');
})