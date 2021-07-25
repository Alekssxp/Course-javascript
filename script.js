'use strict';

let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a;
let b;

function rememberMyFilms() {

    for(let i = 1; i < 8; i++){
    
        if(i == 2 || i == 6){
            a = prompt('Один из последних просмотренных фильмов?', '');
            if (a != null && a != '' && a.length < 50){
                continue;
            } else {
                i--;
            }
        }
        if (i == 4 || i == 7){
            b = prompt('На сколько оцените его?', '');
            if (b != null && b != '' && b.length < 50){
                personalMovieDB.movies[a] = b;
    
                continue;
            } else {
                i--;
            }
        }
    }
}
rememberMyFilms();


function detectPersonalLevel (){

    if (personalMovieDB.count > 0 && personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30){
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB (){
    if (personalMovieDB.privat != true) {
        console.log(personalMovieDB);
    } else {
        console.log('Ошибка!!!');
    }
}

showMyDB ();

function writeYourGenres () {
    for (let i = 0; i < 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
        personalMovieDB.genres[i] = a;
    }
}

writeYourGenres();