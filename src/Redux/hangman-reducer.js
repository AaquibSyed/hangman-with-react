import { CATEGORY_CLICKED } from "./types";
import { list } from "./../Assets/data";

const initialState = {
  categories: [
    "Hollywood",
    "Bollywood",
    "Food",
    "Countries",
    "Celebrities",
    "Cartoons",
  ],
  categorySelected: "",
  isCategorySelectionActive: true,
  puzzle: [],
};

export const hangmanReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_CLICKED:
      const categoryName = action.payload.categoryName;
      const categoryContents = list[categoryName];
      const randomNumber = Math.floor(Math.random() * categoryContents.length);
      const randomPuzzle = [...categoryContents[randomNumber]];
      return {
        ...state,
        categorySelected: action.payload.categoryName,
        isCategorySelectionActive: action.payload.isCategorySelectionActive,
        puzzle: randomPuzzle,
      };

    default:
      return state;
  }
};
