import './App.css';
import { useState, useEffect } from "react";
import Users from "./components/Users";
import TvShowList from "./components/tvShowList";

function App() {
  const [users, setUsers] = useState([]);

  const [shows, setShows] = useState([]);
  console.log(shows);

  const [searchString, setSearchString] = useState("simpsons");

  const [lastSearch, setLastSearch] = useState("");

  const searchOptions = {
    api: "https://api.tvmaze.com/search/shows",
  };
  function getShows(searchString) {
  
    const url = `${searchOptions.api}?q=${searchString}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response[0].show);
        setShows(response[0].show);
        // setLastSearch(searchString);
        // setSearchString("");
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
    fetch('http://localhost:3001/users')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => setUsers(data.usersList));
  }, []);

  useEffect(() => {
    getShows(searchString);
    console.log(shows)
  }, []);
 

  return (
    <div className="App">
      <h1>Tv Show Review App</h1>
         <Users user={users} />
         <TvShowList shows={shows} />

      {/* <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      /> */}
    </div>
  );
}

export default App;
