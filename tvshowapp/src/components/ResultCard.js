import React, { useState } from 'react'

import axios from 'axios'



export const ResultCard = ({show, userID}) => {
  const [opinion, setOpinion] = useState([])
  

  console.log("userID", userID)
 
  const addTvShow = (show, userID) => {
    const submitData = {
      tvShows: [show.name],
      opinion: [show.opinion],
      user: '610727059c7c9b5f90451785'
    };
    console.log(submitData.user)
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
              <h3 style={{color: 'springgreen', backgroundColor: 'gray'}}className="title">{show.name}</h3>
              <h4 style={{color: 'salmon', backgroundColor: 'white'}}className="release-date">{show.overview}</h4>
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
          <button className="btn" onClick={() => addTvShow(show)}>
            Add Show
          </button>
        </div>
        {/* <article>
          <form onClick={() => addTvShow(show)}>
            <div className="form-control">
              <label htmlFor="opinion">Add/Edit Comment: </label>
              <textarea
                type="text"
                id="opinion"
                name="opinion"
                value={opinion}
                onChange={(e) => setOpinion(e.target.value)}
              />
            </div>
            <button>
              Add Comment
            </button>
          </form>
        </article> */}
      </div>
    );
}
