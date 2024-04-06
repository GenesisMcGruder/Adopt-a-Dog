import React, { useState, useEffect } from "react";

const MyContext = React.createContext()

const MyProvider = (props) =>{
    const [dogs, setDogs] = useState([])
    
    useEffect(()=>{
        fetch("http://localhost:3000/dogs")
        .then((res)=> res.json())
        .then((data)=> setDogs(data))
    },[])

    return (<MyContext.Provider value={{
        dogs:dogs
    }}>
        {props.children}
    </MyContext.Provider>)
}

const MyConsumer = MyContext.Consumer


export {MyProvider, MyConsumer};