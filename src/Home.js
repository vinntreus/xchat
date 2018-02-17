import React from 'react';
import './Home.css';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    };
    this.onMessageChange = this.onMessageChange.bind(this);
  }
  onMessageChange(event){
    this.setState({message: event.target.value});
  }
  render() {
    return (
      <div className='Home'>
        <div className='Home-sidebar'>
            <h2>Channel name</h2>
        </div>
        <div className='Home-header'>

        </div>
        <div className='Home-main'></div>
        <div className='Home-footer'>
            <input
              className='Message-input'
              type='text'
              placeholder='Write something'
              value={this.state.message}
              onChange={this.onMessageChange}
            />
        </div>
      </div>
    );
  }
}

export default Home;
