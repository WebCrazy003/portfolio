import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = 'teal';

  return (
    <Router>
      <Nav color={color} />

      <Routes>
        <Route path="/" element={<Home color={color} />} />
        <Route path="/detail/:project" element={<Detail color={color} />} />
      </Routes>
    </Router>
  );
}

export default App;
