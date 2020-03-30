const path = require('path')

const express = require('express')
const app = express()

app.use(express.static('desertSnake/static'))
app.use(express.static(path.join(__dirname, 'desertSnake/static/css')));

app.listen(process.env.PORT || 8080, ()=> {
    console.log('Server started')
})