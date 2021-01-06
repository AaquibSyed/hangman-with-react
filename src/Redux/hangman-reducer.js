import { CATEGORY_CLICKED, CHAR_ENTERED } from "./types";
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
  enteredCharacters: [],
  wrongGuesses: 0,
  remainingCharacters: [""],
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
        remainingCharacters: randomPuzzle.filter((e) => e !== " "),
        enteredCharacters: [],
        wrongGuesses: 0,
      };

    case CHAR_ENTERED:
      const enteredCharacter = action.payload.enteredCharacter;
      const wrongGuessCount =
        state.remainingCharacters.includes(enteredCharacter.toUpperCase()) ||
        state.remainingCharacters.includes(enteredCharacter.toLowerCase())
          ? state.wrongGuesses
          : ++state.wrongGuesses;
      const _remainingChars = state.remainingCharacters.filter(
        (e) => e.toUpperCase() !== enteredCharacter.toUpperCase()
      );

      return {
        ...state,
        enteredCharacters: [...state.enteredCharacters, enteredCharacter],
        wrongGuesses: wrongGuessCount,
        remainingCharacters: _remainingChars,
      };

    default:
      return state;
  }
};
