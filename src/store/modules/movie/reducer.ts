import { Reducer } from "redux";
import produce from "immer";
import { IMovieState } from "./types";

const INITIAL_STATE: IMovieState = {
  items: [],
};

const movie: Reducer<IMovieState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MOVIE_INFO": {
      const { movies } = action.payload;

      return {
        ...state,
        items: movies,
      };
    }

    default: {
      return state;
    }
  }
};

export default movie;
