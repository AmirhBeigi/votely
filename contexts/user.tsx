import { getCookie } from 'cookies-next';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useMe } from '../apis/auth/me/hook';

interface User {
  id?: number;
}

interface PorviderType {
  children: React.ReactNode;
}

const UserContext = createContext<User | null | any>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContext`);
  }
  return context;
};

export const UserProvider = (props: PorviderType) => {
  const [user, setUser] = useState<User | null>(null);
  const { data: me, refetch, isSuccess } = useMe();

  useEffect(() => {
    if (getCookie('votely.token')) refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setUser(me.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return <UserContext.Provider value={[user, setUser]} {...props} />;
};
