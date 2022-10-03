import React from "react";
import { list } from "./Cardlist";


const Filter =()=> {  
    return (
      <div key={list.id} >
        {[...list]
          .sort((a, b) =>( a.title > b.title ? 1 : -1) && (b.rate - a.rate))
          .map(mv => {
            return (
        <>
<div>
<div  style={{maxWidth:"400px"}}>
  <h1></h1>
                <img src={mv.posterURL} alt="poster" style={{maxWidth:"400px"}}/>
                <h2>{mv.title.toUpperCase()}</h2>
                <h5>{mv.description}</h5>
                <h5 style={{fontWeight:"bold"}}> rate: {mv.rate}</h5>
  
                <hr />
              </div>
</div>

        </>
            );
          })}
      </div>
    );
  }
  

  export default Filter

