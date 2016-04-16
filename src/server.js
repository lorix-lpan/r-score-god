var express    = require('express');
var bodyParser = require('body-parser');
var request    = require('request');

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

var token = "CAANhtjyR1X8BANoATlQ1E4svnZBZCyZAe58vIKVZBSKqKJSIZAOwakwwjkEZA0ZAcUQzJgk5ZBLvwfzM4YG0xBA8DXzy9KSO7i0qetEBPhYiWR5Hgcf4rloBLRDaHNDeZAcXZAFCvUaei8DycZBuHV0j5Hfe7P2tsEut51EhIFP326GZBGZB9OgnmFO1jLn8G9JRqld4ZD";

function sendTextMessage(sender, text) {
  messageData = {
    text: text,
  };
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token:token},
      method: 'POST',
      json: {
        recipient: {id:sender},
        message: messageData,
      }
    }, function(error, response, body) {
      if (error) {
        console.log('Error sending message: ', error);
      } else if (response.body.error) {
        console.log('Error: ', response.body.error);
      }
    });
}

app.post('/webhook/', function (req, res) {
  messaging_events = req.body.entry[0].messaging;
  for (i = 0; i < messaging_events.length; i++) {
    event = req.body.entry[0].messaging[i];
    sender = event.sender.id;
    if (event.message && event.message.text) {
      text = event.message.text;
      console.log(text);
      sendTextMessage(sender, text.substring(0, 200));
    }
  }
  res.sendStatus(200);
});

app.listen(serverPort, function (err) {
  if (!err) {
    console.log('Server running on port ' + serverPort);
  }
});
