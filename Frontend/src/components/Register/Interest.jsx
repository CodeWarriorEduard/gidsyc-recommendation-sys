import React from 'react'
import InterestCard from '../InterestCard/InterestCard'
import Interests from '../../data/Interests.json'

function Interest() {
  return (
    <>

    <div className='interest-container'>
      {
        Interests.intereses.map((getInterest,index)=>(
          <InterestCard name={getInterest.nombre}/>
        ))
      }
    </div>

    </>
  )
}

export default Interest