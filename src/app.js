const path = require('path')
const express = require('express')
const jquery = require('jquery')
// express is a function called to create a new express application
const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname,'../public' )
const viewsPath = path.join(__dirname, '../templates/views')


// setup static directory to serve
app.use(express.static(publicDirectoryPath))

//tell express to use handlebars dynamic templating engine 
// this sets up handlebars
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('', (req, res) => {
    res.render('index')
})


// starting the server asynchronously, callback function indicates when server is up
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
