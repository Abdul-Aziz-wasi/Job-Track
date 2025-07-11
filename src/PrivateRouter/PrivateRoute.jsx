import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';


const PrivateRoute = ({ children }) => {
  const { user ,loading} = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="text-center mt-10 text-lg"><span className="loading loading-spinner text-primary"></span></div>; 
  }


  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};


export default PrivateRoute;
