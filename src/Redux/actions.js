import { CATEGORY_CLICKED } from "./types";

export const categoryClicked = (e) => {
  return {
    type: CATEGORY_CLICKED,
    payload: {
      categoryName: e.target.name,
      isCategorySelectionActive: false,
    },
  };
};
