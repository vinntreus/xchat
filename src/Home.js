import React from 'react';
import './Home.css';
import axios from 'axios';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
      messages: [],
      errors: []
    };
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onMessageKeyPress = this.onMessageKeyPress.bind(this);
    this.messagesEnd = null;
  }
  sendMessage(message){
    let self = this;
    axios.post('/api/messages/', message)
    .then(function (response) {
      self.setState({errors: []});
      self.messageSent(message);
    })
    .catch(function (error) {
      self.setState({errors: [error]});
    });
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
    const errors = this.state.errors.map((e, i) => {
      return <div key={i} className='Error-item'>{e.toString()}</div>
    });
    return (
      <div className='Home'>
        <div className='Home-sidebar'>
            <h2>Channel name</h2>
        </div>
        <div className='Home-header'></div>
        <div className='Home-main'>
          {errors}
          <div className='Message-list'>{messages}</div>
          <div style={{ float:'left', clear: 'both' }} ref={(el) => { this.messagesEnd = el; }}></div>
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
  scrollToBottom = () => {
    if(this.messagesEnd && this.messagesEnd.scrollIntoView){
      this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    }
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    //Todo: this is troublesome when scrolling upwards and the page
    // would update e.g when another user types something new.
    this.scrollToBottom();
  }
}

export default Home;
