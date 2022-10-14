// {
//     type:'ADD_MOVIES',
//     movies: [m1, m2, m3]
// }
// {
//     type: 'DECREASE_COUNT'
// } 

// Action Types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';


// action creators // bcz ultimately returning an action

export function addMovies (movies) {
    return {
        type : ADD_MOVIES,
        // movies : movies
        movies //short hand
    }
}

export function addFavourites (movie) { //movie an object only
    return {
        type : ADD_FAVOURITES,
        // movie : movie
        movie //short hand
    }
}

export function removeFromFavourites (movie) { //movie an object only
    return {
        type : REMOVE_FROM_FAVOURITES,
        // movie : movie
        movie //short hand
    };
}

export function setShowFavourites (val) { //val:- boolean ture or false
    return {
        type : SET_SHOW_FAVOURITES,
        val //passing value to reducers
    };
}