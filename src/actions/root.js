import checkForNumber from '../helpers/checkForNumber';
import users from '../users/index';

// produce a response according to message from user
function rootResponse(message, sender) {
  // get reference of user on the user list
  const current = users.getUser(sender);

  switch (current.step) {
    case 0:
      current.addStep();
      return 'My sweet child, what is your lovely R Score?';

    case 1:
      const rScore = checkForNumber(message);
      if (rScore) {
        current.setRScore(rScore);
        return `I am sure ${rScore} R Score can get you a decent job. Do you like flipping burgers?`;
      }
      return 'Just tell me your R Score you pleb.';

    default:
      return '';
  }
}

export default rootResponse;
