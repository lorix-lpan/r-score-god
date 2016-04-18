import request from 'superagent';

let host = 'localhost:3990';

export default function (message, callback) {
  const getUrl = `http://${host}/webhook`;
  request.
    post(getUrl).
    send({ entry: [message] }).
    end(callback);
}
