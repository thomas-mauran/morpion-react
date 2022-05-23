import React from "react";

import "./plateau.css";
import Case from "../case/case";

export default function Plateau() {
  const [plateau, setPlateau] = React.useState(new Array(9).fill(""));
  const [nextTurn, setNextTurn] = React.useState("X");

  function handleClick(i) {
    let tab = [...plateau];
    if (tab[i] === "") {
      if (nextTurn == "X") {
        tab[i] = "X";
        setNextTurn("O");
      } else {
        tab[i] = "O";
        setNextTurn("X");
      }
    }
    setPlateau(tab);
  }

  return (
    <div className="plateau">
      {[...plateau].map((element, index) => (
        <Case
          onClick={(i) => {
            handleClick(i);
          }}
          value={element}
          index={index}
        />
      ))}
    </div>
  );
}
