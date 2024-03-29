import React from "react";
import NavBar from "./NavBar";
import "./Page.css"


function Adopt(){
    return (
        <>
        <div className="header">
        <header>
            <NavBar/>
        </header>
        <h1>Adopt</h1>
        </div>
        <br></br>
        <main className="message">
            Dogs ready to be Adopted
        </main>
        </>
        
    )
}

export default Adopt;