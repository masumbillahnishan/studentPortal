import React, { createContext, useEffect, useState} from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext({}); 
export const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    
    const signIn = (email, password, userType) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                return updateUserData(userCredential.user, userType);
            });
    };
    
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    };

    const logOut = () => {
        return signOut(auth);
    };



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('on state change', currentUser);
            
            setUser(currentUser);
            setUserName(currentUser?.displayName);
            setUserEmail(currentUser?.email);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const updateUserData = (user, name) => {
        return updateProfile(user, {
            displayName: name
        })
        .then(() => {
            console.log('user name updated');
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        });
    };

    const authInfo = {
        user,
        error,
        userName,
        userEmail,
        loading,
        signIn,
        logIn,
        signInWithGoogle,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
