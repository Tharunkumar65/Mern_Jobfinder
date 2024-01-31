const express = require('express')
require('dotenv').config();
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./db/Conn')
const port = process.env.PORT ||5000 
const jobsrouter = require('./routes/jobRoutes');
const userrouter = require('./routes/userRoutes')
const cors= require('cors')
connectDB()
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET,PUT,PATCH,POST,DELETE"]
}))
app.use('/api/jobs',jobsrouter)
app.use('/api/users',userrouter)

app.get('/',(req,res)=>{
    res.send("Jobfinder server is running")
})

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})