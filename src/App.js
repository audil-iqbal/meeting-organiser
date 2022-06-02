
import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/HomePage/Home';
import ScheduleMeeting from './pages/ScheduleMeeting/ScheduleMeeting';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" render={()=> <Home />} />
        <Route exact path="/schedule" render={()=> <ScheduleMeeting />} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
