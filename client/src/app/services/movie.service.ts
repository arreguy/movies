import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, pipe, tap, throwError } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movieArray: Movie[] = [];

  private URL: string = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.URL}`);
  }

  addMovie(movie: Movie): Observable<Movie> {
    console.log(movie.title)
    return this.http.post<Movie>(`${this.URL}`, movie)
    .pipe(
      tap((newMovie: Movie) => {
        this.movieArray.push(newMovie);
      }),
      catchError((error: any) => throwError(error))
    ); 
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.URL}`, movie)
    .pipe(
      tap((newMovie: Movie) => {
        const index = this.movieArray.findIndex(m => m._id === movie._id);
        this.movieArray[index] = movie;
      }),
      catchError((error: any) => throwError(error))
    ); 
  }

  deleteMovie(movie: Movie): Observable<Movie> {
    return this.http.delete<Movie>(`${this.URL}/${movie._id}`)
    .pipe(
      tap(() => {
        this.movieArray.splice(this.movieArray.indexOf(movie), 1);
      }),
      catchError((error: any) => throwError(error))
    ); 
  }
}
