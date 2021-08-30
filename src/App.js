import './App.css';
import React from 'react'
import  { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact';
import { Project1, Project2 } from './components/Projects';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project-1" component={Project1} />
      <Route exact path="/project-2" component={Project2} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
