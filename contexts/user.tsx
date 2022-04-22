/* eslint-disable react-hooks/exhaustive-deps */
import { getCookie } from 'cookies-next';
import { createContext, useContext, useEffect, useState } from 'react';
import { useMe } from '../apis/auth/me';
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
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setUser(me.data);
    }
  }, [isSuccess]);

  return <UserContext.Provider value={[user, setUser]} {...props} />;
};
