import { AnyAction, Reducer } from "redux";
import { MovieName } from "./types";

const INITIAL_STATE: MovieName = {
  title: "",
};

// const INITIAL_STATE = {
//   info_movie: {},
//   test_string: "",
// };

const movie: Reducer<IMovieName> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TITLE_MOVIE":
      return { ...state, title: action.item };

    default:
      return state;
  }
};

export default movie;
