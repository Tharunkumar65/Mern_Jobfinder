import React from 'react'
import Location from './Location'
import Salary from './Salary';
import JobPostingDate from './JobPostingDate';
import WorkExperience from './WorkExperience';
import EmploymentType from './EmploymentType';
const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-4'>Filters</h3>
         <Location handleChange={handleChange}/>
         <Salary handleClick={handleClick} handleChange={handleChange}/>
         {/* <JobPostingDate handleChange={handleChange}/> */}
         <WorkExperience handleChange={handleChange}/>
         <EmploymentType handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar
