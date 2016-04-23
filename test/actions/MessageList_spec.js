import { expect } from 'chai';
import MessageList from '../../src/actions/helpers/MessageList';

describe('a list of possible messages', () => {
  it('should instantiate correctly', () => {
    function getText(rScore) {
      return [
        `Your R Score is ${rScore}.`,
      ];
    }

    const l = new MessageList(getText, 31);
    expect(l.getMessage()).to.equal('Your R Score is 31.');
  });
});
