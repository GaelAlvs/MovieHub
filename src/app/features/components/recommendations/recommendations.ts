import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../../core/services/tmdb.service';
import { Movie } from '../../../core/models/movie.model';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendations.html',
})
export class Recommendations implements OnInit {
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private tmdb: TmdbService) {}

  ngOnInit() {
    // filmes populares
    this.tmdb.getPopularMovies(1).subscribe((res) => {
      this.popularMovies = res.results.slice(0, 10);
    });

    // top rated — adicione esse método no TmdbService
    this.tmdb.getTopRatedMovies(1).subscribe((res) => {
      this.topRatedMovies = res.results.slice(0, 10);
    });
  }

  getPoster(path: string): string {
    return this.tmdb.getPosterUrl(path, 'w200');
  }
}
