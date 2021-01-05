import React from "react";
import uuid from "react-uuid";
import "./PuzzleCard.css";

function PuzzleCard({ value }) {
  return (
    <div className="character_container" key={uuid()}>
      <div
        className={value === " " ? "character_space" : "character_front"}
      ></div>
      <div className={value === " " ? "character_space" : "character_back"}>
        {value}
      </div>
    </div>
  );
}

export default PuzzleCard;
