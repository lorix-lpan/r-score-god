const token = 'CAANhtjyR1X8BANoATlQ1E4svnZBZCyZAe58vIKVZBSKqKJSIZAOwakwwjkEZA0ZAcUQzJgk5ZBLvwfzM4YG0xBA8DXzy9KSO7i0qetEBPhYiWR5Hgcf4rloBLRDaHNDeZAcXZAFCvUaei8DycZBuHV0j5Hfe7P2tsEut51EhIFP326GZBGZB9OgnmFO1jLn8G9JRqld4ZD'; // eslint-disable-line

const NO_ANSWER = 3877009;
var step = 0;
let rScore;
// produce a response according to message from user
function smartResponse(message) {
  switch(step){
    case 0:step++;
      return 'what is your r-score, you little prick?';
      break;

    case 1: rScore =  checkForNumber(message);
      if (rScore === NO_ANSWER){
        return "I dont care, cut to the chase. What is your R-score? Answer!!!";

      }
      else{
        return 'I now have your r-score, you have only '+rScore;
      }
      break;


  }


}

function checkForNumber(comment){
  //separate the words
  var words = comment.split(' ');
  var answer = NO_ANSWER;
  //  words = {'hello', 'hi'};
  for(var y = 0; y < words.length; y++) {

    var allNumbers = true;

    //check if the word is made of numbers
    for(var x =0; x < words[y].length; x ++){
      console.log(words[y].charCodeAt(0));
      //if it is a number
      if(words[y].charCodeAt(x) < 48 || words[y].charCodeAt(x) > 57){
        allNumbers = false;
      }
    }
    if(allNumbers){
      answer = words[y];

    }

  }
  console.log(allNumbers);
  console.log("the answer is:"+answer);
  return answer;
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
