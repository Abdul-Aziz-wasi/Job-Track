import React, { useContext, useState } from 'react';

import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      
      navigate('/myProfile');
    } catch (error) {
      console.error('Update failed', error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-6">Update Your Info</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
         
        </div>
        <div> <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
        >
          Update Information
        </button></div>
        
      </form>
    </div>
  );
};

export default UpdateProfile;
