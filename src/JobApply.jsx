
import { Link, useLoaderData, useParams} from 'react-router';

const JobApply = () => {
    let job ={}
    const data =useLoaderData();
    const {id}=useParams();
    // const [job, setJob] =useState()
    for(const item of data){
        const findJob =item.jobs.find(job=>job.id ==id)
        if(findJob){
            job=findJob
        }
    }
   
    

 
    return (
       <div>
        <div className='flex items-center justify-center p-8 mt-4'>
            <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
       <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
        <p>Title:{job.title}</p>
        
       </h2>
       <p className="flex-1 dark:text-gray-600">Type:{job.jobType}</p>
       <p className="flex-1 dark:text-gray-600">Salary:{job.salary}</p>
       <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
           
           <Link to={`${job.website}`}><button className="px-6 py-2 btn btn-primary rounded-sm shadow-sm dark:bg-violet-600 dark:text-gray-50">Apply</button></Link>
       </div>
   </div>
          </div>
       </div>
    );
};

export default JobApply;