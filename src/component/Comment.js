import React, { useState, useEffect } from "react";
import faker from "@faker-js/faker";

export default function Comment({ post_id }) {
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedComments);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });
  const users = JSON.parse(localStorage.getItem("users"));
  const [comment, setComment] = useState("");
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);
  function handleInputChange(e) {
    // set the new state value to what's currently in the input box
    setComment(() => {
      return {
        id: post_id,
        text: e.target.value.trim(),
      };
    });
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    if (comment !== "") {
      setComments([...comments, comment]);
    }

    // clear out the input box
    setComment("");
  }
  const user = users.filter((ele) => {
    return ele.username;
  })[0];

  return (
    <div className="ui comments">
      <div className="extra content">
        <form className="ui form" onSubmit={handleFormSubmit}>
          <div className="ui large transparent left icon input">
            <i className="heart outline icon"></i>
            <input
              type="text"
              placeholder="Add Comment..."
              name="comment"
              // value={comment}
              onChange={handleInputChange}
            />
          </div>
        </form>
        {comments
          .filter((comment) => comment.id === post_id)
          .map((postComment) => (
            <div className="comment" key={Math.ceil(Math.random() * 1000)}>
              <a href="/" className="avatar">
                <img alt="avater" src={faker.image.avatar()} />
              </a>
              <div className="content">
                <a className="author" href="/">
                  {user.username}
                </a>
                <div className="metadata">
                  <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">{postComment.text}</div>
                <div className="actions">
                  <a className="reply" href="/">
                    Reply
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
