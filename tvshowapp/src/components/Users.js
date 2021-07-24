
import React from 'react'

const Users = ({user}) => {
    return (
      <div>
       {user ? user.map( name => <li>{name}</li>) : null}
      </div>
    );
}

export default Users


// function Users(){
//     const [users, setUsers] = useState([])

//     useEffect(() => {
//         fetch("/users/").then(res => {
//             if(res.ok) {
//                 return res.json()
//             }
//         }).then(jsonRes => setUsers(jsonRes.usersList))
//     })

//     return (
//         <div>
//             {users.map(user => <li>{user}</li>)}
//         </div>
//     )
// }

// export default Users
