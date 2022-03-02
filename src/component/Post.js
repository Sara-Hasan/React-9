import React, { useState, useEffect } from "react";
import faker from "@faker-js/faker";
import Comment from "./Comment";

export default function Post({ post }) {
  const [editPost, setEditPost] = useState("");
  const [form, setForm] = useState(false);
  const today = new Date();
  const currentDate =
    today.getFullYear() + " " + (today.getMonth() + 1) + " " + today.getDate();
  const posts = JSON.parse(localStorage.getItem("posts"));
  function handleDelete() {
    const updatedPostsArr = posts
      .map((loopedPost) => (loopedPost.id === post.id ? "" : loopedPost))
      .filter((post) => post !== "");
    localStorage.setItem("posts", JSON.stringify(updatedPostsArr));
    window.location.reload();
  }
  const showForm = () => {
    setForm(true);
  };
  const update = (e) => {
    e.preventDefault();
    const updatedPostsArr = posts.map((loopedPost) =>
      loopedPost.id === post.id
        ? { id: post.id, text: editPost, date: currentDate }
        : loopedPost
    );

    localStorage.setItem("posts", JSON.stringify(updatedPostsArr));
    window.location.reload();
  };
  return (
    <div className="ui card post">
      <div className="content">
        <div className="right floated meta">14h</div>
        <img
          className="ui avatar image"
          src={faker.image.avatar()}
          alt="user"
        />{" "}
        Sarah
      </div>
      <button onClick={showForm}> Edit </button>
      {form && (
        <form onSubmit={update}>
          <input
            type="text"
            placeholder="Update your post"
            onChange={(e) => setEditPost(e.target.value)}
          />
          <button type="submit"> Save </button>
        </form>
      )}
      <div className="text">
        <p> {post.text}</p>
      </div>
      <div className="content">
        <span className="right floated">
          <i className="heart outline like icon"></i>
          17 likes
        </span>
        <i className="comment icon"></i>3 comments
        <Comment post_id={post.id} key={Math.ceil(Math.random() * 1000)} />
      </div>
      {post ? (
        <button type="submit" onClick={handleDelete}>
          {" "}
          delete{" "}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
