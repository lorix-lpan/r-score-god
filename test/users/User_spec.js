import { expect } from 'chai';
import User from '../../src/users/User';

describe('a user', () => {
  it('should be correctly initiated', () => {
    const id = '12312413543';
    const time = new Date().getHours();
    const user = new User(id);

    expect(user.id).to.equal(id);
    expect(user.step).to.equal(0);
    expect(user.expired).to.equal(time + 1);
  });

  it('should add step', () => {
    const id = '12312413543';
    const user = new User(id);

    user.addStep();
    expect(user.step).to.equal(1);
  });

  it('should update R Score', () => {
    const id = '12312413543';
    const user = new User(id);

    user.setRScore(31);
    expect(user.rScore).to.equal(31);
  });
});
