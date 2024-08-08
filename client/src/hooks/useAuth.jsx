import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider';

const useAuth = () => {
    const {signup, login, logout, loading, user, googleLogin, facebookLogin, updateUserProfile} = useContext(AuthContext);
    return ({signup, login, logout, loading, user, googleLogin, facebookLogin, updateUserProfile})
}

export default useAuth