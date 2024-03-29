import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Page.css"

function RehomeForm(){
    const navigate = useNavigate()
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
        .then((data) => {
            console.log(data)
            navigate("/Adopt")
        })
        setNewDog({
            name:"",
            breed:"",
            age:"",
            image:"",
            housetrained: false
        })
    }

    return(
        <div className="form-case">
            <form className="form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input className="form-input"
                name="name" 
                type="text"
                value={newDog.name}
                onChange={handleChange}/><br/>
                <label>Breed:</label>
                <input className="form-input"
                name="breed"
                type="text"
                value={newDog.breed}
                onChange={handleChange}/><br/>
                <label>Age:</label>
                <input className="form-input"
                name="age"
                type="text"
                value={newDog.age}
                onChange={handleChange}/><br/>
                <label>Image:</label>
                <input className="form-input"
                name="image"
                type="text"
                value={newDog.image}
                onChange={handleChange}/><br/>
                <label>Housetrained:</label>
                <input
                name="housetrained"
                type="checkbox"
                value={newDog.housetrained}
                onChange={handleChange}
                /><br/>
                <input className="form-input-submit" type="submit"/><br/>
            </form>
        </div>

    )
}

export default RehomeForm;