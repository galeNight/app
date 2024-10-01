import { Component, } from '@angular/core';
import { RouterOutlet, } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router,) {}

  navigateToDirectors() {
    this.router.navigate(['/directors']);
  }

  navigateToGenre() {
    this.router.navigate(['/genre']);
  }

  navigateToReview() {
    this.router.navigate(['/review']);
  }

  navigateToMovies() {
    this.router.navigate(['/movies']);
  }
}
