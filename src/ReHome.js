import React from "react";
import NavBar from "./NavBar";
import "./Page.css"

function Rehome(){
    return (
        <>
        <div className="header">
            <header>
            <NavBar/>
            </header>  
            <h1>Rehome</h1>
        </div>
        
        <main className="message">
            Need to rehome a furry friend?
        </main>
        </>
    )
}

export default Rehome;