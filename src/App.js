import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const App = () => {
  return(
    <>
    <header>
      <NavBar />
    </header>
    <Outlet />
    </>
  )
}
export default App;
