import React from 'react'
import InputField from '../components/InputField'
const WorkExperience = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Work Experience</h4>
    
        <InputField handleChange={handleChange} name="test" value="Any experience" title="Any experience"/>
        <InputField handleChange={handleChange} name="test" value="Internship" title="Internship"/>
        <InputField handleChange={handleChange} name="test" value="Work remotely" title="Work remotely"/>
        
    </div>
  )
}

export default WorkExperience
