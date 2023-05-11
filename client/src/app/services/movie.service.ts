import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private URL: string = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.URL}`);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.URL}`, movie);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.URL}`, movie);
  }

  deleteMovie(movie: Movie): Observable<Movie> {
    return this.http.delete<Movie>(`${this.URL}`, movie._id)
      .pipe(
        map(() => movie)
      );
  }
}
