import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse, Movie } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class TmdbService {
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly imageBase = 'https://image.tmdb.org/t/p';
  private readonly apiKey = 'c784a61db73410aa2c22236b1bcbc816';

  constructor(private http: HttpClient) {}

  getPopularMovies(page = 1): Observable<MovieResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', page)
      .set('language', 'pt-BR');

    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/popular`, { params });
  }

  getTopRatedMovies(page = 1): Observable<MovieResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', page)
      .set('language', 'pt-BR');

    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/top_rated`, { params });
  }

  getPosterUrl(path: string, size: 'w200' | 'w500' | 'original' = 'w500'): string {
    return path ? `${this.imageBase}/${size}${path}` : 'assets/no-image.png';
  }

  getBackdropUrl(path: string): string {
    return path ? `${this.imageBase}/w1280${path}` : '';
  }
}
