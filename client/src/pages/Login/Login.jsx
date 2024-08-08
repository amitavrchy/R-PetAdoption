import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const { login, loading, googleLogin, facebookLogin } = useAuth()
  const { handleSubmit, register, reset } = useForm()
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    const email = data.email
    const password = data.password
    login(email, password)
      .then(data => {
        toast.success("Login Successful")
        navigate("/")
      })
  }
  const handleGoogleLogin = () => {
    googleLogin()
      .then(data => {
        toast.success("Login Successful")
        navigate("/")
      })
  }
  const handleFacebookLogin = () => {
    facebookLogin()
      .then(data => {
        toast.success("Login Successful")
        navigate("/")
      })
  }
  return (
    <>
      <Toaster />
      <div className="hero dark:bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src="dog.png" alt="" />
          </div>
          <div className="card dark:bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register('email')} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" {...register('password')} className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <label className='mx-auto mb-2'>
              Login With
            </label>
            <div className="socialLogin flex justify-center mb-5 gap-3 ">
              <button onClick={handleFacebookLogin} className='btn bg-[#4267B2] text-white'>Facebook</button>
              <button onClick={handleGoogleLogin} className='btn bg-red-600 text-white'>Google</button>
            </div>
            <label className='mx-auto mb-3'>
              New to Pet Adaptation? <Link className='text-blue-600' to="/signup">Create an Account</Link>
            </label>
            {loading && <div className='flex justify-center mb-3'>
              <span className="loading loading-ball loading-sm"></span>
              <span className="loading loading-ball loading-sm"></span>
              <span className="loading loading-ball loading-sm"></span>
            </div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login