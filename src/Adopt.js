import React, {useContext } from "react";
import "./Page.css"
import DogCards from "./DogCards";
import AppContext from "./AppContext";

function Adopt(){

    const context = useContext(AppContext)
    
    const adopteeList= context.dogs.map((dog)=> <DogCards key={dog.id} dog={dog}/>)
    return (
        <>
        <div className="header">
        <h1>Adopt</h1>
        </div>
        <br></br>
        {adopteeList}
        </>
        
    )
}

export default Adopt;