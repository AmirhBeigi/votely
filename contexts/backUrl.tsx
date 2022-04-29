/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState } from 'react';

interface PorviderType {
  children: React.ReactNode;
}

const BackUrlContext = createContext<string | null | any>(null);

export const useBackUrl = () => {
  const context = useContext(BackUrlContext);
  if (context === undefined) {
    throw new Error(`useBackUrl must be used within a BackUrlContext`);
  }
  return context;
};

export const BackUrlProvider = (props: PorviderType) => {
  const [url, setUrl] = useState<string | null>(null);

  return <BackUrlContext.Provider value={[url, setUrl]} {...props} />;
};
