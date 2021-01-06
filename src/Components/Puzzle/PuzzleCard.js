import React from "react";
import uuid from "react-uuid";
import "./PuzzleCard.css";

function PuzzleCard({ value, enteredCharacters }) {
  return (
    <div className="character_container" key={uuid()}>
      <div
        className={value === " " ? "character_space" : "character_front"}
      ></div>
      <div
        className={
          value === " "
            ? "character_space"
            : enteredCharacters.includes(value.toLowerCase())
            ? "character_back character_right"
            : "character_back"
        }
      >
        {value}
      </div>
    </div>
  );
}

export default PuzzleCard;
