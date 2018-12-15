var http = require('http')
var url = require('url')

// The server should respond to all requests with a string
var server = http.createServer(function(req,res) {

  // Get the URL and parse it
  var parsedUrl = url.parse(req.url, true)

  // Get the path
  var path = parsedUrl.pathname;
  var trinmedPath = path.replace(/^\/+|\/+$/g, '')

  // Send The Response
  res.end('Hello World\n')

  // Log the request path
  console.log('Request received on path: ' + trinmedPath)
})

// Start the server and listen to port 3000
server.listen(3000, function() {
  console.log("The server is listening on port 3000")
})