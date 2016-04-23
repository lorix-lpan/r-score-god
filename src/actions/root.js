import checkForNumber from '../helpers/checkForNumber';
import users from '../users/index';

import matchMessage from './messages/matchMessage';

// produce a response according to message from user
function rootResponse(message, sender) {
  // get reference of user on the user list
  const current = users.getUser(sender);

  switch (current.step) {
    case 0: {
      current.addStep();
      return matchMessage('ASK_R_SCORE');
    }

    case 1: {
      const rScore = checkForNumber(message);
      if (rScore) {
        current.setRScore(rScore);
        return matchMessage('COMMENT_R_SCORE', rScore);
      }
      return matchMessage('NO_R_SCORE');
    }

    default:
      return 'RIP';

  }
}

export default rootResponse;
