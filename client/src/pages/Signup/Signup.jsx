import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic/useAxiosPublic';

const notifySuccess = () => toast.success("Account created successfully.");

const Signup = () => {
  const { signup, loading, updateUserProfile } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const image = data.profile[0];
    
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axiosPublic.post(imageHostingURL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: false
      });

      const imgUrl = response.data.data.url;
      console.log(email, password,imgUrl)
      
      signup(email, password)
      .then(data => {
        updateUserProfile(name, imgUrl)
        .then(data => {
          notifySuccess()
          navigate('/')
          reset()
        })
      })
      .catch(error => {
        if(error.message === "Firebase: Error (auth/email-already-in-use)."){
          toast.error("User already exists")
        }
      })
    } catch (error) {
        console.error("Error creating account:", error);
        toast.error("Failed to create account. Please try again.");
    }
  };
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
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div className="text-center lg:text-left">
            <img src="dog.png" alt=""/>
          </div>
          <div className="card dark:bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" {...register("name")} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Image</span>
                </label>
                <input type="file" {...register("profile")} className="input input-bordered p-2" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-secondary text-white text-[15px]">Create Account</button>
              </div>
            </form>
            <label className='mx-auto mb-2'>
            Create Account With
            </label>
            <div className="socialLogin flex justify-center mb-5 gap-3 ">
              <button onClick={handleFacebookLogin} className='btn bg-[#4267B2] text-white'>Facebook</button>
              <button onClick={handleGoogleLogin} className='btn bg-red-600 text-white'>Google</button>
            </div>
            <label className='mx-auto mb-3'>
              Already with us? <Link className='text-blue-600' to="/login">Login Here</Link>
            </label>
            {loading && (
              <div className="flex justify-center mb-3">
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-sm"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
