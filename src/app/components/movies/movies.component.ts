import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Movie } from '../../models/movie';



@Component({
  selector: 'app-movies',
  standalone: true,
  imports : [],
templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{
  movies: Movie[]=[];
  constructor(private dataService: DataService) {}
  
  /*ngOnInit(): void {
      this.dataService.getAllMovies().subscribe((data:Movie[]) => {
      this.movies = data;
    });
  }*/
  ngOnInit(): void {
    this.dataService.getAllMovies().subscribe({
      next: (data: Movie[]) => {
        this.movies = data;
      },
      error: (err) => {
        console.error('Error fetching movies', err);
      }
    });
  }
}
