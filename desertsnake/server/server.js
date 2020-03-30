const path = require('path')

const express = require('express')
const app = express()

app.use(express.static('desertsnake/scr/'))
app.use(express.static(path.join(__dirname, 'desertsnake/scr')));

app.listen(process.env.PORT || 8080, ()=> {
    console.log('Server started')
})