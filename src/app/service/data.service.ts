import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { Genre } from '../models/genre';
import { Review } from '../models/review';
import { Director } from '../models/director';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiurl = 'https://localhost:7234/api';

  constructor(private http:HttpClient) { }

  //Movies
  getAllMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.apiurl}/movies`);
  }
  getMovieById(id:number):Observable<Movie>{
    return this.http.get<Movie>(`${this.apiurl}/movies/${id}`);
  }
  createMovie(movie:Movie):Observable<Movie>{
    return this.http.post<Movie>(`${this.apiurl}/movies`,movie);
  }
  deleteMovie(id:number):Observable<Movie>{
    return this.http.delete<Movie>(`${this.apiurl}/movies/${id}`);
  }

  //Genres
  getAllGenres():Observable<Genre[]>{
    return this.http.get<Genre[]>(`${this.apiurl}/genres`);
  }
  getGenreById(id:number):Observable<Genre>{
    return this.http.get<Genre>(`${this.apiurl}/genres/${id}`);
  }
  createGenre(genre:Genre):Observable<Genre>{
    return this.http.post<Genre>(`${this.apiurl}/genres`,genre);
  }
  deleteGenre(id:number):Observable<Genre>{
    return this.http.delete<Genre>(`${this.apiurl}/genres/${id}`);
  }

  //Reviews
  GetAllReviewa():Observable<Review[]>{
    return this.http.get<Review[]>(`${this.apiurl}/reviews`);
  }
  getReviewById(id:number):Observable<Review>{
    return this.http.get<Review>(`${this.apiurl}/reviews/${id}`);
  }
  createReview(review:Review):Observable<Review>{
    return this.http.post<Review>(`${this.apiurl}/reviews`,review);
  }
  deleteReview(id:number):Observable<Review>{
    return this.http.delete<Review>(`${this.apiurl}/reviews/${id}`);
  }

  //Directors
  getAllDirectors():Observable<Director[]>{
    return this.http.get<Director[]>(`${this.apiurl}/directors`);
  }
  getDirectorById(id:number):Observable<Director>{
    return this.http.get<Director>(`${this.apiurl}/directors/${id}`);
  }
  createDirector(director:Director):Observable<Director>{
    return this.http.post<Director>(`${this.apiurl}/directors`,director);
  }
  deleteDirector(id:number):Observable<Director>{
    return this.http.delete<Director>(`${this.apiurl}/directors/${id}`);
  }
}
