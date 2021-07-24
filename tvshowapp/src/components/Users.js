
import React from 'react'

const Users = ({user}) => {
    return (
      <div>
       {user ? user.map( name => <li>{name}</li>) : null}
      </div>
    );
}

export default Users

