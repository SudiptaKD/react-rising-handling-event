import React , { useState, useEffect} from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from './common/like'

const Movies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
    setMovies(getMovies);
    }, [])

    function deleteMovie(id) {
       const Movies= movies.filter((movie) => movie !== id);
       setMovies(Movies);
    }

    function handleLike(movie) {
      const Movies = [...movies];
      const index = movies.indexOf(movie);
      Movies[index].liked = !movies[index].liked;
      setMovies(Movies);
    } 
    
    if (movies.length===0) 
    return <h1>There are no movies to show</h1>
    return (
        <React.Fragment>
        <h1>Showing {movies.length} movies in the storage </h1>
        <br/>
        <table className="table table-hover table-striped table-dark ">
        <thead>
          <tr>
            <th scope="column">Title</th>
            <th scope="column">Genre</th>
            <th scope="column">Stock</th>
            <th scope="column">Like</th>
            <th scope="column">Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {movies.map((movie)=> <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name} </td>
            <td>{movie.numberInStock} </td>
            <td><Like liked={movie.liked} onLike={ () => handleLike(movie)} /> </td>
            <td>{movie.dailyRentalRate} </td>
            <td><button  onClick={ () => deleteMovie(movie)} 
                type="button" class="btn btn-sm btn-danger">Delete</button> </td>
          </tr>)}
        </tbody>
        </table>
        </React.Fragment>
    )
}

export default Movies
