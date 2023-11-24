import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2'

const Login = () => {
    const {loginUser, googleUser} = useContext(AuthContext);
    const [loginPassError, setLoginPassError] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();

        const form = e.target;
        const email= form.email.value;
        const password = form.password.value;
        const userLogin= {email, password};
        console.log(userLogin);

        loginUser(email, password)
        .then(res=>{
            console.log(res.user)
            Swal.fire({
                title: 'Login Successful',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'ok'
                })
            navigate(location?.state ? location?.state : '/')
        })
        .catch(error=>{
            console.log(error)
            setLoginPassError("Please provide valid email & password")
        })

    }
    const handleGoogleLogin=()=>{
        googleUser()
        .then(res=>{
            console.log(res.user);
            Swal.fire({
                title: 'Login successful',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'ok'
                })
                navigate(location?.state ? location?.state : '/')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <div className="w-1/2">
                    <img className="w-[520px]" src="https://i.ibb.co/M5kSL80/images-q-tbn-ANd9-Gc-QAl-Vn-INNsp-ITd-OLPDQun-N0di-Ptt-GAsjw-Go-BA-usqp-CAU.jpg" alt="" />
                    {/* <img className="w-[420px]" src="https://i.ibb.co/hH9ysKM/illustration-people-login-fmt-png-alpha-wid-1000.png" alt="" /> */}
                </div>
                <div className="card shrink-0 w-full lg:w-1/2 shadow-xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className="text-4xl text-center font-bold">Welcome</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                            {
                                loginPassError && <p className="text-red-500">{loginPassError}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white font-semibold">Continue</button>
                            <p className="text-center my-3">Or</p>
                            <button onClick={handleGoogleLogin} className=" font-semibold flex items-center justify-center gap-3 border-2 p-2 rounded-xl"><FcGoogle></FcGoogle> Login with Google</button>
                            <p className="mt-1">Donot have an account? <Link to='/signup' className="text-blue-500 font-bold">SignUp</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;