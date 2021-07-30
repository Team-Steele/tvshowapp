import React from 'react'

export const ResultCard = ({show}) => {
    return (
      <div className="results-card">
        <div className="poster-wrapper">
        <div className="info">
            <div className="header">
                <h3 className='title'>{show.name}</h3>
                <h4 className='release-date'>{show.overview}</h4>
            </div>
        </div>
          {show.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
              alt="{show.name}"
            />
          ) : (
            <div className="filler-poster"></div>
          )}
        </div>
      </div>
    );
}
