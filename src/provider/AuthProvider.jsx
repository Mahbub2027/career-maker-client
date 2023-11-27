import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const googleUser = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // update profile
    const updateProfileDetails = (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo 
        })
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleUser,
        logOut,
        updateProfileDetails,
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, cUser=>{
            setUser(cUser);
            console.log("current user auth change", cUser);
            setLoading(false);
            
        })
        return()=>{
            return unSubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;