var express    = require('express');
var bodyParser = require('body-parser');

var serverPort = 3990;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.get('/', function (req, res) {
  res.send('Hello');
});

app.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === 'rob_the_r_score_god') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
});

app.post('/webhook/', function (req, res) {
  messaging_events = req.body.entry[0].messaging;
  for (i = 0; i < messaging_events.length; i++) {
    event = req.body.entry[0].messaging[i];
    sender = event.sender.id;
    if (event.message && event.message.text) {
      text = event.message.text;
      console.log(text);
    }
  }
  res.sendStatus(200);
});

app.listen(serverPort, function (err) {
  if (!err) {
    console.log('Server running on port ' + serverPort);
  }
});
