import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CompanyDetails = () => {
  const { id } = useParams();
  const [companies, setCompanies] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetch('/job.json') 
      .then(res => res.json())
      .then(data => setCompanies(data));
  }, []);

  const company = companies.find(comp => comp.id === id);

  if (!company) return <p className="text-center mt-10">Loading or Company Not Found...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <img src={company.logo} alt={company.name} className="h-20 mx-auto mb-4" />
        <h2 className="text-3xl font-bold">{company.name}</h2>
        <p className="text-gray-500">{company.industry} · {company.location}</p>
      </div>

      <div className="space-y-4">
        {company.jobs.map(job => (
          <div key={job.id} className="p-4 border rounded-md shadow-sm bg-white">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-sm text-gray-600">{job.jobType}</p>
            <p className="text-sm font-medium mt-1"> {job.salary}</p>
            <button
              className="btn btn-sm btn-primary mt-3"
              onClick={() => setSelectedJob(job)}
            >
              Details
            </button>
          </div>
        ))}
      </div>

      
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
            <p className="text-sm text-gray-600 mb-1">{selectedJob.jobType} · {selectedJob.location}</p>
            <p className="text-sm font-medium mb-3"> {selectedJob.salary}</p>
            <p className="text-sm text-gray-700 mb-4">{selectedJob.description}</p>

            <div className="flex justify-between">
              <a
                href={selectedJob.website}
                className="btn btn-success"
              >
                Apply
              </a>
              <button onClick={() => setSelectedJob(null)} className="btn btn-outline">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;
