import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from './Components/HomePage/WelcomePage'
import PageOne from './Components/PageOne/PageOne';
import PageTwo from './Components/PageTwo/PageTwo';

const App = () => {


  return (
    <>
      <Router>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/gamePage1">Page1</Link>
          <Link to="/gamePage2">Page2</Link>
        </div>

        <Routes>
          <Route path="/gamePage1" element={<PageOne />} />
          <Route path="/home" element={<WelcomePage />} />
          <Route path="/gamePage2" element={<PageTwo />} />
          <Route path="/gamePage2" element={<PageTwo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App