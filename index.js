const express = require('express');
const path = require('path');
const ejs = require('ejs')

const app = express()

//Setings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// routes
app.get('/api/users', (req, res) => res.json([{name: 'ryan'}, {name: "joe"}]))

app.get('/profile', (req, res) => {
    res.render('profile', {
        name: 'Jesus Armando pichardo saucedo',
        age: 26
    })
})

// static files
app.use(express.static('public'))

app.listen(process.env.PORT || 3000)
console.log('server on port', process.env.PORT || 3000);
