import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const {user} = useSelector((state)=>state.auth)
     
     useEffect(()=>{
        if(!user){
            navigate('/login')
         }
     },[user,navigate])
  return (
    <div>
       profile
    </div>
  )
}

export default Profile
