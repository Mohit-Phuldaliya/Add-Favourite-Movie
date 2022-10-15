import { 
    ADD_MOVIES,
     ADD_FAVOURITES,
     REMOVE_FROM_FAVOURITES, 
     SET_SHOW_FAVOURITES,
     ADD_SESRCH_RESULT, 
     ADD_MOVIE_TO_LIST
} from "../actions";
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
            case ADD_MOVIE_TO_LIST:
                return{
                    ...state,
                    list: [action.movie, ...state.list]
                };
            default: 
            return state;
    }
}

const initialSearchState = {
    result: {},
    showSearchResults: false,
}
export function search (state = initialSearchState, action){
    switch (action.type){
        case ADD_SESRCH_RESULT:
            return {
                ...state,
                result: action.movie, //when get the movie showSearchResults make it true
                showSearchResults : true
            }
         case ADD_MOVIE_TO_LIST:
             return{
                ...state,
                showSearchResults : false
            };
        default:
            return state;
    }
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