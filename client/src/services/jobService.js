import axios from 'axios'

const API_URL = 'https://mern-jobfinder.vercel.app/api/jobs/'


// create a job

const createJob = async(jobData,token)=>{
      
    const config ={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL,jobData,config)

    return response.data;
}

// get user jobs
const getJobs= async(token)=>{
      
    const config ={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL,config)

    return response.data;
}

// update a job
const updateJob = async(jobData,id,token)=>{
      
    const config ={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    
    const response = await axios.patch(API_URL + id,jobData,config)
    
    return response.data.data;
}



// delete a user job
const DeleteJob = async(jobId,token)=>{
      
    const config ={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + jobId,config)
    return response.data;
}

const jobService ={
    createJob,
    getJobs,
    DeleteJob,
    updateJob

}


export default jobService