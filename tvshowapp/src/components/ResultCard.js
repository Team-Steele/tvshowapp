import React, { useContext } from 'react'
import axios from 'axios'

const url = 'http://localhost:3001/users';

export const ResultCard = ({show, userID}) => {
 
  const addTvShow = (show) => {
    const submitData = {
      tvShows: [show.name],
      opinion: [],
      user: userID
    };
    axios.put(`http://localhost:3001/users/${submitData.user}`, submitData)
    .then((res) => {
      console.log(res)
    })

  }

    return (
      <div className="results-card">
        <div className="poster-wrapper">
          <div className="info">
            <div className="header">
              <h3 className="title">{show.name}</h3>
              <h4 className="release-date">{show.overview}</h4>
            </div>
          </div>
          {show.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`}
              alt="{show.name}"
            />
          ) : (
            <div className="filler-poster"></div>
          )}
        </div>
        <div className="controls">
          <button className="btn" onClick={() => addTvShow(show)}>Add Show</button>
        </div>
      </div>
    );
}
