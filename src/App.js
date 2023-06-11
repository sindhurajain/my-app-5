import React from 'react';
import "./App.css";
import Header from './components/header/Header'
import Home from './components/home/Home'
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import WorkExp from './components/workexp/WorkExp';
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />}>  </Route>

      <Route path="/work-experience" element={<WorkExp />}>  </Route>
      <Route path="/projects" element={<Projects />}>  </Route>

    </Routes>
</>
  )
}

export default App;
