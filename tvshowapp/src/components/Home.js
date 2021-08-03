import React from 'react'
import  { useState } from 'react'
import { ResultCard } from './ResultCard'

const Home = (userID) => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState ([{}])

   const onChange = (e) => {
     e.preventDefault();

     setQuery(e.target.value);

     fetch(
       `https://api.themoviedb.org/3/search/tv?api_key=ddbfb66d7fd265a17d37fd4c77d34b51&language=en-US&page=1&include_adult=false&query=${e.target.value}`
     )
       .then((res) => res.json())
       .then((data) => {
         if(!data.erros) {
             console.log(data)
             setResults(data.results)
         } else {
             setResults([])
         }
       });
   };
    
    return (
        <div className='add-page'>
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Enter TV Show" 
                        value={query}
                        onChange={onChange}
                        />
                    </div>
                    {results.length > 0 && (
                        <ul className='results'>
                            {results.map((show) => (
                                <li key={show.id}>
                                    {/* {show.name} */}
                                <ResultCard show={show} userID={userID} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home
