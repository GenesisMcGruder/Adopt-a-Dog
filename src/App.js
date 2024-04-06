import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Adopt from "./Adopt";
import Rehome from "./ReHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppContext from "./AppContext";

const App = () => {
  const [dogs,setDogs] = useState([])

  useEffect(()=>{
      fetch("http://localhost:3000/dogs")
      .then((res)=> res.json())
      .then((data)=> setDogs(data))
  },[])

  function addNewDog(newDog) {
    setDogs([...dogs, newDog])
  }

  return(
    <Router>
      <NavBar/>
      <AppContext.Provider value={{dogs, setDogs, addNewDog}}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Adopt" element={<Adopt dogs={dogs}/>} />
          <Route path="/ReHome" element={<Rehome addNewDog={addNewDog}/>} />
        </Routes>
      </AppContext.Provider>
    </Router>
  )
}
export default App;
