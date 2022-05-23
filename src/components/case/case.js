import React from "react";

import "./case.css";
export default function Case(props) {
  function handleClick() {
    props.onClick(props.index);
  }

  return (
    <div>
      <button onClick={handleClick} className="case-btn">
        {props.value}
      </button>
    </div>
  );
}
