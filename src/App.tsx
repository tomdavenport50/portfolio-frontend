import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BlogList from "./components/BlogList";
import Header from "./components/Header";
import Project1 from "./project1/project1";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
         <Header/>
      </div>
      
      <div className="main-content">
        <Switch>
            <Route exact path="/" component={BlogList}/>
            <Route path="/project1" component={Project1}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
