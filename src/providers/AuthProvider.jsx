import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null);

const auth =getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null);    

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
       const unsubscrie = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
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
        
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;