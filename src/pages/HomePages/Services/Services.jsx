import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// import { useLoaderData } from "react-router-dom";

const Services = () => {
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
            <h2 className="text-3xl font-bold text-center">Popular Services</h2>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

                {
                    services.map(service => <p key={service._id}>
                        <div>
                            <div className="card  bg-base-100 shadow-xl">
                                <figure><img src={service.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{service.name}</h2>
                                    <p>{service.description}</p>
                                    <p>{service.providerName}</p>
                                    <p>{service.price}</p>
                                    <div className="card-actions justify-center">
                                        <Link to={`/services/${service._id}`}><button className="btn btn-primary">View Details</button></Link>
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