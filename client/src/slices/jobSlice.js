import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import jobService from '../services/jobService'

const initialState = {
     jobs:[],
     isError :false,
     isLoading:false,
     isSuccess :false,
     message:''
}

// create a job

export const createJob = createAsyncThunk('jobs/create',async(jobData,thunkAPI)=>{
      try {
        const token = thunkAPI.getState().auth.user.token
        return await jobService.createJob(jobData,token)
      } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
      }
})

//  get user jobs
export const getJobs= createAsyncThunk('jobs/getAll',async(_,thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await jobService.getJobs(token)
    }catch(error){
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
})

// update a user job
export const updateJob = createAsyncThunk('jobs/update',async({jobData,id},thunkAPI)=>{
    try {
      const token = thunkAPI.getState().auth.user.token
      console.log(jobData)
      return await jobService.updateJob(jobData,id,token)
    } catch (error) {
      const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
    }
})


// delete a user job
export const DeleteJob = createAsyncThunk('jobs/delete',async(id,thunkAPI)=>{
    try {
      const token = thunkAPI.getState().auth.user.token
      return await jobService.DeleteJob(id,token)
    } catch (error) {
      const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
    }
})

export const jobSlice =createSlice({
       name:'jobs',
       initialState,
       reducers:{
           reset:(state)=>{
              initialState
           }
       },
       extraReducers:(builder)=>{

        builder
            .addCase(createJob.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(createJob.fulfilled,(state,action)=>{
                 state.isLoading = false
                 state.isSuccess = true
                 state.jobs.push(action.payload)
                 
            })
            .addCase(createJob.rejected,(state,action)=>{
                 state.isLoading = false
                 state.isError = true
                 state.message =action.payload

            })
            .addCase(getJobs.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(getJobs.fulfilled,(state,action)=>{
                 state.isLoading = false
                 state.isSuccess = true
                 state.jobs = action.payload
                 
            })
            .addCase(getJobs.rejected,(state,action)=>{
                 state.isLoading = false
                 state.isError = true
                 state.message =action.payload

            })
            .addCase(updateJob.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(updateJob.fulfilled,(state,action)=>{
                 state.isLoading = false
                 state.isSuccess = true
                 const updatedJob = action.payload;
                 const existingJobIndex = state.jobs.findIndex(job => job._id === updatedJob._id);
                
          if (existingJobIndex !== -1) {
    // Update the existing job with the new data
    state.jobs[existingJobIndex] = updatedJob;
      } else {
    // Handle the case where the job is not found
    console.error('Job not found for update.');
    // You might dispatch an action or handle it differently based on your requirements
  }
             
            })
            .addCase(updateJob.rejected,(state,action)=>{
                 state.isLoading = false
                 state.isError = true
                 state.message =action.payload

            })
            .addCase(DeleteJob.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(DeleteJob.fulfilled,(state,action)=>{
                 state.isLoading = false
                 state.isSuccess = true
                 state.jobs = state.jobs.filter((job)=>job._id !== action.payload.id)
                 
            })
            .addCase(DeleteJob.rejected,(state,action)=>{
                 state.isLoading = false
                 state.isError = true
                 state.message =action.payload

            })
       }  
})


export const {reset} = jobSlice.actions

export default jobSlice.reducer