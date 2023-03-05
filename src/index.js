import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from "./image/profile1.jpeg";
import Comment from './Comment';

const App = () => (
  <div className="ui comments">
    <Comment name={'Alan'} date={'02/03/23'} comment={'WTF?'} image={profile1} />
  </div>
)

ReactDOM.render (<App />, document.getElementById('root'));