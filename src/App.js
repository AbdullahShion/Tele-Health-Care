import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Appointment from './Pages/Appointment';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route exact path="/doctor">
            <Login/>
          </Route>
          <Route  path="/doctor/dashboard">
            <Dashboard/>
          </Route>
          <Route path="*">
              <NotFound/>
          </Route>
        </Switch>
        
    </Router>
  );
}

export default App;
