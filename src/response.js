const token = 'CAANhtjyR1X8BANoATlQ1E4svnZBZCyZAe58vIKVZBSKqKJSIZAOwakwwjkEZA0ZAcUQzJgk5ZBLvwfzM4YG0xBA8DXzy9KSO7i0qetEBPhYiWR5Hgcf4rloBLRDaHNDeZAcXZAFCvUaei8DycZBuHV0j5Hfe7P2tsEut51EhIFP326GZBGZB9OgnmFO1jLn8G9JRqld4ZD'; // eslint-disable-line

const NO_ANSWER = 3877009;
let step = 0;
let rScore;
// produce a response according to message from user
/*function smartResponse(message) {
  switch(step){
  case 0: return 'what is your r-score, you little prick?';
  step ++;
  break;
  case 1: rScore =  checkForNumber(message);
  if (rScore = NO_ANSWER){
  return "Okay, what you said is very nice, but cut to the chase. What is your R-score? Answer!!!";
  break;
  }
  else{
  return 'I now have your r-score, thank you very much hahahahaha!';                  

  break;
  }



  }


  }
  */
function smartResponse(message){
  return checkForNumber(message);
}

function checkForNumber(comment){
  //separate the words
  const words = comment.split(' ');
  var answer = NO_ANSWER;
  words.forEach(() => {
    var allNumbers = true;
  
    //check if the word is made of numbers
    for(var x =0; x < word.length; x ++){
    //if it is a number
      if(! word.charCodeAt(x)> 48 &&! word.charCodeAt(x) < 58){
        allNumbers = false;
      }
    }
    if(allNumbers){
      answer = parseInt(word);
    }
  }
  return 3;
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
