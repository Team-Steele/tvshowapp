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
<<<<<<< HEAD
      <h1>React Here</h1>
      <Users user={users} />
=======
      <header className="App-header">
       
      </header>
>>>>>>> 32074a4 (first)
    </div>
  );
}

export default App;
