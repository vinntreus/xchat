import React from 'react';
import './Home.css';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
      messages: []
    };
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onMessageKeyPress = this.onMessageKeyPress.bind(this);
  }
  sendMessage(message){
    let self = this;
    setTimeout(() => self.messageSent(message), 1000);
  }
  messageSent(message){
    let messages = this.state.messages;
    const index = messages.indexOf(message);
    if(index !== -1){
      messages[index].state = '';
      this.setState({messages: messages});
    }
  }
  onMessageChange(event){
    this.setState({message: event.target.value});
  }
  onMessageKeyPress(event){
    if(event.keyCode === 13 && this.state.message){
      let messages = this.state.messages;
      let message = {
        text: this.state.message,
        state: 'sending'
      };
      messages.push(message);
      this.setState({messages: messages, message: ''});
      this.sendMessage(message);
    }
  }
  render() {
    const messages = this.state.messages.map((m, i) => {
      let css = ['Message-item', m.state].join(' ');
      return (
        <div key={i} className={css}>{m.text}</div>
      );
    });
    return (
      <div className='Home'>
        <div className='Home-sidebar'>
            <h2>Channel name</h2>
        </div>
        <div className='Home-header'></div>
        <div className='Home-main'>
          <div className='Message-list'>{messages}</div>
        </div>
        <div className='Home-footer'>
            <input
              className='Message-input'
              type='text'
              placeholder='Write something'
              value={this.state.message}
              onChange={this.onMessageChange}
              onKeyDown={this.onMessageKeyPress}
            />
        </div>
      </div>
    );
  }
}

export default Home;
