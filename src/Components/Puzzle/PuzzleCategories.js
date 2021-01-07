import React from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import "./PuzzleCategories.css";
import { categoryClicked } from "./../../Redux/actions";

function PuzzleCategories({
  categories,
  categoryClicked,
  isCategorySelectionActive,
  categorySelected,
}) {
  return (
    <>
      {isCategorySelectionActive && (
        <div className="puzzle__categories">
          {categories.map((category) => (
            <button
              className="button button_category"
              onClick={(e) => {
                categoryClicked(e);
                setTimeout(() => {
                  document.getElementById("input__textBox").focus();
                }, 500);
              }}
              key={uuid()}
              name={category}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      {!isCategorySelectionActive && (
        <div className="puzzle__selectedCategory">
          <p>
            The selected category is{" "}
            <i className="category__text">{categorySelected}</i>
          </p>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    categorySelected: state.categorySelected,
    isCategorySelectionActive: state.isCategorySelectionActive,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryClicked: (e) => dispatch(categoryClicked(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleCategories);
