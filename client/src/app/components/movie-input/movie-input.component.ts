import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/movie.model';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-input',
  templateUrl: './movie-input.component.html',
  styleUrls: ['./movie-input.component.css']
})
export class MovieInputComponent implements OnInit {

  movieForm!: FormGroup;

  constructor(private MovieService: MovieService, private fb: FormBuilder) { }

  onSubmit(): void {
    const newMovie: Movie = this.movieForm.value;
    this.MovieService.addMovie(newMovie).subscribe();
    this.movieForm.reset();
  } 

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      releaseDate: ['', Validators.required],
      imageURL: ['', Validators.required],
      isAvailable: [false]
    });
  }
}