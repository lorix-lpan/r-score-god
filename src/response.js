const token = 'CAANhtjyR1X8BANoATlQ1E4svnZBZCyZAe58vIKVZBSKqKJSIZAOwakwwjkEZA0ZAcUQzJgk5ZBLvwfzM4YG0xBA8DXzy9KSO7i0qetEBPhYiWR5Hgcf4rloBLRDaHNDeZAcXZAFCvUaei8DycZBuHV0j5Hfe7P2tsEut51EhIFP326GZBGZB9OgnmFO1jLn8G9JRqld4ZD'; // eslint-disable-line

const NO_ANSWER = 3877009;
let step = 0;
let rScore;
// produce a response according to message from user
function smartResponse(message, step) {
  switch(step){
    case 0: return 'what is your r-score, you little prick?';
            step ++;
            break;
    case 1: rScore =  checkForNumber(message);
            if (rScore = NO_ANSWER){
            return "Okay, what you said is very nice, but cut to the chase. What is your R-score? Answer!!!"
           break;
            }
            else{
                                

            }



  }
  return `${message} fuck you`;

}





function formatResponse({ text }, sender) {
  return {
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: token },
    method: 'POST',
    json: {
      recipient: { id: sender },
      message: {
        text: smartResponse(text),
      },
    },
  };
}

export default formatResponse;
