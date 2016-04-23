import request from 'superagent';

const host = 'localhost:3990';

export default function (message, callback) {
  const getUrl = `http://${host}/webhook`;
  request.
    post(getUrl).
    send({ entry: [message] }).
    end(callback);
}
