import React, { useEffect, useState } from 'react'
import Interest from '../../components/Register/Interest'
import Location from '../../components/Register/Location'
import Pinfo from '../../components/Register/PInfo'

function Signup() {

  const [userData, setUserData] = useState({
    
    personalInfo: {},
    userLocation: {},
    userInterests: {}
  });

  useEffect(() => {
    console.log(userData)
  }, [userData])
  

  const updateUserInfo = (data)=>{
    
    setUserData((prevInfo) => ({
      ...prevInfo,
      ...data,
    }));
  }

  const [index, setIndex] = useState(0);

  const tilteForm = ["Personal Info", "Location", "Interests"];

  const registerStep = ()=>{
    if(index == 0){
      return <Pinfo updateUserInfo={updateUserInfo}/>
    }
    if(index == 1){
      return <Location updateUserInfo={updateUserInfo}/>
    }
    if(index == 2){
      return <Interest updateUserInfo={updateUserInfo}/>
    }
  }


  return (
    <div>
      <div className="progressbar"></div>
      <div className="sigup-container">
        <div className="form-title">
            <h1 style={{textAlign:"center"}}>{tilteForm[index]}</h1>
        </div>
        <div className="form-content">
            {registerStep()}
        </div>
        <div className="btn-signup">
          <button disabled={index == 0}
          onClick={()=>{
            setIndex((current) => current -1)
          }}>Prev</button>
          <button disabled={index == tilteForm.length - 1}
          onClick={()=>{
            setIndex((current)=>current+1)
          }}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Signup