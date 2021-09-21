import { React, useState } from 'react';
import { useEffect } from 'react';

const Users = () => {
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('');
  const [tvShows, setTvShows] = useState('');
  const [users, setUser] = useState(info);
  console.log(users);

  //  useEffect(() => {
  //    fetch('/')
  //      .then((res) => {
  //        console.log(res);
  //        return res.json();
  //      })
  //      .then((data) => setInfo(data.usersList));
  //  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const person = { name };
      setUser((users) => {
        return [...users, person];
      });
      setName('');
      setTvShows('');
      const url = 'http://localhost:3001/users';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({ user: name, tvShows: [tvShows] }),
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    } else {
      console.log('nothing entered');
    }
  };
  return (
    <div>
      <h1 style={{ paddingTop: '300px' }}>Add User</h1>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label className="btn" htmlFor="name">
              Name:{' '}
            </label>
            <input
              className="count-pill"
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="add user name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* <div className="form-control">
             <label htmlFor="tvShows">Enter TV Show(s): </label>
             <textarea
               type="text"
               id="tvShows"
               name="tvShows"
               value={tvShows}
               onChange={(e) => setTvShows(e.target.value)}
             />
           </div> */}
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </article>

      {users.map((person) => {
        // const { name, tvShow } = person;
        return (
          <div>
            <h4>User Name: {person.name}</h4>
            {/* <p>
               List of Shows:
               {person.tvShows}
             </p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Users;
