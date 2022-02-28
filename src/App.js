import React from "react";
import "./App.css";
// import Comment from "./component/Comment";
import Container from "./component/Container";
import Post from "./component/Post";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/post"
          element={
            <Container>
              <Post />
            </Container>
          }
        /> */}
        {/* <Route
          path="/comment"
          element={
            <Container>
              <Comment />
            </Container>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
