import React, { useEffect, useState } from 'react';
import initFirebaseAuth from '../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

// Firebase Initialization Call 
initFirebaseAuth();

// Main useFirebase Functionalities 
const useFirebase = () => {
    // All States 
    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');

    const auth = getAuth();

    // User State Tracking For Synchoronzation 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [auth]);

    // Google Login Authentication 
    const useGoogleAuth = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                setErrorMsg('');
            }).catch((error) => {
                setErrorMsg(error.message);
            });
    }

    // Create Account Process Using Email and Password 
    const createAccount = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setErrorMsg('');

                // Set Username (Update)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Update Successful 
                    logout();
                }).catch((err) => {
                    setErrorMsg(err.message);
                });
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    }

    // Login Process Using Email and Password 
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setErrorMsg('');
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    }

    // Logout Process For All Login
    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
            setErrorMsg('');
        }).catch((error) => {
            setErrorMsg(error.message);
        });
    }

    // Data Sending 
    return {
        user,
        errorMsg,
        logout,
        login,
        createAccount,
        useGoogleAuth
    };
};

export default useFirebase;