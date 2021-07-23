'use strict';

let numberOfFilms;
for (let i = 1; i < 2; i++){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    if (numberOfFilms != null && numberOfFilms != '' && numberOfFilms.length < 50){
        break;
    } else {
        i--;
    }
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a;
let b;

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
if (personalMovieDB.count > 1 && personalMovieDB.count < 10){
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);