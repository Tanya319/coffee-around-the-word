import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import  Home from './components/home';
import  Coffee from './components/coffee';



class App extends Component {
  render() {
    return (
     
   <div className="App">

       <Router>
       <Route exact path="/" component={Login} />
        <Route exact path="/home" component={ Home} />
        <Route exact path="/co" component={ Coffee} />

        </Router>
      </div>
   
    );
  }
}

export default App;