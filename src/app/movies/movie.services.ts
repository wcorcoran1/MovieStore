import { Injectable } from "@angular/core";


@Injectable
export class MovieServices {
    private movies: movie[] = [
        {title: 'Sleepy Hollow', genre: 'Horror', description: 'Johnny Depp is sent to Sleepy Hollow to solve the case of the Headless Horse Man'},
        {title: 'The Dark Knight', genre: 'Action', description: 'Batman is trying to stop the Joker from destroying Gotham'},
        {title: 'Avengers EndGame', genre: 'Action', description: 'The remaining Avengers go back in time to undo the effects of the Infinity stones and leads to the last showdown between Thanos and the Avengers.'},
        {title: 'Dune', genre: 'Sci-Fi', description: 'Paul Atreides, a gifted young man travels to a new world with his family, where they are betrayed and must fight to regain his family honor.'},
        {title: 'Scream', genre: 'Horror', description: 'A killer called GhostFace is killing in a small town'},
        {title: 'Star Wars A New Hope', genre: 'Sci-fi', description: 'Luke Skywalker and Han Solo try to save Princess Leia from the evil Darth Vader'}
    ];

    getMovies(){
        return this.movies;
    }
}