import React from "react";

const Comment = (props) => (
  <div className="comment">
    <a href="/" className="avatar">
      <img id="2" src={props.image} style={{ width: "100px" }} alt="" />
    </a>
    <div className="content">
      <a href="/" className="author">
        {props.name}
      </a>
      <div className="metadata">
        <span className="date">{props.date}</span>
      </div>
      <div className="text">{props.comment}</div>
    </div>
  </div>
);

export default Comment;
