import React from 'react';
import ReactZZZ from 'react-dom';

const App = () => (
  <div className="ui comments">
    <div className="comment">
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

ReactZZZ.render (<App />, document.getElementById('root'));