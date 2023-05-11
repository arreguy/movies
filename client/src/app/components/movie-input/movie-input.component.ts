import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-input',
  templateUrl: './movie-input.component.html',
  styleUrls: ['./movie-input.component.css']
})
export class MovieInputComponent {

  constructor(private MovieService: MovieService) { }

}
