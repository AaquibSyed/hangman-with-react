import { CATEGORY_CLICKED, CHAR_ENTERED } from "./types";

export const categoryClicked = (e) => {
  return {
    type: CATEGORY_CLICKED,
    payload: {
      categoryName: e.target.name,
      isCategorySelectionActive: false,
    },
  };
};

export const charEntered = (enteredChar) => {
  return {
    type: CHAR_ENTERED,
    payload: {
      enteredCharacter: enteredChar,
    },
  };
};
