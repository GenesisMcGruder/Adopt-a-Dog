import React, { useState } from "react";
import "./Page.css"

function RehomeForm(){
    const [newDog,setNewDog] = useState({
        name:"",
        breed:"",
        age:"",
        image:"",
        housetrained: true
    })

    function handleSubmit(e){
        e.preventDefault()
        const formData ={
            name,
            breed,
            age,
            image,
            housetrained
        }
        console.log(formData)
    }

    return(
        <form>
            <label>Name:</label>
            <input type="text"
            id="name"
            value={formData.name}
            onChange={(e)=> setNewDog({...newDog, name:e.target.value})}/>
            <label>Breed:</label>
            <input type="text"
            id="breed"
            value={formData.breed}
            onChange={(e)=>setNewDog({...newDog, breed:e.target.value})}/>
        </form>
    )
}

export default RehomeForm;