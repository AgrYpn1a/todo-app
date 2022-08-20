import { useContext } from 'react';
import { authContext, AuthContext } from '../contexts/AuthContext';

const useAuth = (): AuthContext => useContext(authContext);

export default useAuth;
