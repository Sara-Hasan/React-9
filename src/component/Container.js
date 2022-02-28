import React from "react";
import "../style.css";

function Container(props) {
  console.log(props);

  return (
    <div className="gg">
      <div className="ui cards">
        <div className="card">
          <div className="content">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Container;
