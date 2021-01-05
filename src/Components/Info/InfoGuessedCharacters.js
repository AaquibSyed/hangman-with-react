import React from "react";
import uuid from "react-uuid";

function InfoGuessedCharacters({ enteredChars }) {
  return (
    <div className="info__guessedCharacters">
      <div className="info__label">
        <h5>Guessed Characters</h5>
      </div>
      <div className="info__detail">
        {enteredChars.map((e) => (
          <div key={uuid()}>
            <b>{e}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoGuessedCharacters;
