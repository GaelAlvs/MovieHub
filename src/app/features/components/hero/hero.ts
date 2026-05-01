import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../../core/services/tmdb.service';
import { Movie } from '../../../core/models/movie.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
})
export class Hero implements OnInit {
  featuredMovie: Movie | null = null;

  constructor(private tmdb: TmdbService) {}

  ngOnInit() {
    this.tmdb.getPopularMovies(1).subscribe((res) => {
      // pega o filme mais popular da lista
      this.featuredMovie = res.results[0];
    });
  }

  getBackdrop(path: string): string {
    return this.tmdb.getBackdropUrl(path);
  }
}
