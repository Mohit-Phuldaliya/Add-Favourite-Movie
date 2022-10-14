import { ADD_MOVIES, ADD_FAVOURITES,REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";
import { combineReducers } from "redux";

const initialMovieState = {
    list : [],
    favourites: [],
    showFavourites: false
}

export function movies(state = initialMovieState, action){

    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;
    
    //use switch

    switch (action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITES:
            return{
                ...state,
                favourites : [action.movie , ...state.favourites]
            }


        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return{
                ...state,
                favourites : filteredArray
            };

            case SET_SHOW_FAVOURITES:
                return{
                    ...state,
                    showFavourites: action.val
                }
            default: 
            return state;
    }
}

const initialSearchState = {
    result: {}
}
export function search (state = initialSearchState, action){
    return state;
}


// const initialRootState = {
//     movies : initialMovieState,
//     search : initialSearchState
// }
// export default function rootReducer (state = initialRootState, action){
//     return {
//         movies: movies(state.movies, action), 
//         search: search(state.search,action)
//     }
// }

//**********Redux provide combineReducers for the same */

export default combineReducers({
    // movies : movies,
    // search: search
    movies, //shorthand bcz since name of the property and reducers name is same
    search //shorthand bcz since name of the property and reducers name is same
})