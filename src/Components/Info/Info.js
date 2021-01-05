import React from "react";
import { connect } from "react-redux";
import "./Info.css";
import InfoGameOver from "./InfoGameOver";
import InfoGuessedCharacters from "./InfoGuessedCharacters";
import InfoRemainingTries from "./InfoRemainingTries";

function Info({ wrongGuesses, enteredCharacters }) {
  return (
    <div className="info">
      <InfoRemainingTries tries={5 - wrongGuesses} />
      <InfoGameOver />
      <InfoGuessedCharacters enteredChars={enteredCharacters} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    wrongGuesses: state.wrongGuesses,
    enteredCharacters: state.enteredCharacters,
  };
};
export default connect(mapStateToProps)(Info);
