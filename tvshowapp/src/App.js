import './App.css';
import './lib/font-awesome/css/all.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';

import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';
import Show from './components/Show';
import Home from './components/Home'
<<<<<<< HEAD
import HomePage from './components/HomePage';
=======
import ShowList from './components/ShowList';
>>>>>>> e17a822 (saved changes before keba rebase)



function App() {

  const [userID, setUserID] = useState([])



  return (
    <div
      style={{
        backgroundImage: `url("https://png.pngtree.com/png-vector/20190612/ourlarge/pngtree-tvtelevisionplayvideo-abstract-circle-background-flat-colo-png-image_1345048.jpg")`,
      }}
      className="container"
    >
      <Router>
        <div className="inner-content">
          <div className="brand">
            <Link className="btn" to="/">
              <h3>Home</h3>
            </Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link className="btn" to="/search">
                Search TV Shows
              </Link>
            </li>
            <li>
              <Link className="btn" to="/shows">
                User Profiles
              </Link>
            </li>
            <li>
              <Link className="btn" to="/users">
                Add User Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* <Users user={users} /> */}

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={Home} userID={userID} />
          <Route path="/users" component={Users} />
          <Route
            path="/shows"
            component={Show}
            setUserID={setUserID}
            id={userID}
          />
        </Switch>
      </Router>
    </div>
   
  );
}

export default App;
