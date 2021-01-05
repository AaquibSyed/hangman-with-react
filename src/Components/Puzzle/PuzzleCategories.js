import React from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import "./PuzzleCategories.css";
import { categoryClicked } from "./../../Redux/actions";

function PuzzleCategories({ categories, categoryClicked }) {
  return (
    <div className="puzzle__categories">
      {categories.map((category) => (
        <button
          className="button button_category"
          onClick={(e) => {
            categoryClicked(e);
            document.getElementById("input__textBox").focus();
          }}
          key={uuid()}
          name={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    categorySelected: state.categorySelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryClicked: (e) => dispatch(categoryClicked(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleCategories);
