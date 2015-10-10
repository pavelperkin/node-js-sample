var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  console.log(new Date + "Request for host " + request.headers.host);
  response.send('Hello Startup Crush Test!')
})

app.listen(app.get('port'), function() {
  console.log(new Date + "Node app is running at localhost special for IT Coworking Hub:" + app.get('port'))
})

// setInterval(function() { console.log(new Date) }, 60000)
