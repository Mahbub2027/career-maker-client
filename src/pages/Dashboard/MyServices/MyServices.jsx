import { useContext } from "react";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import { AuthContext } from "../../../provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";

const MyServices = () => {
    const { user } = useContext(AuthContext)
    const [myServices, setMyServices] = useState([])

    const url = `http://localhost:5000/services?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyServices(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl font-bold text-center my-10">My <span className="text-orange-500">Services</span></h2>
            <div className="w-10/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    myServices.map(myservice => <div key={myservice._id}>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure><img className="w-full h-44" src={myservice.photo} alt="Shoes" /></figure>
                            <div className="p-4 space-y-3">
                                <h2 className="text-2xl font-bold">{myservice.name}</h2>
                                {
                                    myservice.description.length > 100 ? <p><span className="font-bold">Description:</span> {myservice.description.slice(0, 100)}</p> : <p>Description: {myservice.description}</p>
                                }
                                <p><span className="font-bold">Area:</span> {myservice.area}</p>
                                <p><span className="font-bold">Price:</span> {myservice.price} $</p>
                                <div className="flex flex-row gap-4 items-center">
                                    <div><p><img className="w-12 h-12 rounded-full" src={myservice.providerPhoto} alt="provider photo" /></p></div>
                                    <div><p>{myservice.providerName}</p></div>
                                </div>

                                <div className="card-actions justify-center">
                                    <button className="p-3 bg-orange-500 text-white font-bold rounded-lg">Update</button>
                                    <button className="p-3 bg-red-500 text-white font-bold rounded-lg">Delate</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }


            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyServices;