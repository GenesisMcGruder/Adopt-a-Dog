import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Rehome from "./ReHome";
import Adopt from "./Adopt";

const App = () => {
  return(
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Adopt" element={<Adopt/>} />
        <Route path="/ReHome" element={<Rehome/>} />
      </Routes>
    </Router>
  )
}
export default App;
