import React from 'react';

const Works = () => {
    return (
        <div className='w-10/12 mx-auto p-6 bg-gray-50 rounded-2xl mt-4'>
            <p className='text-2xl font-bold text-blue-500'>Track Your Journey</p>
            <div className='gap-4 py-6'>
                <p className='font-bold'>1. User Sign-Up / Login</p>
                <p className='pb-4'>Users create an account or log in to securely access their personalized job tracking dashboard.</p>
                <p className='font-bold'>2. Add Job Applications</p>
                <p className='pb-4'>Users enter job details such as company name, job title, application date, status (e.g., applied, interviewing), and any relevant notes or documents.</p>
                <p className='font-bold'>3 .Track Progress</p>
                <p className='pb-4'>The app displays a visual timeline or status board (like Kanban) where users can update the status of each job as they move through the hiring process.</p>
                <p className='font-bold'>4. Set Reminders & Deadlines</p>
                <p className='pb-4'>Users can set reminders for follow-ups, interviews, and deadlines to stay on top of every opportunity.</p>
                <p className='font-bold'>5 .Analyze & Improve</p>
                <p className='pb-4'>Users can view insights, such as number of applications submitted, response rates, and success patterns to refine their job search strategy</p>
            </div>

        </div>
    );
};

export default Works;