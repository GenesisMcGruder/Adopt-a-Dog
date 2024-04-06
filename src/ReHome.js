import React from "react";
import "./Page.css"
import RehomeForm from "./RehomeForm";

function Rehome(){
    return (
        <>
        <div className="header"> 
            <h1>Rehome</h1>
        </div>
        
        <main className="message">
            Need to rehome a furry friend?
        </main>
        <br></br>
        <RehomeForm />
        </>
    )
}

export default Rehome;