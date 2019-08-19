import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [movieInList, setMovieInList] = useState();

  const addToSavedList = movie => {
    const findMovie = savedList.find(el => movie.id === el.id);
    if (findMovie) {
      setMovieInList(`Movie already saved.`);
      setTimeout(() => setMovieInList(null), 2000);
    } else setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      {movieInList !== null ? (
        <h3 className="movie-warning">{movieInList}</h3>
      ) : null}
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" render={(props) => {
        return(<Movie {...props} addToSavedList={addToSavedList}/>)
      }} />
    </div>
  );
};

export default App;
