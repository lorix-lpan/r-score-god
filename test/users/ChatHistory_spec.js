import { expect } from 'chai';
import ChatHistory from '../../src/users/ChatHistory';
import User from '../../src/users/User';

describe('A list of acitve users', () => {
  it('should add user to list', () => {
    const list = new ChatHistory();
    const id = '23242533';

    list.addUser(id);
    expect(list.users[0].id).to.equal(id);
  });

  it('should get user from list as an object', () => {
    const list = new ChatHistory();
    const id = '23242533';
    const user = new User(id);

    list.addUser(id);
    expect(list.getUser(id).id).to.equal(id)
  });

  it('should add user if user does not exist', () => {
    const list = new ChatHistory();
    const id = '23242533';
    const user = new User(id);

    expect(list.getUser(id).id).to.equal(id);
  });
});
