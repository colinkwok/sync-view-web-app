const path = require('path')
const express = require('express')
const jquery = require('jquery')

// express is a function called to create a new express application
const app = express()

var http = require('http').Server(app)
var io = require('socket.io')(http);
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

io.on('connection', function(socket) {
    console.log('an user connected');
    //io.emit('Welcome')
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('playEvent', function(msg) {
        console.log('Sending event from server to client')
        console.log(msg.state)
        io.emit('play', msg)
    })
    socket.on('pauseEvent', function(msg) {
        console.log('Sending event from server to client')
        console.log(msg.state)
        io.emit('pause', msg)
    })
    socket.on('seekEvent', function(msg) {
        console.log('Sending event from server to client')
        console.log(msg.state)
        console.log(msg.isPlaying)
        io.emit('seek', msg)
    })
    
    socket.on('hello to server', function() {
        console.log('recieved hello from client')
        io.emit('hello to client')
    })

    // socket.on('play', function(msg) {
    //     io.emit(msg) 
    //     //player.playVideo();
    //     console.log("server: "+ msg)
    // });
    // socket.on('pause', function(msg) {
    //     io.emit(msg)
    //     //player.pauseVideo();
    //     console.log("server: "+ msg)
    // });
    // socket.on('seek', function(msg) {
    //     io.emit(msg)
    //     //player.seekTo(msg, true);
    //     console.log("server: "+ msg)
    // });
})


// starting the server asynchronously, callback function indicates when server is up
http.listen(port, () => {
    console.log('Server is up on port ' + port)
})
