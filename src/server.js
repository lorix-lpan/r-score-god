import Express from 'express';

const serverPort = 3990;
const app = new Express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/webhook/', (req, res) => {
  if (req.query['hub.verify_token'] === 'rob_the_r_score_god') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
});

app.listen(serverPort, err => {
  if (!err) {
    console.log(`Server running on port ${serverPort}`);
  }
});
