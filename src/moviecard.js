import PropTypes from "prop-types"
import React from "react";

function MovieCard (props){
return (
 <>
 <div style={{border:"solid 2px", maxWidth:"400px"}}>
    <img src={props.posterURL} alt="poster" width={"400px"}/>
    <div>
        <h2>{props.title}</h2>
        <h6>{props.description}</h6>
        <h5>{props.rate}</h5>
    </div>
 </div>

 </>
)
}


MovieCard.prototype={
    poster: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,

}


export default MovieCard