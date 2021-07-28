import './App.css';
import { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';
import Show from './components/Show';
import Home from './components/Home'

function App() {
  // const [users, setUsers] = useState([]);
  // console.log(users);

  // useEffect(() => {
  //   fetch('/users/')
  //     .then((res) => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then((data) => setUsers(data.usersList));
  // }, []);

  return (
    <div className="App">
      <h1>TV Show App</h1>
      {/* <Users user={users} /> */}
      <nav>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/users">
          <h3>Users</h3>
        </Link>
        <Link to="/shows">
          <h3>Shows</h3>
        </Link>
      </nav>

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/shows" component={Show} />
      </main>
    </div>
  );
}

export default App;
