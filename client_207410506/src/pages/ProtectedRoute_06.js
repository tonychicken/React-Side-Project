import { useAppContext } from '../context/appContext_06';
import { Navigate } from 'react-router-dom';

const ProtectedRoute_06 = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to='/landing' />;
  }
  return children;
};

export default ProtectedRoute_06;
