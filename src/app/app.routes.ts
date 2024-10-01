import { Routes } from '@angular/router';
import { DirectorsComponent } from './components/directors/directors.component';
import { GenreComponent } from './components/genre/genre.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ReviewComponent } from './components/review/review.component';

export const routes: Routes = [
{path: 'directors', component: DirectorsComponent},
{path: 'genre', component: GenreComponent},
{path: 'review', component: ReviewComponent},
{path: 'movies', component: MoviesComponent},
];
