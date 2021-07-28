
import React from 'react';
import { useState, useEffect } from 'react';
import Users from './components/Users';
import tvShowList from './components/tvShowList';


function App() {
  const [users, setUsers] = useState([]);

  const [shows, setShows] = useState([]);
  
  const [searchString, setSearchString] = useState("simpsons");

  const [lastSearch, setLastSearch] = useState('');
  
  const searchOptions = {
    api: 'https://api.tvmaze.com/search/shows',

  };
  function getShows(searchString) {
    /* Build a URL from the searchOptions object */
    const url = `${searchOptions.api}?q=${searchString}`;
    
    fetch(url)
    .then(response => response.json())
    .then(response => {
      setShows(response.data);
      // Set the lastSearch to the searchString value
      setLastSearch(searchString);
      // Set the searchString in state to an empty string
      setSearchString('');
    })
    .catch(console.error);
  }
  // function handleChange(event) {
  //   setSearchString(event.target.value);
  // }
  
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   getShows(searchString);
  // }

  useEffect(() => {
    getShows(searchString);
  }, []);

  return (
    <div className="App">
      <h1>Tv Show Review App</h1>
      <Users user={users} />
      <tvShowList shows={shows} />
  
      {/* <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      /> */}
    </div>
  );
}

export default App;



