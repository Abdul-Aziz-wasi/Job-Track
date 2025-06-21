import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';


const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded shadow">
      <div className="text-center">
        <img
          src={user?.photoURL}
          alt="Profile"
          className="h-24 w-24 mx-auto rounded-full border-4 border-primary"
        />
        <h2 className="text-2xl font-bold mt-4">{user?.displayName || 'Anonymous User'}</h2>
        <p className="text-gray-600 mt-1">{user?.email}</p>
        <button
        onClick={() => navigate('/update-profile')}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Update Information
      </button>
      </div>

     
    </div>
  );
};

export default MyProfile;
