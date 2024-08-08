import { useEffect, useState } from "react";
import { createContext } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic/useAxiosPublic";
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  
  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email, password)
  }
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password)
  }
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider)
  }
  const updateUserProfile = (name,photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      photoURL: photo,
      displayName: name
    })
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  },[])
  const logout = () => {
    return auth.signOut()
  }
  const data = {user, signup, login, googleLogin, facebookLogin, logout, loading, updateUserProfile}
  return(
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider