import { MovieDTO } from "../dtos/MovieDTO";

export interface MovieDetailsProps {
  moviesReleases: MovieDTO[];
  mostPopularMovie: MovieDTO[];
  moviesAction: MovieDTO[];
}
