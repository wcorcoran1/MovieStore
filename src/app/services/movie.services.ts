// import { Injectable } from "@angular/core";
import { Movie } from "./movie.model"
export class MovieServices {
    private movies: Movie[] = [
        {title: 'Sleepy Hollow', genre: 'Horror', description: 'Johnny Depp is sent to Sleepy Hollow to solve the case of the Headless Horse Man', price: '$15.00'},
        {title: 'The Dark Knight', genre: 'Action', description: 'Batman is trying to stop the Joker from destroying Gotham', price: '$20.00'},
        {title: 'Avengers EndGame', genre: 'Action', description: 'The remaining Avengers go back in time to undo the effects of the Infinity stones and leads to the last showdown between Thanos and the Avengers.', price: '20.00'},
        {title: 'Dune', genre: 'Sci-Fi', description: 'Paul Atreides, a gifted young man travels to a new world with his family, where they are betrayed and must fight to regain his family honor.', price: '$25.00'},
        {title: 'Scream', genre: 'Horror', description: 'A killer called GhostFace is killing in a small town', price: '$15.00'},
        {title: 'Star Wars A New Hope', genre: 'Sci-fi', description: 'Luke Skywalker and Han Solo try to save Princess Leia from the evil Darth Vader', price: '$10.00'}
    ];

    getMovies(){
        return this.movies;
    }
}