import React from "react";
// import {data} from '../data';
import {addMovietoList,handleMovieSearch} from '../actions'

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            // showSearchResults: flase, //moved to store 
            searchText: ''
        };
    }

    handleAddToMovies = (movies) => {
        this.props.dispatch(addMovietoList(movies));
        this.setState({
            showSearchResults:false
        });
    }

    
    handleSearch = () => {
        const {searchText} = this.state;

        this.props.dispatch(handleMovieSearch(searchText)); // action creator it should basically responsible for fetching data from server(API) and it should send the data to store as well
    } 

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value 
        });
    };




    
    render(){

        // const {showSearchResults} = this.state;
        const {result:movie /*renaming after destructuring */ , showSearchResults} = this.props.search;
        return(
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {showSearchResults &&

                    <div className="search-results">

                        <div className="search-result">
                            <img src={movie.Poster} alt="search-pic" />

                            <div className="movie-info">
                                <span>{movie.Title}</span>
                                <button onClick={()=>this.handleAddToMovies(movie)}>Add to Movies</button>
                            </div>

                        </div>
                    </div>
                    }




                </div>
            </div>
        );
    }
}

export default Navbar;