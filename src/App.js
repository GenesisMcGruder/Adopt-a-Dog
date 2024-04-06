import React, { useState } from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppContext from "./AppContext";

const App = () => {
  const [dogs,setDogs] = useState([])

  useEffect(()=>{
      fetch("http://localhost:3000/dogs")
      .then((res)=> res.json())
      .then((data)=> setDogs(data))
  },[])

  return(
    <Router>
      <NavBar/>
      <AppContext.Provider value={{dogs, setDogs}}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Adopt" element={<Adopt dogs={dogs}/>} />
          <Route path="/ReHome" element={<Rehome setDogs={setDogs}/>} />
        </Routes>
      </AppContext.Provider>
    </Router>
  )
}
export default App;
