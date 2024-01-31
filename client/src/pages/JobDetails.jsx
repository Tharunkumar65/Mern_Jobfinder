import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HiBriefcase } from "react-icons/hi2";
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const JobDetails = () => {
    const {id} = useParams()
    const[job,setJob] = useState([])
    const navigate = useNavigate()
    const {user} = useSelector(state=>state.auth)


    useEffect(() => {
      // Fetch jobs from the JSON file
      fetch('/jobs.json')
        .then(response => response.json())
        .then(data => {
          const selectedJob = data.find(job => job.id === parseInt(id));
          setJob(selectedJob);  
        })
        .catch(error => console.error('Error fetching jobs:', error));
    }, [id]);

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
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-4'>
         <h1 className='text-2xl text-blue-500 mt-5'>Job Details</h1>
         <p className='text-gray-400 italic'>Here&apos;s how the job details align with your job preferences.Manage job preferences anytime in your profile</p>
         <h2 className='text-lg text-primary mt-3 font-semibold'>Job Id : {id}</h2>
         <h2 className='text-lg text-primary mt-3'>{job.jobTitle}</h2>
         <span className='flex items-center mt-3 gap-2'><HiBriefcase size="25px" /> 
            <h2 className='text-xl'>Job type</h2>
         </span>
         <div className='flex items-center gap-4 mt-5'>
            <button className='bg-blue-500 px-8 py-2 text-white'>{job.employmentType}</button>
            <button className='bg-purple-700 px-8 py-2 text-white' onClick={handleOnApply}>Apply now</button>
         </div>
         <div className=' flex  lg:flex-row  flex-col gap-24 mt-8'>
          <div className='w-3/4'>
           <h2 className='text-base text-primary font-semibold'>Benefits</h2>
            <h3 className='mt-2'>1. Salary : ${job.minPrice}-{job.maxPrice}k</h3>
            <h3 className='mt-2'>2. Health Insurance</h3>
            <h3 className='mt-2'>3. Flexible Work Arrangements</h3>
            <h3 className='mt-2'>4. Paid Time Off (PTO) and Vacation Days</h3>
            <h3 className='mt-2'>5. Remote Work Options</h3>
            <h3 className='mt-2'>6. Employee Discounts</h3>
            </div>
            <div>
           <h2 className='text-base text-primary font-semibold'>Outline</h2>
            <p className='p-4 w-4/8'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae adipisci ex incidunt perspiciatis atque enim similique suscipit quaerat at, sit consectetur ab? Quis quaerat vero, labore assumenda fugit repellat reiciendis!
            </p>
         </div>
            <div>
           <h2 className='text-base text-primary font-semibold'>Future Growth</h2>
            <p className='p-4 w-4/8'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae adipisci ex incidunt perspiciatis atque enim similique suscipit quaerat at, sit consectetur ab? Quis quaerat vero, labore assumenda fugit repellat reiciendis!
            </p>
         </div>
         </div>
         
    </div>
  )
}

export default JobDetails
