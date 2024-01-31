const mongoose = require('mongoose')
require('dotenv').config()


const DB_USER= process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const db = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@jobfinder.dgst8u6.mongodb.net/mern_jobfinder?retryWrites=true&w=majority`;
 
const connectDB = async()=>{
  try {
    const conn = await mongoose.connect(db)
    console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

module.exports =connectDB