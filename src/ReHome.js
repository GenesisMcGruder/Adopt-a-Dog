import React, {useContext} from "react";
import "./Page.css"
import RehomeForm from "./RehomeForm";
import AppContext from "./AppContext";

function Rehome(){
    const context = useContext(AppContext)
    console.log(context)

    return (
        <>
        <div className="header"> 
            <h1>Rehome</h1>
        </div>
        
        <main className="message">
            Need to rehome a furry friend?
        </main>
        <br></br>
        <RehomeForm addNewDog={context.addNewDog}/>
        </>
    )
}

export default Rehome;