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

type authContextType = {
  token: string | null;
  setToken: (newToken: string) => void;
  isLoading: boolean;
};

const authContext = createContext<authContextType | null>(null);

export const AuthContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setTokenState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const setToken = useCallback((newToken: string) => {
    localStorage.setItem('token', newToken);
    setTokenState(newToken);
  }, []);
  const value = useMemo<authContextType>(
    () => ({ token, setToken, isLoading }),
    [token, setToken, isLoading],
  );
  useEffect(() => {
    const oldToken = localStorage.getItem('token');
    if (oldToken) {
      setToken(oldToken);
    }
    setIsLoading(false);
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
