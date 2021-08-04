import React, { useState } from 'react'

import axios from 'axios'



export const ResultCard = ({show, userID}) => {
  const [opinion, setOpinion] = useState(null)
  

  console.log("userID", userID)
 
  const addTvShow = (show, userID) => {
    console.log("got the show", show)
    const submitData = {
      tvShows: show.name,
      opinion: opinion ? opinion : null,
      user: '61088eff87dbae11051761a8',
    };
    console.log(submitData.user)
    axios.put(`http://localhost:3001/users/${submitData.user}`, submitData)
    .then((res) => {
      console.log(res)
    })

  }



    return (
      <div
      style={{ 
        position: 'relative',
        top:'10px'}} 
      className="results-card">
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
          <button 
          style={{marginTop: '20px'}}
          className="btn" onClick={() => addTvShow(show)}>
            Add Show
          </button>
        </div>
        <article>
          <form onSubmit={addTvShow}>
            <div
            style={{color: 'white'}} 
            className="form-control">
              <label htmlFor="opinion">Add Comment: </label>
              <textarea
                type="text"
                id="opinion"
                name="opinion"
                value={opinion}
                onChange={(e) => setOpinion(e.target.value)}
              />
            </div>
            <button
            style={{fontSize: '15px', backgroundColor:"whitesmoke"
                    , color: 'var(--primary)', borderRadius: '40px'}}>
              Submit
            </button>
          </form>
        </article>
      </div>
    );
}
