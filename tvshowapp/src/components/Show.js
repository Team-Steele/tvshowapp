import React, { useState, useEffect } from 'react';


const Show = (setUserID ) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/shows')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((dataInfo) => setList(dataInfo));
  }, []);
  console.log(list);

  const handleEditClick = (id) => {
    setUserID(id) 

  }

  return (
    <div>
      <h1>Show Route</h1>
      {list.map((item) => {
        console.log(item)
        return (
          <div key={item.id}>
            <h4>{item.user}</h4>

            <h5>{item.tvShows}</h5>
            <h5>{item._id}</h5>
            {item.opinion
              ? item.opinion.map((comment) => <h1>{comment.comment}</h1>)
              : null}
            <a href="/" onClick={() => handleEditClick(item._id)} class="btn btn-outline-secondary">
              Edit
            </a>

          </div>
        );
      })}
    </div>
  );
};

export default Show;
