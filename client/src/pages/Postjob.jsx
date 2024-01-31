import React from 'react'
import { useForm } from "react-hook-form";
import { useState,useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { createJob } from '../slices/jobSlice';




 const Postjob = () => {
  const [selectedOption, setSelectedOption] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      const navigate = useNavigate();
    const {user} = useSelector((state)=>state.auth)
     
     useEffect(()=>{
        if(!user){
            navigate('/login')
         }
        
     },[user,navigate])
    
      const dispatch= useDispatch()
          
      const onSubmit = (data) => {
         data.skills=selectedOption;
         dispatch(createJob(data))
         reset()
        
      }
      
      const options =[
        {value:"Javascript",label:"javascript"},
        {value:"React",label:"React"},
        {value:"C++",label:"C++"},
        {value:"C",label:"C"},
        {Value:"HTML",label:"HTML"},
        {value:"CSS",label:"CSS"},
        {value:"NodeJs",label:"NodeJs"},
        {value:"MongoDB",label:"MongoDB"},
        {value:"SQL",label:"SQL"},
        
      ]
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
     {/* form */}
       <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
       <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          
          {/* first row */}
          <div className='create-job-flex '>
              <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Title</label>
                <input type="text" placeholder='web Developer' 
                {...register("jobTitle")} className='create-job-input'/>

              </div>
              <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Name</label>
                <input type="text" placeholder='Ex: Google' 
                {...register("CompanyName")} className='create-job-input'/>
              </div>
          </div>
          {/* second row */}
          <div className='create-job-flex '>
              <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Minimum Salary</label>
                <input type="text"  placeholder='$20k' 
                {...register("minprice")} className='create-job-input'/>

              </div>
              <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Maximum Salary</label>
                <input type="text" placeholder='$120k' 
                {...register("maxprice")} className='create-job-input'/>
              </div>
          </div>

          {/* 3rd row */}
          <div className='create-job-flex '>
              <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Salary Type</label>
                <select {...register("salaryType")} className='create-job-input'>
        <option value="">Choose your salary</option>
        <option value="Houly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>

              </div>
              <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Location</label>
                <input type="text" placeholder='Ex: london' 
                {...register("JobLocation")} className='create-job-input'/>
              </div>
          </div>

          {/* 4th row  */}
          <div className='create-job-flex '>
              <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Posting Date</label>
                <input type="date"  
                {...register("PostingDate")} className='create-job-input'/>

              </div>
              <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Experience Level</label>
                <select {...register("experienceLevel")} className='create-job-input'>
        <option value="">Choose your experience</option>
        <option value="No experience">No experience</option>
        <option value="Internship">Internship</option>
        <option value="Work remotely">Work remotely</option>
      </select>
              </div>
          </div>

          {/* 5th row */}
          <div>
          <label className='block mb-2 text-lg'>Required Skills set:</label>
           <CreatableSelect
             defaultValue={selectedOption}
             onChange={setSelectedOption}
             options={options}
             isMulti
             className='create-job-input py-4'
           />
          </div>

          {/* 6th row */}
          <div className='create-job-flex '>
              <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Logo</label>
                <input type="url" placeholder='paste your company logo url'
                {...register("companyLogo")} className='create-job-input'/>

              </div>
              <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Employment Type</label>
                <select {...register("employmentType")} className='create-job-input'>
        <option value="">Choose your job type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Temporary">Temporary</option>
      </select>
              </div>
          </div>

          {/* 7th row */}
      
              <div className='w-full'>
                <label className='block mb-2 text-lg'>Job Description</label>
                <textarea type="text"  
                {...register("description")} 
                defaultValue={"Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt."}
                className='create-job-input  w-full pl-3 py-1.5 
                focus:outline-none' rows={6} placeholder='Job' />

              </div>

            {/* 8th row */}
            <div className='w-full'>
                <label className='block mb-2 text-lg'>Job Posted by</label>
                <input type="email" placeholder='your email' 
                {...register("postedBy")} className='create-job-input'/>
              </div>


      <input type="submit" className='my-5 block mt-12 bg-blue-600 text-white px-8 py-2 font-semibold rounded-sm  cursor-pointer'/>
    </form>
       </div>
    </div>
  )
}

export default Postjob