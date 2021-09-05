import { AxiosResponse } from "axios";
import { MovieDTO } from "../dtos/MovieDTO";
import api from "../services/api";

const api_key = "api_key=d1500cc9c6f961ce14985838ee30eee4";

export const getMovie = (page: number): Promise<AxiosResponse<MovieDTO>> => {
  return api.get(
    `/search/movie?api_key=${api_key}&language=pt-BRpage=&${page}&include_adult=false`
  );
};
