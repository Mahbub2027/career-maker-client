import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [registrationError, setRegistrationError] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    

    const handleSignUp = e=>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const userSignup = {name, email, password, photo}
        console.log(userSignup);

        if(password.length < 6)
        {
            setRegistrationError("Password should be at least 6 characters")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegistrationError('You should have at least one UPPERCASE letter')
            return;
        }
        else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\|-]/.test(password)){
            setRegistrationError('You should have at least one special caracter.')
            return;
        }

        createUser(email, password)
        .then(res=>{
            console.log(res.user)
            Swal.fire({
                title: 'Registration Successful',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'ok'
                })
            navigate(location?.state ? location?.state : '/')
        })
        .catch(error=>{
            console.log(error)
            setRegistrationError(error.message);
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
                    <form onSubmit={handleSignUp} className="card-body">
                        <h2 className="text-4xl text-center font-bold">Create an account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Photo url</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter your photo-url" className="input input-bordered" required />
                        </div>
                        {
                            registrationError && <p className="text-red-500">{registrationError}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white font-semibold">Register</button>   
                            <p className="mt-1">Already have an account? <Link to='/login' className="text-blue-500 font-bold">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;