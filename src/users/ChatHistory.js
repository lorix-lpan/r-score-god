import User from './User';
import _ from 'lodash';

class ChatHistory {

  constructor() {
    this.users = [];

    this.addUser = this.addUser.bind(this);
    this.getUser = this.getUser.bind(this);
    this.removeExpired = this.removeExpired.bind(this);
  }

  addUser(id) {
    this.users.push(new User(id));
  }

  removeExpired() {
    const currentHour = new Date().getHours();
    this.users = this.users.map(user => user.expired <= currentHour);
  }

  getUser(id) {
    const user = _.find(this.users, { id });
    // if user not found create a new user
    if (!user) {
      this.addUser(id);
      return this.getUser(id);
    }
    return user;
  }
}

export default ChatHistory;
