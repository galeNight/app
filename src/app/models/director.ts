import { Movie } from "./movie";

export interface Director {
    id: number;
    name: string;
    movies: Movie[];
  }