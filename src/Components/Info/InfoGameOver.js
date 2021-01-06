import React from "react";
import "./Info.css";

function InfoGameOver({ wrongGuesses }) {
  const restartGame = () => {
    window.location.reload();
  };

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
