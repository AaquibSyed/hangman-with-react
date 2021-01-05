import React from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import "./PuzzleCategories.css";

function PuzzleCategories({ categories }) {
  return (
    <div className="puzzle__categories">
      {categories.map((category) => (
        <button className="button button_category" key={uuid()}>
          {category}
        </button>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(PuzzleCategories);
