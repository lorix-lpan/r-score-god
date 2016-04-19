import React, { Component } from 'react';
import request from './request';

const structure = {
  id: '',
  time: '',
  messaging: [
    {
      sender: {
        id: '',
      },
      recipient: {
        id: '',
      },
      timestamp: '',
      message: {
        mid: '',
        seq: '',
        text: '',
      },
    },
  ],
};

class SendMessage extends Component {

  constructor() {
    super();
    this.state = { current: '', messages: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e) {
    this.setState({ current: e.target.value });
  }

  handleClear() {
    this.setState({ messages: [] });
  }

  handleClick(e) {
    if (this.state.current) {
      let message = structure;
      message.messaging[0].message.text = this.state.current;

      this.setState({
        messages: [].concat(this.state.messages).concat([this.state.current]),
        current: '',
      });
      // make request to server
      request(message, (err, data) => {
        const respond = JSON.parse(data.text).json.message.text;
        this.setState({
          messages: [].concat(this.state.messages).concat([respond]),
        });
      });
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.current} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Send</button>
        <button onClick={this.handleClear}>Clear</button>
        {this.state.messages.map((message, i) => <p key={i}>{message}</p>)}
      </div>
    );
  }
}

export default SendMessage;
