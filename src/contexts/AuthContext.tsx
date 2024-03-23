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
  const [user, setUserState] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const setUser = useCallback(async (user_token: string) => {
    const response = await FetchUserData(user_token);
    if (response.status === 'success') {
      setUserState(response.data.user);
    }
  }, []);
  const setToken = useCallback(
    async (newToken: string) => {
      await setUser(newToken);
      localStorage.setItem('token', newToken);
      setTokenState(newToken);
    },
    [setUser],
  );
  const value = useMemo<authContextType>(
    () => ({ token, setToken, user, isLoading }),
    [token, setToken, user, isLoading],
  );
  useEffect(() => {
    (async () => {
      const oldToken = localStorage.getItem('token');
      if (oldToken) {
        await setToken(oldToken);
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
