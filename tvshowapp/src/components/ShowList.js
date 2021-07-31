import { useState, useEffect } from "react";
import ShowSearchHeader from "./ShowSearchHeader";
import ShowSearchForm from "./ShowSearchForm";


const ShowList = () => {

  const [show, setShow] = useState([]);
  // console.log(show);

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
        
        setShow(show => [...show, response[0].show]);
        setLastSearch(searchString);
        setSearchString("");
      })
      .catch(console.error);
  }

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getShows(searchString);
  }

  useEffect(() => {
    getShows(searchString);
    console.log(show)
  }, []);
 

  return (
    
      <div>
            <h1>Search Tv Shows to Add..</h1>
            <ShowSearchForm
                   handleChange={handleChange}
                   handleSubmit={handleSubmit}
                   searchString={searchString}
            />
            <ShowSearchHeader lastSearch={lastSearch} />
            <h1>{show.name}</h1>
            {show.url}
            {/* {shows.image} */}
            {/* <img src={show.image} alt={show.name} /> */}
            {show}

          
      </div>
        
  );
 }    

export default ShowList;