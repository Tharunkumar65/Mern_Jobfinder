import React from 'react'

const Jobs = ({result}) => {
  return (
    <div>
    <h3 className='text-lg font-bold mb-4'>{result.length} Jobs</h3> 
      {result}
    </div>
  )
}

export default Jobs
