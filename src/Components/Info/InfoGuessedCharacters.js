import React from "react";
import uuid from "react-uuid";

function InfoGuessedCharacters({ enteredChars }) {
  return (
    <div className="info__guessedCharacters">
      <div className="info__label">
        <h5>Guessed Characters</h5>
      </div>
      <div className="info__detail">
        {enteredChars.map((c) => (
          <div className="info__enteredItems" key={uuid()}>
            <h3>{c.toUpperCase()}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoGuessedCharacters;
