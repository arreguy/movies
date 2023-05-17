import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      movies => {
        this.movieService.movieArray = movies;
      },
      error => console.error(error)
    );
  }

  onEdit(movie: Movie): void {
    const novoTitulo = prompt("Novo Título: ");
    if (novoTitulo) {
      const updatedMovie = {...movie, title: novoTitulo};
      this.movieService.updateMovie(updatedMovie)
      .subscribe();
    }
  }

  onDelete(movie: Movie): void {
    this.movieService.deleteMovie(movie)
      .subscribe(deletedMovie => {
        console.log("Filme deletado: ", deletedMovie);
      });
  }
}
