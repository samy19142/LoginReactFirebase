import { createContext, useContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../Firebase-config/'
const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no auth provider");
  return context;
};

export const AuthProvider = ({ children }) => {


  const signup =async({email,password})=>{
    await createUserWithEmailAndPassword(auth,email,password);
  }

  const login = async({email,password})=>{
    await signInWithEmailAndPassword(auth,email,password);
  }

  return (
    <authContext.Provider value={{ signup, login }}>{children}</authContext.Provider>
  );
};
