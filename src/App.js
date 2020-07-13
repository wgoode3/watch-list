import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList';
import MovieForm from './Components/MovieForm';
import Tab from './Components/Tab';

function App() {

  const [movies, setMovies] = useState([
    {title: "Godfather", year: 1972, genre: "drama", runTime: 152, status: 0},
    {title: "Toy Story", year: 1998, genre: "animation", runTime: 96, status: 0}
  ]);

  const onNewMovie = newMovie => {
    setMovies([...movies, newMovie]);
  }

  const like = i => {
    const moviesCopy = [...movies];
    moviesCopy[i].status = 1;
    setMovies(moviesCopy);
  }
  
  const dislike = i => {
    const moviesCopy = [...movies];
    moviesCopy[i].status = -1;
    setMovies(moviesCopy);
  }
  
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Movie Watch List</h1>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <MovieForm onNewMovie={onNewMovie} />
        </div>
        <div className="col-sm-8">
          <MovieList data={movies} like={like} dislike={dislike} />
        </div>
      </div>
      <Tab />
    </div>
  );
}

export default App;
