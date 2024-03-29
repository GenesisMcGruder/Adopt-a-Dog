import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./Page.css"
import DogCards from "./DogCards";

function Adopt(){
    const [dogs,setDogs] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/dogs")
        .then((res)=> res.json())
        .then((data)=> setDogs(data))
    },[])

    const adopteeList= dogs.map((dog)=> <DogCards key={dog.id} dog={dog}/>)
    return (
        <>
        <div className="header">
        <header>
            <NavBar/>
        </header>
        <h1>Adopt</h1>
        </div>
        <br></br>
        {adopteeList}
        </>
        
    )
}

export default Adopt;