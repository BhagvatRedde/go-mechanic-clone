import { useLocation, Navigate } from 'react-router-dom';
const PrivateRoute = () => {
  const location = useLocation();
  
  return (
     <Navigate to="/Home" state={{ from: location }} />
);
};
export default PrivateRoute;
