const path = require('path')
// const projectRoot = path.resolve(__dirname, '../')

const express = require('express')
const app = express()

// app.use(express.static(projectRoot + '/static'))
// app.use('dist', express.static(__dirname + '/static'))

app.use(express.static('static'))
app.use(express.static(path.join(__dirname, 'static/css')));
// app.use('dist', express.static('static/css'))

app.listen(8080, ()=> {
    console.log('Server started')
})