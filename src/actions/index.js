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
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SESRCH_RESULT = 'ADD_SESRCH_RESULT';


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

export function addMovietoList(movie) {
    return{
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}


export function handleMovieSearch(movie){ // responsible getting data from server adding  and fetching 2nd adding to the reducers
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`; 

    return function(dispatch){ 
    fetch(url)
    //  .then(response => console.log(response));
     .then(response => response.json()) //calling method json wich returns json response // return a promise
     .then(movie => {
        console.log('movie', movie);

        //dispatch an action // to adding in store
        //dispatch({type: 'ADD_SESRCH_RESULT', movie})
        dispatch(addMovieSearchRsult(movie));
     })
    }
}

export function addMovieSearchRsult (movie){
    return {
        type: ADD_SESRCH_RESULT,
        movie
        };
}