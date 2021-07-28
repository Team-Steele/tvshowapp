const TvShowList = ({shows}) => {
    console.log(shows);
    if (!shows) {
        return <h2>No Shows Found!</h2>
      }
        return (
            <div className="shows">
                    {/* {shows.map(show => (
                        <div  className="show">
                            {show.name} 
                       </div>
                    ))} */}
                    {shows.url}
        </div>
      )
    }

export default TvShowList