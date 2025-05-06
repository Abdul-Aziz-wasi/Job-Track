import React from 'react';

const Hero = () => {
    return (
        <div className="hero bg-blue-500 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="/jobs.jpg"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold text-white">Optimize your resume
      to get more interviews</h1>
      <p className="py-6 text-white">
      Jobtrack helps you optimize your resume for any job, highlighting the key experience and skills recruiters need to see.
      </p>
      
    </div>
  </div>
</div>
    );
};

export default Hero;