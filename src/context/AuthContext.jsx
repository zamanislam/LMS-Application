import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState({ flag: false, user: null });

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};