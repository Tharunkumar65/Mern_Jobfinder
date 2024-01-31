import React from 'react'
import { FiMapPin } from 'react-icons/fi';
import {Link} from "react-router-dom"
import { CiClock2 } from "react-icons/ci";
import { BiDollar } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";


const Card = ({data}) => {
    const{id,companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,jobLocation,postingDate,experienceLevel,employmentType,description}=data;
  return (
    <section className='card'>
       <Link to ={`/job/${id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt =""></img>
        <div>
            <h4 className='text-primary mb-1'>{companyName}</h4>
            <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
            <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2' >
                <span className='flex items-center gap-1'><FiMapPin/>{jobLocation}</span>
                <span className='flex items-center gap-1'><CiClock2 />{employmentType}</span>
                <span className='flex items-center gap-1'><BiDollar />{minPrice}-{maxPrice}k</span>
                <span className='flex items-center gap-1'><CiCalendar />{postingDate}</span>
            </div>
            <p className='text-primary/70 text-base'>{description}</p>
        </div>
       </Link>
    </section>
  )
}

export default Card
