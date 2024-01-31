import React from 'react'
import InputField from '../components/InputField'

const JobPostingDate = ({handleChange}) => {
    const now = new Date();
    const twentyFourHoursAgo= new Date(now-24*60*60*1000);
    const sevenDaysAgo= new Date(now-7*24*60*60*1000);
    const ThirtyDaysAgo= new Date(now-30*24*60*60*1000);

    // convert Date to string
    const twentyFourHoursAgoDate= twentyFourHoursAgo.toISOString().slice(0,10);
    const sevenDaysAgoDate= sevenDaysAgo.toISOString().slice(0,10);
    const ThirtyDaysAgoDate= ThirtyDaysAgo.toISOString().slice(0,10);
    // console.log(twentyFourHoursAgoDate)   
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of posting</h4>
     <div>
      <label className="sidebar-label-container">
        <input type="radio" name="test" id="test" value="" onChange={handleChange} className='w-4 h-4'/>
        <span className="checkmark  ml-2">All Time</span>
      </label>
     </div>
        <InputField handleChange={handleChange} name="test" value={twentyFourHoursAgoDate} title="Last 24 Hours"/>
        <InputField handleChange={handleChange} name="test" value={sevenDaysAgoDate} title="Last 7 days"/>
        <InputField handleChange={handleChange} name="test" value={ThirtyDaysAgoDate} title="Last Month"/>        
    </div>
  )
}

export default JobPostingDate
