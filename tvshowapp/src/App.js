import './App.css';
import './lib/font-awesome/css/all.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';
import Users from './components/Users';
import Show from './components/Show';
import Home from './components/Home'



function App() {

  return (
    <div className="container">
    
          <Router>
            <div className="inner-content">
              <div className="brand">
                <Link to="/">
                  <h3>Home</h3>
                </Link>
              </div>

              <ul className="nav-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shows">Shows</Link>
                </li>
                <li>
                  <Link to="/users">Add</Link>
                </li>
              </ul>
            </div>
             
            {/* <Users user={users} /> */}

          
            
              <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/users" component={Users} />
              <Route path="/shows" component={Show} />
          </Switch>
        </Router>
            
    
    </div>
   
  );
}

export default App;
