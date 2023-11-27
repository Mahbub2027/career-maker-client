import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const navLinks = <>
        <li className=""><NavLink className={({isActive, isPending})=> isPending ? 'pending' : isActive ? 'text-red-500 ' : ''} to='/'>Home</NavLink></li>
        <li className=""><NavLink className={({isActive, isPending})=> isPending ? 'pending' : isActive ? 'text-red-500 ' : ''} to='/allServices'>Services</NavLink></li>

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
                                <li >
                                    <NavLink  to='/dashBoard'>Dashboard</NavLink>
                                    <ul className="p-2 z-10">
                                    <li><NavLink to='/myServices'>My Services</NavLink></li>
                                    <li><NavLink to='/addServices'>Add services</NavLink></li>
                                    <li><NavLink to='/mySchedules'>My schedules</NavLink></li>
                                    </ul>
                                </li>
                            </>
                        }

                    </ul>
                </div>
                <a className=" text-3xl font-bold">Home<span className="text-orange-500">Career</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    {
                        user && <>
                            <li tabIndex={0}>
                            <details>
                                <summary><NavLink to='/dashBoard'>Dashboard</NavLink></summary>
                            <ul className="p-2 w-36 z-10">
                                <li><NavLink to='/myServices'>My Services</NavLink></li>
                                <li><NavLink to='/addServices'>Add services</NavLink></li>
                                <li><NavLink to='/mySchedules'>My schedules</NavLink></li>
                            </ul>
                            </details>
                            </li>
                        </>
                    }

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <span>{user?.displayName}</span>
                    <span><img className="w-12 h-12 rounded mx-2" src={user?.photoURL} alt="img" /></span>
                    <button onClick={handleLogOut} className="bg-orange-500 py-2 px-3 text-white font-semibold rounded-lg"><Link to='/login'>Logout</Link></button>
                    </> :
                    <>
                        {/* <span><img className="w-12 h-12" src="https://i.ibb.co/Qfxw1kb/Honda-All-New-City.jpg" alt="" /></span> */}
                        <button className="bg-orange-500 py-2 px-3 text-white font-semibold rounded-lg"><Link to='/login'>Login</Link></button>
                    </>
                    
                }
            </div>
        </div>
    );
};

export default Navbar;