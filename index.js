const express = require('express');

const app = express()

app.get('/api', (req, res) => res.send("Hello World"))

app.listen(process.env.PORT || 3000)
console.log('server on port', process.env.PORT || 3000);