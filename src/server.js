import Express from 'express';

const serverPort = 3990;
const app = new Express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(serverPort, err => {
  if (!err) {
    console.log(`Server running on port ${serverPort}`);
  }
});
