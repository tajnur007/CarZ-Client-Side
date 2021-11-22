import { useEffect, useState } from 'react';
import initFirebaseAuth from '../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, getIdToken } from "firebase/auth";

// Firebase Initialization Call 
initFirebaseAuth();

// Main useFirebase Functionalities 
const useFirebase = () => {
    // All States 
    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [isAdmin, setIsAdmin] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // User State Tracking For Synchoronzation 
    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, user => {
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken))

                setUser(user);
                setIsLoading(false);
            }
        })
    }, [auth]);

    // Checking The User Is An Admin Or Not 
    useEffect(() => {
        setIsLoading(true);
        const data = { email: user.email };
        fetch('https://young-taiga-83856.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(data => setIsAdmin(data.isAdmin))
            .finally(() => setIsLoading(false))

        console.log(isAdmin);
    }, [isAdmin, user.email]);

    // Google Login Authentication 
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth, provider);
    }

    // Create Account Process Using Email and Password 
    const createAccount = (name, email, password) => {
        setIsLoading(true);
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

                // User Info Send to Database 
                setIsLoading(true);
                const newUser = { name, email };
                fetch('https://young-taiga-83856.herokuapp.com/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.insertedId) {
                            alert('Your registration successfully completed. Please visit to login page.');
                        }
                    })
            })
            .catch((error) => {
                setErrorMsg(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Login Process Using Email and Password 
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout Process For All Login
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            setErrorMsg('');
        }).catch((error) => {
            setErrorMsg(error.message);
        })
            .finally(() => setIsLoading(false));
    }

    // Data Sending 
    return {
        user,
        setUser,
        isAdmin,
        errorMsg,
        setErrorMsg,
        logout,
        login,
        createAccount,
        googleLogin,
        isLoading,
        setIsLoading
    };
};

export default useFirebase;