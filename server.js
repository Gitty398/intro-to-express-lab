

// Import Express

const express = require('express')

// Create Express app

const app = express()

// Define routes

app.get('/', (req, res) => {
    res.send('<h1>Main Page</h1>');
});

app.get('/greetings/:username', (req, res) => {
    const username = req.params.username
    res.send(`<h1>Hello ${username}! </h1>`);
});

app.get('/roll/:rollNumber', (req, res) => {
    const rollNumber = parseInt(req.params.rollNumber);

    if (Number.isNaN(rollNumber)) {
        res.send(`You must specify a number`)
    } else {
        const randomNumber = Math.floor(Math.random() * rollNumber)
        res.send(`You rolled a ${randomNumber} !!!!!!!!!`);
    }
});

app.get('/collectibles/:idx', (req, res) => {
    const idx = req.params.idx
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];

    if (collectibles[idx]) {
        const item = collectibles[idx]
        res.send(`For $${item.price}, you can have ${item.name}`)
    } else {
        res.send(`This item is not yet in stock. Check back soon!`);
    }
});



// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
})