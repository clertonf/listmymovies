import api from "../services/api";

const apiKey = "api_key=d1500cc9c6f961ce14985838ee30eee4";
const language = "language=pt-BR";

export function getReleaseMovies() {
  return api.get(`/discover/movie?${apiKey}&${language}`);
}

export function getMovieAction() {
  return api.get(
    `/movie/top_rated?${apiKey}&${language}&with_genres=28&page=1`
  );
}

export function getMostPopularMovies() {
  return api.get(`/movie/top_rated?${apiKey}&${language}&page=2`);
}
