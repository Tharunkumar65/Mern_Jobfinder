import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {toast} from 'react-toastify'
import { register,reset } from '../slices/authSlice';
import Spinner from './Spinner';
const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
      })

  const { name, email, password, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const {user ,isLoading,isError,isSuccess,message}= useSelector((state)=>state.auth)
    
    useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
    
        if (password !== password2) {
          toast.error('Passwords do not match')
        } else {
          const userData = {
            name,
            email,
            password,
          }
    
          dispatch(register(userData))
        }
      }
    
      if (isLoading) {
        return <Spinner />
      }
    


  return (
    
    <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                       <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            value={name}
                            placeholder='Enter your name'
                            onChange={onChange}
                            />
    
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Enter your email'
                            onChange={onChange}

                            />
    
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name='password'
                            value={password}
                            placeholder='Enter password'
                            onChange={onChange}
              
                           
                            />
    
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            id='password2'
                            name='password2'
                            value={password2}
                            placeholder='Confirm password'
                            onChange={onChange}

                            />
    
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>
   
                        </form>
    
                    </div>
    
                    <div className="text-grey-dark mt-6">
                        Already have an account? 
                        <Link className="no-underline border-b border-blue text-blue" to="/login">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
  )
}

export default Signup

