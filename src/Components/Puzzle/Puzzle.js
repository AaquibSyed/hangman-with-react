import React from "react";
import "./Puzzle.css";
import PuzzleBox from "./PuzzleBox";
import PuzzleCategories from "./PuzzleCategories";
function Puzzle() {
  return (
    <div className="puzzle">
      <PuzzleCategories />
      <PuzzleBox />
    </div>
  );
}

export default Puzzle;
