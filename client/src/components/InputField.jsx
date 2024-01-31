import React from 'react'

const InputField = ({ handleChange, name, value, title }) => {
    return (
        <label className='sidebar-label-container'>
            <input type="radio" name={name} value={value} onChange={handleChange} className='w-4 h-4' />
            <span className='checkmark mx-1'></span>{title}
        </label>
    )
}

export default InputField
