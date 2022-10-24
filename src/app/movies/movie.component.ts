import { Component, OnInit } from '@angular/core';
import { MovieServices } from '../services/movie.services';

@Component({
  selector: 'movieComponent',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{

  movies: any = []
    
    constructor(private movieService: MovieServices){

    }

    ngOnInit() {
     this.movies = this.movieService.getMovies();
    }
}
