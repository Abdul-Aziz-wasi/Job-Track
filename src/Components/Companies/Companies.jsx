import React, { Suspense, use } from 'react';
import { Link } from 'react-router';

const Companies = ({ jobsPromise }) => {
  const companies = use(jobsPromise); // from job.json

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Top Companies</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {companies.map((company) => (
          <Suspense key={company.id} fallback={<div className="text-center">Loading...</div>}>
            <Link to={`/companies/${company.id}`} className="card bg-white w-full shadow-md hover:shadow-lg transition duration-300 rounded-lg">
              <figure className="p-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-20 object-contain mx-auto"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-lg font-semibold">{company.name}</h2>
              </div>
            </Link>
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Companies;
