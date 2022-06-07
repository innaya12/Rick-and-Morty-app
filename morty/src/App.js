import React from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/home/home';
import SingleCard from './components/cards/singleCard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/character" element={<SingleCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
