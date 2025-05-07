import React from 'react';
import { Link } from 'react-router';



const JobInfo = ({job}) => {
   
    
    return (
        <div className="card bg-base-100 w-96 shadow-sm mb-2">
            <div className="card-body">
            <h2 className="card-title">{job.title}</h2>
            <p>{job.jobType}</p>
            <p>{job.salary}</p>
            <div className="card-actions justify-end">
            <Link to={`/job-apply/${job.id}`} className="btn btn-primary">Details</Link>
            </div>
            </div>
            </div>
    );
};

export default JobInfo;