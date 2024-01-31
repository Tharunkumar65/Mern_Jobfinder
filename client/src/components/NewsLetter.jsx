import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa";
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NewsLetter = () => {
  const navigate = useNavigate()
  const {user} = useSelector(state=>state.auth)
  const handleOnApply =async()=>{
    if(!user){
      navigate('/login')
    }
    else{
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "Resume(Google Drive link)",
      inputPlaceholder: "https://drive.google.com/..."
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
    }
  }
 
  return (
    <>
    <div>
      <h3 className='text-lg font-semibold flex items-center gap-2'><FaEnvelopeOpenText />
        Email me for jobs</h3>
      <p className='text-primary/75 mb-4 text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <input type="email" placeholder='name@gmail.com' className='text-primary py-2 pl-3 border focus:outline-none w-full mb-4 block' />
      <input type="submit" value="Subscribe"  className='text-white bg-blue-600 py-2 pl-2 border focus:outline-none w-full block cursor-pointer rounded-sm font-semibold' />

    </div>
    <div className='mt-20'>
      <h3 className='text-lg font-semibold flex items-center gap-2'><FaRocket />
        Get noticed faster</h3>
      <p className='text-primary/75 mb-4 text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <input type="submit" value = "Upload your resume " onClick={handleOnApply} className='text-white bg-blue-600 py-2 pl-2 border focus:outline-none w-full block cursor-pointer rounded-sm font-semibold' />

    </div>
    </>
  )
}

export default NewsLetter
