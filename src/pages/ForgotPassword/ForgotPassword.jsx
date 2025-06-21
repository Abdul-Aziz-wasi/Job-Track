import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';
import { auth } from '../../firebase/firebase.config';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
const { resetPassword } = useContext(AuthContext);
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error('Please enter your email address');
    }

    resetPassword(auth, email)
      .then(() => {
        toast.success('Password reset email sent!');
        setEmail('');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-12 bg-white text-black rounded-md shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">Reset Password</h2>
      <form onSubmit={handleResetPassword} className="space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
