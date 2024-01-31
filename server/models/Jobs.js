const mongoose = require('mongoose')


const JobSchema = new mongoose.Schema({
   user:{
     type:mongoose.Schema.Types.ObjectId,
     required: true,
     ref:"users"
   },
    jobTitle:{
        type:String,
    },
    CompanyName : String,
    minprice :String,
    maxprice: String,
    salaryType:String,
    JobLocation:String,
    PostingDate:String,
    experienceLevel:String,
    companyLogo:String,
    employmentType:String,
    description:String,
    postedBy:String,
    skills:{
        type:Array
    }
})

const JobModel = mongoose.model("testjobs",JobSchema);


module.exports=JobModel