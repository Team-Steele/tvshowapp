import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Show = ({ setUserID, id, show }) => {
  const [list, setList] = useState([]);
  const [newList, setNewList] = useState([]);

  const deleteItem = (id) => {
    axios.delete('/delete/' + id);
    console.log(`${id}`);
  };

  useEffect(() => {
    fetch('http://localhost:3001/shows')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((dataInfo) => setList(dataInfo));
  }, []);
  console.log(list);

  const handleClick = (id) => {
    console.log('handleClick Function', id);
    setUserID(id);
  };

  return (
    <div>
      <h1>User Profiles</h1>

      {list.map((item) => {
        console.log(item);
        return (
          <div key={item.id}>
            <h4
              className="count-pill"
              style={{
                backgroundColor: 'gray',
                fontSize: '27px',
                marginBottom: '5px',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}
            >
              {item.user}
            </h4>

            {item.tvShows.map((show) => (
              <div>
                <li className="count-pill">{show}</li>
              </div>
            ))}

            {item.opinion
              ? item.opinion.map((comment) => <h1>{comment.comment}</h1>)
              : null}

            <a
              href="/search"
              onClick={() => {
                handleClick(item._id);
              }}
              className="btn btn-outline-secondary"
            >
              Edit
            </a>

            <button
              onClick={() => deleteItem(item._id)}
              className="btn btn-outline-secondary"
            >
              Delete
            </button>
            {/* <button className="btn btn-outline-secondary">Edit</button> */}
          </div>
        );
      })}
    </div>
  );
};

export default Show;
