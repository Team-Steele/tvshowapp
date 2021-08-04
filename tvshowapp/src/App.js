import './App.css';
import './lib/font-awesome/css/all.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';
import Users from './components/Users';
import Show from './components/Show';
import Home from './components/Home'
import HomePage from './components/HomePage';


// const user = user.find(user => user._id == userID)


function App() {


  const [userID, setUserID] = useState([])



  return (
    <div
      // style={{
      //   backgroundImage: `url("https://png.pngtree.com/png-vector/20190612/ourlarge/pngtree-tvtelevisionplayvideo-abstract-circle-background-flat-colo-png-image_1345048.jpg")`,
      // }}
      className="container"
    >
      <Router>
        <div 
        style={{marginBottom: '40px'}}
        className="inner-content">
          <div className="brand">
          <li>
            <Link className="btn" to="/">
              <h3>Home</h3>
            </Link>
            </li>
            
          </div>
         
          <ul className="nav-links">

            
            <li>
              <Link
              className="btn" to="/search">
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
