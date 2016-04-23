import MessageList from '../helpers/MessageList';
import * as MessageTypes from './constants';

import askRScore from './AskRScore/askRScore';
import commentRScore from './CommentRScore/commentRScore';
import noRScore from './NoRScore/noRScore';

function matchMessage(type, args) {
  switch (type) {

    case MessageTypes.ASK_R_SCORE: {
      const list = new MessageList(askRScore, args);
      return list.getMessage();
    }

    case MessageTypes.COMMENT_R_SCORE: {
      const list = new MessageList(commentRScore, args);
      return list.getMessage();
    }

    case MessageTypes.NO_R_SCORE: {
      const list = new MessageList(noRScore, args);
      return list.getMessage();
    }

    default:
      return '';
  }
}

export default matchMessage;
