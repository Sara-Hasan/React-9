import React, { useState, useEffect } from "react";
import "../style.css";
import Post from "./Post";

function Home() {
  const today = new Date();
  const currentDate =
    today.getFullYear() + " " + (today.getMonth() + 1) + " " + today.getDate();

  const [post, setPost] = useState();
  const [posts, setPosts] = useState(() => []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("posts"))) {
      setPosts(() => JSON.parse(localStorage.getItem("posts")));
    }
  }, [post]);
  function handleSubmit(e) {
    e.preventDefault();
    if (post !== "") {
      setPosts(() => {
        if (!JSON.parse(localStorage.getItem("posts"))) {
          localStorage.setItem(
            "posts",
            JSON.stringify([
              {
                id: Math.ceil(Math.random() * 1000),
                text: post,
                date: currentDate,
              },
            ])
          );
        } else {
          localStorage.setItem(
            "posts",
            JSON.stringify([
              ...posts,
              {
                id: Math.ceil(Math.random() * 1000),
                text: post,
                date: currentDate,
                comments: [
                  {
                    name: "",
                    text: "",
                    date: "",
                  },
                ],
              },
            ])
          );
        }
      });
    }
    setPost("");
  }
  // const user = users.filter((ele) => {
  //   console.log(ele.username);
  //   return ele.username;
  // })[0];

  return (
    <div class="ui raised very padded text container segment">
      <div className="post_container">
        <div className="post_grid">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Add Post..."
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
            <button type="submit"> Submit </button>
          </form>
        </div>
        <div className="post_grid">
          {posts
            ? posts.map((singlePost) => (
                <Post post={singlePost} key={Math.ceil(Math.random() * 1000)} />
              ))
            : "No posts!"}
        </div>
      </div>
    </div>
  );
}

export default Home;
