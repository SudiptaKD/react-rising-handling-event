import './App.css';
import React , { useState, useEffect} from 'react';
import {getMovies} from './services/fakeMovieService';

function App() {

const [movies, setMovies] = useState([]);

useEffect(() => {
    setMovies(getMovies);
}, [])


  return (
    <main className="container">
      <h1>{movies.length} movies is here</h1>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="column">Title</th>
            <th scope="column">Genre</th>
            <th scope="column">Stock</th>
            <th scope="column">Rating</th>
          </tr>
        </thead>
        <tbody> {movies.map((movie)=> <tr>
            <td>{movie.title}</td>
            <td>{movie.genre.name} </td>
            <td>{movie.numberInStock} </td>
            <td>{movie.dailyRentalRate} </td>
          </tr>)}
        </tbody>
      </table>
    </main>
  );
}

export default App;
