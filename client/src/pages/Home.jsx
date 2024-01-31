import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import NewsLetter from '../components/NewsLetter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
const Home = () => {
  const[selectedCategory,setSelectedCategory]=useState(null);
  const[jobs,setJobs]=useState([]);
  const[isloading,setIsloading]=useState(true);
  const[currentpage,setCurrentpage]=useState(1);
  const itemsperpage= 6;
  const navigate =useNavigate();

 


  useEffect(()=>{
       const fetchData = async()=>{
        try {
           setIsloading(true);
           const res = await fetch('jobs.json');
           const data = await res.json();
           setJobs(data);
           setIsloading(false);
          
        } catch (error) {
           console.error("error fetching data:",error);
        }
       }
      //  tokencheck();
       
      fetchData();
       
     },[])
    //  Handle input changes
  const[query,setQuery]=useState("");
  const [loc,setLoc] = useState("");
  const handleinputchange =(e)=>{
    setQuery(e.target.value);
  }
  const handlelocChange =(e)=>{
    setLoc(e.target.value);
  }
  
 
    // filter jobs by title
    const filteredItems = jobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase())!==-1);
    const filteredLocItems = jobs.filter((job)=>job.jobLocation.toLowerCase().indexOf(loc.toLowerCase())!==-1);
    // console.log(filteredItems);
  
    

    //  radio based filtering
    const handleChange=(e)=>{
      setSelectedCategory(e.target.value);
      setCurrentpage(1);
    }

      // button based filtering
      const handleClick=(e)=>{
        setSelectedCategory(e.target.value);
        setCurrentpage(1);
      }
      
      // calculate the page range
      const calculatePagerange=()=>{
         const startIndex= (currentpage-1)*itemsperpage;
         const endIndex=startIndex+itemsperpage;
         return {startIndex,endIndex};
      }
      
    
     
 
    // main function
const filteredData = (jobs, selected, query) => {
  let filteredJobs = jobs;

  if (query) {
    filteredJobs = filteredItems;
  }
  if (loc) {
    filteredJobs = filteredLocItems;
  }

  if (selected) {
    filteredJobs = filteredJobs.filter(
      ({ jobLocation, maxPrice, salaryType, experienceLevel, employmentType, postingDate }) =>
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase() ||
        experienceLevel.toLowerCase() === selected.toLowerCase()
    );
  }

  // Calculate the page range
  const { startIndex, endIndex } = calculatePagerange();
  // Slice the filtered jobs based on the page range
  filteredJobs = filteredJobs.slice(startIndex, endIndex);
 
  // Return the result of mapping
  return filteredJobs;
};

const result = filteredData(jobs, selectedCategory, query).map((data, i) => (
  <Card key={i} data={data} />
));

// Pagination functions
const nextPage = () => {
  const totalPages = Math.ceil(filteredData(jobs, selectedCategory, query).length / itemsperpage);
  if (currentpage < totalPages) {
    setCurrentpage(currentpage + 1);
  }
};

const previousPage = () => {
  if (currentpage > 1) {
    setCurrentpage(currentpage - 1);
  }
};

      
     
      
  return (
   
    <div>
       <Banner query={query} loc={loc} handleinputchange={handleinputchange} handlelocChange={handlelocChange}/>
        
        {/* main content */}
        <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
            
            {/* left side */}
            <div className='bg-white p-4 rounded'><Sidebar handleChange={handleChange} handleClick={handleClick}/></div>
            
            {/* job cards */}
            <div className='col-span-2 bg-white p-4 rounded'>
              
            {
              isloading?<p>Loading...</p>:result.length>0?<Jobs result = {result}/>:
               <>
               <h3 className='text-lg font-bold mb-4'>{result.length} Jobs</h3> 
               <h4 className='text-base text-primary px-4'>no data found!</h4> 
              </>
              }
              {/* pagination here */}
            
               {result.length > 0 ? (
    <div className='flex justify-center mt-4 space-x-8 '>
      <button onClick={previousPage} disabled={currentpage === 1} className='hover:underline'>
        Previous
      </button>
      <span className='mx-2'>Page {currentpage} of {Math.ceil(filteredData(jobs, selectedCategory, query).length / itemsperpage)}</span>
      <button onClick={nextPage} disabled={currentpage === Math.ceil(filteredData(jobs, selectedCategory, query).length / itemsperpage)} value="nextbutton" className='hover:underline'>
        Next
      </button>
    </div>
  ) : ""
}
              </div>
            
            {/* right side */}
            <div className='bg-white p-4 rounded'><NewsLetter/></div>
        </div>
  
       <Footer/>
</div>
  
  )
}

export default Home
