const http = require('http')
const PORT = 8080


http
  .createServer(function(req, res) {
    res.write('Hello, Node.js!') 
    res.end() 
  })
  .listen(PORT) 

console.log('Server running on port ${PORT}')
