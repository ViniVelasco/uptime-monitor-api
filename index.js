var http = require('http')
var url = require('url')

// The server should respond to all requests with a string
var server = http.createServer(function(req,res) {

  // Get the URL and parse it
  var parsedUrl = url.parse(req.url, true)

  // Get the path
  var path = parsedUrl.pathname;
  var trinmedPath = path.replace(/^\/+|\/+$/g, '')

  // Get the query string as an object
  var queryStringObject = parsedUrl.query

  // Get the HTTP Method
  var method = req.method.toLowerCase()

  // Get the headers as an object
  var headers = req.headers

  // Send The Response
  res.end('Hello World\n')

  // Log the request path
  console.log('Request received with this headers', headers)
})

// Start the server and listen to port 3000
server.listen(3000, function() {
  console.log("The server is listening on port 3000")
})