class MessageList {

  constructor(getText, args) {
    this.messages = getText(args);
    this.getMessage = this.getMessage.bind(this);
  }

  getMessage() {
    const mes = this.messages;
    return mes[Math.floor(Math.random() * mes.length)];
  }
}

export default MessageList;
