import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./Components/HomePage/WelcomePage";
import PageOne from "./Components/PageOne/PageOne";
import PageTwo from "./Components/PageTwo/PageTwo";
import PageThree from "./Components/PageThree/PageThree";
import PageFour from "./Components/PageFour/PageFour";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Link to="/">Home </Link>
          <Link to="/gamePage1"> Page1 </Link>
          <Link to="/gamePage2"> Page2 </Link>
          <Link to="/gamePage3"> Page3 </Link>
          <Link to="/gamePage4"> Page4 </Link>
        </div>

        <Routes>
          <Route path="/gamePage1" element={<PageOne />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/gamePage2" element={<PageTwo />} />
          <Route path="/gamePage3" element={<PageThree />} />
          <Route path="/gamePage4" element={<PageFour />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
