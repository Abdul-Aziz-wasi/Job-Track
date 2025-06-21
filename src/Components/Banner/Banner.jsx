
import React from 'react';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-900 text-white px-6 md:px-20 py-16">
      
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hello Job Seekers</h1>
        <p className="text-lg md:text-xl font-semibold">
          Build your career with our{' '}
          <span className="text-orange-400 text-2xl font-bold">Career Hub</span> platform.
        </p>
      </div>

      
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src="https://job-board.dexignzone.com/welcome/images/beauty-welcome.png" 
          alt="Career Growth"
          className="w-full h-auto max-w-md mx-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
