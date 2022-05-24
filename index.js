const express = require('express');

const app = express()

// app.get('/', (req, res) => res.send("Hello World"))

app.use(express.static('public'))

app.listen(process.env.PORT || 3000)
console.log('server on port', process.env.PORT || 3000);
