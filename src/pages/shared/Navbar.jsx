import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>

        {/* <li tabIndex={0}><Link to='/dashBoard'>Dashboard</Link>
            <ul className="p-2">
                <li><Link to='/myServices'>My Services</Link></li>
                <li><Link to='/addServices'>Add services</Link></li>
                <li><Link to='/mySchedules'>My schedules</Link></li>
            </ul>
        </li> */}

    </>

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                        {
                            user && <>
                                <li>
                                    <Link to='/dashBoard'>Dashboard</Link>
                                    <ul className="p-2">
                                    <li><Link to='/myServices'>My Services</Link></li>
                                    <li><Link to='/addServices'>Add services</Link></li>
                                    <li><Link to='/mySchedules'>My schedules</Link></li>
                                    </ul>
                                </li>
                            </>
                        }

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">CareerHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    {
                        user && <>
                            <li tabIndex={0}>
                            <details>
                                <summary><Link to='/dashBoard'>Dashboard</Link></summary>
                            <ul className="p-2 w-36">
                                <li><Link to='/myServices'>My Services</Link></li>
                                <li><Link to='/addServices'>Add services</Link></li>
                                <li><Link to='/mySchedules'>My schedules</Link></li>
                            </ul>
                            </details>
                            </li>
                        </>
                    }

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogOut} className="bg-blue-500 py-2 px-3 text-white font-semibold rounded-lg"><Link to='/login'>Logout</Link></button> :
                    <button className="bg-blue-500 py-2 px-3 text-white font-semibold rounded-lg"><Link to='/login'>Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Navbar;