const asyncHandler = require('express-async-handler');
const JobModel = require('../models/Jobs')
const { ObjectId } = require('mongoose').Types;


// @ desc  get jobs
// @route  GET /api/jobs
// @access private
const getJobs = asyncHandler(async(req,res)=>{
    const jobs = await JobModel.find({user: req.user.id})
    res.status(200).json(jobs)

})
// @ desc  post jobs
// @route  post /api/jobs
// @access private
const CreateJob = asyncHandler(async(req,res)=>{
    try {
        const body = req.body; 
        
        const result = await JobModel.create({
           ... body,
            user:req.user.id
        });
         // Assuming JobModel has a create method
    
        if (result) {
            return res.status(200).send({result,status:true});
        } else {
            return res.status(404).send({
                message: "Can not insert! Try again later",
                status: false
            });
        }
    } catch (error) {
        console.error("Error inserting job:", error);
        return res.status(500).send({
            message: "Internal Server Error",
            status: false
        });
    }

})
// @ desc  update job
// @route  patch /api/jobs/:id
// @access private


const updateJob = asyncHandler(async (req, res) => {
    try {
      const id = req.params.id;
      const jobData = req.body;
      // Check for user
      if (!req.user) {
        res.status(401);
        throw new Error('User not found');
      }
  
      // Find the job by ID
      const job = await JobModel.findById(id);
  
      // Check if the job exists
      if (!job) {
        res.status(404);
        throw new Error('Job not found');
      }
  
      // Make sure the logged-in user matches the job user
      if (job.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
      }
      const objectId = new ObjectId(id)
  
      // Use findByIdAndUpdate to update the document and return the updated data
      const updatedJob = await JobModel.findByIdAndUpdate(
        objectId,
        { $set: jobData },
       
      );
      
      // Check if the job was updated successfully
      if (!updatedJob) {
        res.status(400);
        throw new Error('Job is not found');
      }
  
      // Return the updated data to the frontend
      res.json({
        message: 'Job updated successfully',
        status: true,
        data: updatedJob,
      });
    } catch (error) {
      console.error('Error updating job:', error);
      res.status(error.status || 500).json({
        message: error.message || 'Internal Server Error',
        status: false,
      });
    }
  });
// @ desc  Delete job
// @route  GET /api/jobs/:id
// @access private
const DeleteJob = asyncHandler(async(req,res)=>{
   
    try {

    
        // check for user
        if(!req.user){
        res.status(401)
        throw new Error('user not found')   
      }
   
    //   make sure the logged in user matches the job user

    const id = req.params.id; // Adjust this based on your route configuration

    // Find the job by ID
    const job = await JobModel.findById(id);
  
    // Check if the job exists
    if (!job) {
      res.status(404);
      throw new Error('Job not found');
    }
  
    // Make sure the logged-in user matches the job user
    if (job.user.toString() !== req.user.id) {
       res.status(401);
      throw new Error('User not authorized');
    }
  
        const deletejob = { _id: new ObjectId(id) };
        const result = await JobModel.deleteOne(deletejob);
    
        if (result.deletedCount === 1) {
            res.status(200).send({
                message: "Job deleted successfully",
                status: true
            });
        } else {
            res.status(404).send({
                message: "Job not found or could not be deleted",
                status: false
            });
        }
    } catch (error) {
        console.error("Error deleting job:", error);
        res.status(500).send({
            message: "Internal Server Error",
            status: false
        });
    }

})


module.exports ={
    getJobs,
    CreateJob,
    updateJob,
    DeleteJob
}