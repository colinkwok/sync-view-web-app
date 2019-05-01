const path = require('path')
const express = require('express')
const jquery = require('jquery')
// express is a function called to create a new express application
const app = express()

const publicDirectoryPath = path.join(__dirname,'../public' )
const viewsPath = path.join(__dirname, '../templates/views')
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

//tell express to use handlebars dynamic templating engine 
// this sets up handlebars
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('', (req, res) => {
    res.render('index')
})

const port = 3000

// starting the server asynchronously, callback function indicates when server is up
app.listen(port, () => {
    console.log('Server is up on port 3000')
})
