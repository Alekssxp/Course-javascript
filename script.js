'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    let lastNameFilms = prompt('Один из последних просмотренных фильмов?'),
    gradeFilm = prompt('На сколько оцените его?');
    let lastNameFilms1 = prompt('Один из последних просмотренных фильмов?'),
    gradeFilm1 = prompt('На сколько оцените его?');


    personalMovieDB.movies[lastNameFilms] = gradeFilm;
    personalMovieDB.movies[lastNameFilms1] = gradeFilm1;

console.log(personalMovieDB);