import React from 'react';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-sidebar">
            <h2>Channel name</h2>
        </div>
        <div className="Home-header">

        </div>
        <div className="Home-main">UserX: whoo</div>
        <div className="Home-footer">
            <input type="text" placeholder="Write something" />
        </div>
      </div>
    );
  }
}

export default Home;
