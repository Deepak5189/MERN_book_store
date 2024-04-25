import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  token: "",
  setToken: () => {},
  user: {},
  setUser: () => {},
});

const AuthProvider = ({ children }) => {

  const login = async (userData) => {
    try{
      const response=await fetch('http://localhost:5555/auth', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const { data } = await response.json();
      window.localStorage.setItem('token', data.token);
      window.localStorage.setItem('user',data.user);
      // console.log(data);
      return data;
    }catch(error){
      console.log(error);
    }
  };

  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
  };

  const value = {
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider, useAuth };
