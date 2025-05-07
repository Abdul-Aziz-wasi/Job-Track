import React from 'react';
import { useNavigate } from 'react-router';

const Company = ({company}) => {
    const navigate =useNavigate()
    
    return (
        <div onClick={()=>navigate(`/jobdetails/${company.id}`)} className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden border-2 border-gray-100 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 ">
        <div className="flex space-x-4">
            <img alt="" src={company.logo} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
            <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{company.name}</a>
              
            </div>
        </div>
        <div>
            <img src={company.logo} alt="" className=" w-80 mb-4 h-30 sm:h-96 dark:bg-gray-500" />
            <h2 className="mb-1 text-xl font-semibold">{company.location}</h2>
            <h2 className="mb-1 text-sm">{company.industry}</h2>

          
        </div>
       
        
    </div>
    );
};

export default Company;