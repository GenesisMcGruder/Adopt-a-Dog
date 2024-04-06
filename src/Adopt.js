import React from "react";
import "./Page.css"
import DogCards from "./DogCards";
import { MyConsumer } from "./MyContext";


function Adopt(){
        return(
            // <MyConsumer>
            //     {context =>
            //         const adopteeList = context.dogs.map((dog)=><DogCards key={dog.id} dog={dog}/>)
            //         return(
            //             <>
            //                 <div className="header">
            //                     <h1>Adopt</h1>
            //                 </div>
            //                 <br></br>
            //                 {adopteeList}
            //                     </>
            //         )
            //     }
            // </MyConsumer>
        )
    const adopteeList= dogs.map((dog)=> <DogCards key={dog.id} dog={dog}/>)
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