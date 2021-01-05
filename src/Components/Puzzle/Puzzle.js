import React from "react";
import "./Puzzle.css";
import PuzzleCategories from "./PuzzleCategories";
function Puzzle() {
  return (
    <div className="puzzle">
      <PuzzleCategories />
      <div className="puzzle__box">puzzle box here</div>
    </div>
  );
}

export default Puzzle;
