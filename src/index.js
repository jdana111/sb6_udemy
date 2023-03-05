import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/profile1.jpeg'

const App = () => (
  <div className="ui comments">
    <div className="comment">
      <a href="/" className="avatar">
        <img id="1" src={profile1} data-width="100" alt="" />
        <img id="2" src={profile1} style={{width: '100px'}} alt="" />
        <img id="3" src="/src/image/profile1.jpeg" style={{width: '100px'}} alt="" />
        <h1>Visible?</h1>
      </a>
      <a href="/" className="author">
        Sarah
      </a>
      <div className="metadata">
        <span className="date">
          Todat at 5:00 PM
        </span>
      </div>
      <div className="text">
        It's amazing.
      </div>
    </div>
  </div>
)

ReactDOM.render (<App />, document.getElementById('root'));