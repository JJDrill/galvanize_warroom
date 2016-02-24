var Express = require("express")
var Socket = require("socket.io")
var http = require("http")
var unirest = require('unirest')
// var db = require('monk')('localhost/realState')

const warroom = require("../client/app/warroom-client")

var app = Express()
var server = http.Server(app)
var io = Socket(server)

app.use(Express.static("./client"))

app.get('/', function(request, response) {
  app.render("servers");
})

io.on("connection", function (socket) {
  warroom(function(error, data){
    // console.log("server data: " + data.data[0].name);
    io.emit('server_data', data.data);
  })
})

server.listen(process.env.PORT || 8080, function() {
  console.log("listening on 8080")
})
