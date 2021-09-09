import { MovieDTO } from "../../../dtos/MovieDTO";

export function movieInfo(movies: MovieDTO) {
  return {
    type: "MOVIE_INFO",
    payload: {
      movies,
    },
  };
}
