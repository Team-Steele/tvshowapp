const tvShowList = ({shows}) => {
    if (!shows) {
        return <h2>No Shows Found!</h2>
      }
      
    
      return (
        <div className="shows">
          {shows.map(show => (

            <div key={show} className="show">
              <li> {show.name}  </li>
            </div>

          ))}

        </div>
      )
    }

export default tvShowList