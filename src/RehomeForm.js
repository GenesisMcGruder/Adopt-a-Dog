import React, { useState } from "react";
import "./Page.css"

function RehomeForm(){
    const [newDog,setNewDog] = useState({
        name:"",
        breed:"",
        age:"",
        image:"",
        housetrained: false
    })

    function handleChange(e){
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setNewDog({
            ...newDog, [e.target.name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            name: newDog.name,
            breed: newDog.breed,
            age: newDog.age,
            image: newDog.image,
            housetrained: newDog.housetrained
        }
        fetch('http://localhost:3000/dogs', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((res)=> res.json())
        .then((data) => console.log(data))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input name="name" 
            type="text"
            value={newDog.name}
            onChange={handleChange}/><br/>
            <label>Breed:</label>
            <input name="breed"
            type="text"
            onChange={handleChange}/><br/>
            <label>Age:</label>
            <input name="age"
            type="text"
            onChange={handleChange}/><br/>
            <label>Image:</label>
            <input name="image"
            type="text"
            onChange={handleChange}/><br/>
            <label>Housetrained:</label>
            <input name="housetrained"
             type="checkbox"
             onChange={handleChange}
            /><br/>
            <input type="submit"/><br/>
        </form>
    )
}

export default RehomeForm;