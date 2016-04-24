import rootResponse from './actions/root';

const token = 'CAANhtjyR1X8BAMniOZA7HC1SxI1eNURS69wRWQr74lVTcgp2ZBPJxTlapjwIPe9YfZCOyRsCydC1VZAIt5TgDO7IfcltFehXHHiqgm95UZAluZCJOSfopBGVwxPwFaxqc3BpLBtT6fN2IwyvO00RZB2QMdZCYId9tLw9lvTj0PPTKTxKGAO5c1gkmHs5xtpgKvIZD'; // eslint-disable-line

function formatResponse({ text }, sender) {
  return {
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: token },
    method: 'POST',
    json: {
      recipient: { id: sender },
      message: {
        text: rootResponse(text, sender),
      },
    },
  };
}

export default formatResponse;
