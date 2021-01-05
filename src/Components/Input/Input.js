import React from "react";
import { connect } from "react-redux";
import { charEntered } from "../../Redux/actions";
import "./Input.css";

function Input({ guessSubmitted }) {
  const characterSubmitted = (e) => {
    e.preventDefault();
    const enteredChar = document.getElementById("input__textBox").value;
    guessSubmitted(enteredChar);
    document.getElementById("input__textBox").value = "";
  };

  return (
    <div className="input">
      <form className="input__form" onSubmit={characterSubmitted}>
        <input
          className="input__textBox"
          id="input__textBox"
          maxLength="1"
          type="text"
        />
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    guessSubmitted: (enteredChar) => {
      dispatch(charEntered(enteredChar));
    },
  };
};
export default connect(null, mapDispatchToProps)(Input);
