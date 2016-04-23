import checkForNumber from '../helpers/checkForNumber';

let step = 0;
// produce a response according to message from user
function rootResponse(message) {
  switch (step) {
    case 0:
      step ++;
      return 'what is your r-score, you little prick?';

    case 1:
      const rScore = checkForNumber(message);
      if (!rScore) {
        return 'I dont care, cut to the chase. What is your R-score? Answer!!!';
      }
      return `I now have your r-score, you have only ${rScore}.`;

    default:
      return '';
  }
}

export default rootResponse;
