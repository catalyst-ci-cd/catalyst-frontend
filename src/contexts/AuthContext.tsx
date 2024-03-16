import { FetchUserData } from '@/services/AccountApi';
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type UserType = {
  id: number;
  username: string;
  email: string;
  avatar: string;
  created_at: string;
};

type authContextType = {
  token: string | null;
  setToken: (newToken: string) => void;
  isLoading: boolean;
  user: UserType | null;
};

const authContext = createContext<authContextType | null>(null);

export const AuthContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setTokenState] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const setToken = useCallback((newToken: string) => {
    localStorage.setItem('token', newToken);
    setTokenState(newToken);
  }, []);
  const value = useMemo<authContextType>(
    () => ({ token, setToken, user, isLoading }),
    [token, setToken, user, isLoading],
  );
  useEffect(() => {
    (async () => {
      const oldToken = localStorage.getItem('token');
      if (oldToken) {
        setToken(oldToken);
        const response = await FetchUserData(oldToken);
        if (response.status === 'success') {
          setUser(response.data.user);
        }
      }
      setIsLoading(false);
    })();
  }, [setToken]);
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const data = useContext(authContext);
  if (data === null) {
    throw Error('Auth Context provider is not listed');
  }
  return data;
};
