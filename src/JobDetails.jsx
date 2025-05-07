import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import JobInfo from './JobInfo';

const JobDetails = () => {
    const {id}=useParams()
    const data =useLoaderData()
    const singleData =data.find(data=>data.id ==id)
    const {logo,name,website,location,jobs}=singleData;
    console.log(jobs)
    
    return (
       <div>
         <div className="hero bg-base-200  ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={logo}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">
             {location}
            </p>
           
          </div>
          
        </div>
        
      </div>
       <div className='w-6/12 mx-auto mt-4'>
       <p className='text-2xl font-bold text-blue-500 my-2'>Available Jobs:</p>

       {
        jobs.map(job=><JobInfo key={job.id} job={job}></JobInfo>)
       }
   </div>
       </div>
    );
};

export default JobDetails;