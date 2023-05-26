import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null);

const auth =getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null);    
    const [loading, setLoading] = useState(true);
   
    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
       const unsubscrie = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
        })

        return () =>{
            unsubscrie()
        }
    },[])
  
    const authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        loading,
        setLoading
        
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;