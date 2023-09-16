import React, { useState } from 'react'

function InterestCard(props) {

    const[clicked, setClicked] = useState(false);

    const handleClick = () =>{

        setClicked(!clicked)
    };

  return (
    <div className={`interest-card ${clicked ? 'active' : ''}`} onClick={handleClick}>
        {clicked ? <span>&#10003; {props.name}</span> : <p>{props.name}</p>}
    </div>
  )
}

export default InterestCard