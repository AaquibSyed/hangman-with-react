import React from "react";
import { connect } from "react-redux";
import "./PuzzleBox.css";
import PuzzleCard from "./PuzzleCard";
import uuid from "react-uuid";

function PuzzleBox({ puzzle, enteredCharacters }) {
  const charArray = Array.from(enteredCharacters);
  return (
    <div className="puzzle__box">
      {puzzle.map((value) => (
        <PuzzleCard value={value} key={uuid()} enteredCharacters={charArray} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    puzzle: state.puzzle,
    enteredCharacters: state.enteredCharacters,
  };
};
export default connect(mapStateToProps)(PuzzleBox);
