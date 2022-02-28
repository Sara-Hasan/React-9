import React, { useState, useEffect } from "react";
import faker from "@faker-js/faker";
import Comment from "./Comment";

export default function Post({ post }) {
  console.log(post.id);
  return (
    <div className="ui card post">
      <div className="content">
        <div className="right floated meta">14h</div>
        <img className="ui avatar image" src={faker.image.avatar()} /> Sarah
      </div>
      <div className="text">
        <p> {post.text}</p>
      </div>
      <div className="content">
        <span className="right floated">
          <i className="heart outline like icon"></i>
          17 likes
        </span>
        <i className="comment icon"></i>3 comments
        <Comment post_id={post.id} />
      </div>
    </div>
  );
}
