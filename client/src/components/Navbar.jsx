import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom"
import { SlMenu } from "react-icons/sl";
import { FaXmark } from "react-icons/fa6";
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { logout,reset } from '../slices/authSlice';


const Navbar = () => {
  const [ismenuopen, setIsmenuopen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.auth)

  const handlemenuToggle = () => {
    setIsmenuopen(!ismenuopen);
  }
const onlogout =()=>{
   dispatch(logout())
   dispatch(reset())   
   navigate('/')
}
 
  
  const navItems = [
    { path: "/", title: "Search Jobs" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a Job" },
  ]
  return (
    <div>
      <header className="max-w-screen-2xl container mx-auto xl:">
        <nav className="mt-4 flex justify-between items-center py-6">
          <a href='/' className="flex items-center gap-1 text-2xl"><img src="/images/job-finder-logo.jpg" alt="" width="35" height="30" className="lg:ml-20 ml-6"></img>
            <span className='text-[#0BA8E6]'>Job</span>
            <span className='text-black-900'>Finder</span>
          </a>
          {/* navitems  */}
          <ul className="hidden md:flex gap-12">
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-primary">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

             {
             
              user ? (

              <div className='flex items-center gap-4 '>  
                <h2 className='text-base text-primary font-semibold hidden lg:block'>{user.user?.name}</h2>
               <button className="py-2 px-4 border rounded mr-2" onClick={onlogout}>logout</button>
              </div>
             ):(<div className="text-base text-primary font-medium space-x-5 hidden lg:block" >
            <Link to="/login" className="py-2 px-5 border rounded ">Log in</Link>
            <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue-600 text-white">sign up</Link>
            </div>)
          
           }          
           
          
            


         
          
          {/* Mobile view */}
          <div className='md:hidden block'>
            <button onClick={handlemenuToggle}>
              {
              ismenuopen ? <FaXmark className='w-7 h-10 text-primary mr-3' /> : <SlMenu className='w-7 h-10 text-primary mr-3' />
              }
            </button>
          </div>
        </nav>
        {/* navitems for mobile */}
        <div className={`px-7  bg-gray-900 py-5 rounded-sm ${ismenuopen ? "" : "hidden"}`}>
          <ul >
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-white first:text-white py-1">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
            <li className={`text-white py-1 ${user? "hidden":""}`}> <Link to="/login">Log in</Link></li>
          </ul>

        </div>
      </header>
    </div>
  )
}
export default Navbar
