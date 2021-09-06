import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import { IMovieState } from "./modules/movie/types";

export interface IState {
  movie: IMovieState;
}

const store = createStore(rootReducer);

export default store;
