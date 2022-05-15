import React from 'react'

function Die(props) {

  const styles = {

    backgroundColor: props.isHeld ? "#59E391": "white"
}


  return (
    <div 
    className="dice-square"  
    style={styles}
    onClick={props.holdDice}
    >
        <h1 classNumber="die-number">{props.value}</h1>
    </div>
  )
}

export default Die