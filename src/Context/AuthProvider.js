import { createContext, useContext, useEffect, useState } from "react";
import FetchData from "../Utils/Rapisapi";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('New');

  useEffect(() => {
    fetchAllData(value);
  }, [value]);

  const fetchAllData = async (query) => {
    setLoading(true);
    const res = await FetchData(`search/?q=${query}`);
    if (res && res.contents) {
      setData(res.contents); 
    } else {
      setData([]); 
    }
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ data, loading, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);