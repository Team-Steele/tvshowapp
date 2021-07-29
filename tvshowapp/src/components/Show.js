import React, { useState, useEffect } from 'react';
import data from '../components/user-seeds.json';

const Show = () => {
  const [list, setList] = useState([{ data }]);

  useEffect(() => {
    fetch('/shows')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((dataInfo) => setList(dataInfo));
  }, []);
  console.log(list);

  return (
    <div>
      <h1>Show Route</h1>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.user}</h4>
            <p>{item.tvShows}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Show;
