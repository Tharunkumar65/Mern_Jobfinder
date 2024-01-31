import React from 'react'
import InputField from '../components/InputField'


const Salary = ({handleClick,handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>
       <div className='flex mt-4 space-x-2'>
        <button type = "submit" className='px-2 py-1 border w-1/3'  onClick={handleClick} value="Hourly" title="Hourly">Hourly</button>
        <button type = "submit" className='px-2 py-1 border w-1/3' onClick={handleClick} value="Monthly" title="Monthly">Monthly</button>
        <button className='px-2 py-1 border w-1/3' onClick={handleClick}  value="Yearly" title="Yearly">Yearly</button>
        </div>
      <div className='mt-4 '> 
      <label className="sidebar-label-container">
        <input type="radio" name="test" id="test" value="" onChange={handleChange} className='w-4 h-4'/>
        <span className="checkmark  ml-2">All</span>
      </label>
        <InputField handleChange={handleChange} name="test" value={30} title="< 30000k"/>
        <InputField handleChange={handleChange} name="test" value={50} title="< 50000k"/>
        <InputField handleChange={handleChange} name="test" value={80} title="< 80000k"/>
        <InputField handleChange={handleChange} name="test" value={100} title="< 100000k"/>
     </div> 
     </div>
  )
}

export default Salary
