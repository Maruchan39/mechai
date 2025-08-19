import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { getToken, saveToken, removeToken } from '../utils/storage';

interface AuthContextType {
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  login: async () => {},
  logout: async () => {},
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const storedToken = await getToken();
      if (storedToken) setToken(storedToken);
      setLoading(false);
    })();
  }, []);

  const login = async (newToken: string) => {
    await saveToken(newToken);
    setToken(newToken);
  };

  const logout = async () => {
    await removeToken();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
