import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// import { AuthContext } from "../../../provider/AuthProvider";

// import { useLoaderData } from "react-router-dom";

const Services = () => {
    // const {user} = useContext(AuthContext);
    const [services, setServices] = useState([])

    // const [displayServices, setDisplayServices] = useState([]);
    // console.log(displayServices);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data.slice(0,4));
            // setDisplayServices(data.slice(0,4));
        })

    },[])


    return (
        <div className="my-20">
            <h2 className="text-4xl font-bold text-center mb-12">Popular <span className="text-orange-500">Services</span></h2>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

                {
                    services.map(service => <p key={service._id}>
                        <div>
                            <div className="card h-[500px] bg-base-100 shadow-xl relative">
                                <figure><img className="w-full h-44" src={service.photo} alt="Shoes" /></figure>
                                <div className="p-4 space-y-2">
                                    <h2 className="text-2xl font-bold">{service.name}</h2>
                                    {
                                        service.description.length > 100 ? <p className="text-justify"><span className="font-bold">Description:</span> {service.description.slice(0,100)}</p> : <p>Description: {service.description}</p>
                                    }
                                    <p><span className="font-bold mb-2">Price: </span> {service.price} $</p>
                                    <div className="flex flex-row item-center gap-5 absolute bottom-20">
                                        <div><p><img className="w-12 h-12 rounded-full" src={service.providerPhoto} alt="" /></p></div>
                                        <div><p className="font-bold">{service.providerName}</p></div>
                                    </div>
                                    <div className="card-actions justify-center absolute bottom-4 right-1/3">
                                        <Link to={`/services/${service._id}`}><button className="btn btn-primary text-white font-bold">View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </p>)
                }
                
                
            </div>
            <div className="flex justify-end w-11/12 mx-auto">
                <Link to='/allServices'><button className="bg-orange-500 px-5 py-3 rounded-lg text-white font-bold mt-10 flex items-center gap-3">Show all<FaArrowRight></FaArrowRight></button></Link>
            </div>
        </div>
    );
};

export default Services; 