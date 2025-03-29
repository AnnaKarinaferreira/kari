import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import InfiniteScroll from 'react-infinite-scroll-component';

import Home from './Components/Home/Home.jsx';
import Projects from './Components/Projects/Projects.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/Projects'  element={<Projects/>} />
      </Routes>
    </Router>
  )
}

export default App
