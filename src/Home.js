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
  onMessageChange(event){
    this.setState({message: event.target.value});
  }
  onMessageKeyPress(event){
    if(event.keyCode === 13 && this.state.message){
      let messages = this.state.messages;
      messages.push({text: this.state.message});
      this.setState({messages: messages, message: ''});
    }
  }
  render() {
    const messages = this.state.messages.map((m, i) => {
      return (
        <div key={i} className='Message-item'>{m.text}</div>
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
