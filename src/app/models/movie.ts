import { Review } from "./review";

export interface Movie {
    id: number;
    title: string;
    durationMinutes: number;
    directorId: number;
    genreId: number;
    reviews: Review[];
  }