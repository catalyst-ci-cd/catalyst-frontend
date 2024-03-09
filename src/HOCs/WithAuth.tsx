import { useAuthContext } from '@/contexts/AuthContext';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WithAuth = (WrappedComponent: FC) => () => {
  const { token } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (token === null) {
      navigate('/login');
    }
  }, [navigate, token]);
  return <WrappedComponent></WrappedComponent>;
};
export default WithAuth;
