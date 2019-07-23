import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Link } from 'react-router-dom'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
    console.log(savedList)
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes!</div> */}
        <Route path="/" exact render={props => {console.log(props); return <MovieList {...props}/>}} />
        <Route path="/movies/:id" render={props => {console.log(props); return <Movie {...props}/>}} />

    </div>
  );
};

export default App;
