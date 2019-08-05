import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import ListingsContainer from './containers/ListingsContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/listings" component={ListingsContainer} />
      </div>
    </Router>
  );
}

export default App;
