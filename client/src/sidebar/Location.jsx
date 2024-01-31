import React from 'react'
import InputField from '../components/InputField'

const Location = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>
     <div>
      <label className="sidebar-label-container">
        <input type="radio" name="test" id="test" value="" onChange={handleChange} className='w-4 h-4'/>
        <span className="checkmark  ml-2">All</span>
      </label>
     </div>
        <InputField handleChange={handleChange} name="test" value="london" title="london"/>
        <InputField handleChange={handleChange} name="test" value="India" title="India"/>
        <InputField handleChange={handleChange} name="test" value="San Francisco" title="San Francisco"/>
        <InputField handleChange={handleChange} name="test" value="Europe" title="Europe"/>
        
    </div>
  )
}

export default Location
