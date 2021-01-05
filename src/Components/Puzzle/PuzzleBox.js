import React from "react";
import { connect } from "react-redux";
import "./PuzzleBox.css";
import PuzzleCard from "./PuzzleCard";

function PuzzleBox({ puzzle }) {
  return (
    <div className="puzzle__box">
      {puzzle.map((value) => (
        <PuzzleCard value={value} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    puzzle: state.puzzle,
  };
};
export default connect(mapStateToProps)(PuzzleBox);
