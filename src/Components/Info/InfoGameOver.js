import React from "react";
import { restartGame } from "../../Assets/data";
import "./Info.css";

function InfoGameOver({ wrongGuesses, answer }) {
  return (
    <div className="info__gameOver">
      <div className="info__answer">
        <p>
          The answer is <i className="answer__text">{answer.toUpperCase()}</i>
        </p>
      </div>
      <div className="image__container">
        <img
          className="info__image"
          src="/images/Hangman.jpg"
          alt="Game Over"
        />
      </div>
      <div className="restart__container">
        <button className=" button button-restart" onClick={restartGame}>
          GAME OVER😞 Restart Game
        </button>
      </div>
    </div>
  );
}

export default InfoGameOver;
