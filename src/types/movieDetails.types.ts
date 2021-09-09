import { MovieDTO } from "../dtos/MovieDTO";

export interface MovieDetailsProps {
  moviesReleases: MovieDTO[];
  mostPopularMovie: MovieDTO[];
  moviesAction: MovieDTO[];
  moviesAnimation: MovieDTO[];
  moviesComedian: MovieDTO[];
  moviesRomance: MovieDTO[];
  moviesMystery: MovieDTO[];
  moviesHorror: MovieDTO[];
}
