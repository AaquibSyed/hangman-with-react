import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import "./Info.css";
import InfoGameOver from "./InfoGameOver";
import InfoGuessedCharacters from "./InfoGuessedCharacters";
import InfoRemainingTries from "./InfoRemainingTries";
import { restartGame } from "../../Assets/data";

function Info({ wrongGuesses, enteredCharacters, remainingCharacters }) {
  if (remainingCharacters.length === 0) {
    return (
      <Modal isOpen={true}>
        <div className="modal_Container">
          <p>GAME WON🥳🎉</p>
          <button className="button button-restart" onClick={restartGame}>
            RESTART GAME
          </button>
        </div>
      </Modal>
    );
  } else {
    return (
      <div className="info">
        <InfoRemainingTries tries={5 - wrongGuesses} />
        <InfoGameOver wrongGuesses={wrongGuesses} />
        <InfoGuessedCharacters enteredChars={enteredCharacters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wrongGuesses: state.wrongGuesses,
    enteredCharacters: state.enteredCharacters,
    remainingCharacters: state.remainingCharacters,
  };
};
export default connect(mapStateToProps)(Info);
