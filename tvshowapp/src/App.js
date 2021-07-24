import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => setUsers(data.usersList));
  }, []);

  return (
    <div className="App">
      <Users user={users} />
      <h1>React Here</h1>
    </div>
  );
}

export default App;
