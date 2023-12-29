require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const port = 4000;

// Set the 'public' folder as the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the login form when a GET request is made to '/login'
app.get('/login', (req, res) => {
    // Your login form HTML content
    const loginForm = `
        <h1>Login Page</h1>
        <form action="/login" method="post">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"><br><br>
            <input type="submit" value="Login">
        </form>
    `;
    res.send(loginForm);
});

// Handling login POST request
app.post('/login', (req, res) => {
    // Here, you can handle the submitted login credentials
    // For now, let's just send a confirmation message
    res.send('Login request received');
});

// Catch-all route for other requests
app.get('*', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`);
});
