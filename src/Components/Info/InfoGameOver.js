import React from "react";
import { restartGame } from "../../Assets/data";
import "./Info.css";

function InfoGameOver({ wrongGuesses }) {
  return (
    <div className="info__gameOver">
      <img
        className={wrongGuesses === 5 ? "info__image gameOver" : "info__image"}
        src="/images/Hangman.jpg"
        alt="Game Over"
      />
      {wrongGuesses === 5 && (
        <button className=" button button-restart" onClick={restartGame}>
          GAME OVER!! Restart Game
        </button>
      )}
    </div>
  );
}

export default InfoGameOver;
