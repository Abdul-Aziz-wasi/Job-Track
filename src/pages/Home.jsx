import React from 'react';
import Hero from '../Hero/Hero';
import Works from '../Works';
import { useLoaderData } from 'react-router';
import Company from '../Company';

const Home = () => {
    const data =useLoaderData()
    
    return (
        <div>
            <Hero></Hero>
            <Works></Works>
          <div className='mt-6'>
            <p className='text-blue-500 text-2xl font-bold w-11/12 mx-auto mt-2 '>Companies</p>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto mt-2'>
            
            {
                data.map(company=><Company key={company.id} company={company}></Company>)
            }
            </div>
          </div>
        </div>
    );
};

export default Home;