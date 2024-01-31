import React from 'react'
import InputField from '../components/InputField'
const EmploymentType = ({handleChange}) => {
  return (
    <div>
      <div>
      <h4 className='text-lg font-medium mb-2'>Type of Employment</h4>
    
        <InputField handleChange={handleChange} name="test" value="" title="Any"/>
        <InputField handleChange={handleChange} name="test" value="Full-Time" title="Full-Time"/>
        <InputField handleChange={handleChange} name="test" value="Temporary" title="Temporary"/>
        <InputField handleChange={handleChange} name="test" value="Part-Time" title="Part-Time"/>
        
    </div>
    </div>
  )
}

export default EmploymentType
