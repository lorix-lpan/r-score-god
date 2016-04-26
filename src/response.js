import rootResponse from './actions/root';
import handleSticker from './handleSticker';
import handleGif from './handleGif';

const token = 'CAANhtjyR1X8BAMniOZA7HC1SxI1eNURS69wRWQr74lVTcgp2ZBPJxTlapjwIPe9YfZCOyRsCydC1VZAIt5TgDO7IfcltFehXHHiqgm95UZAluZCJOSfopBGVwxPwFaxqc3BpLBtT6fN2IwyvO00RZB2QMdZCYId9tLw9lvTj0PPTKTxKGAO5c1gkmHs5xtpgKvIZD'; // eslint-disable-line

function formatResponse(sender, message, sticker) {
  let text;
  if (sticker) {
    text = handleSticker(sticker);
  } else if (!message) {
    text = handleGif();
  } else {
    text = rootResponse(message, sender);
  }

  return {
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: token },
    method: 'POST',
    json: {
      recipient: { id: sender },
      message: {
        text,
      },
    },
  };
}

export default formatResponse;
