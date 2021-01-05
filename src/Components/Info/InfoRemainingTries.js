import React from "react";

function InfoRemainingTries({ tries }) {
  return (
    <div className="info__remainingTries">
      <div className="info__label">
        <h5>Remaining Tries</h5>
      </div>
      <div className="info__detail">
        <h1>{tries}</h1>
      </div>
    </div>
  );
}

export default InfoRemainingTries;
