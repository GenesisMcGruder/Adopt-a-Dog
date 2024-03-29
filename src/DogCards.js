import React from "react";

function DogCards({dog}){
    const {name, breed, image, age, housetrained} = dog

    function handleClick(){
        return alert("Thanks for your interest!")
    }
    return (
        <div className="dogcard">
        <img className="dog-img"src={image} alt="dog img"/>
        <h3>{name}</h3>
        <h5>Breed: {breed}</h5>
        <h5>Age: {age}</h5>
        {housetrained? <h5>Housetrained: Yes</h5>: <h5>Housetrained:No</h5>}
        <button className="adopt-me" onClick={handleClick}>Adopt Me</button>
        </div>
    )
}

export default DogCards;