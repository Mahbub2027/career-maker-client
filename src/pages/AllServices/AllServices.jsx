import { Link } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { useEffect, useState } from "react";
// import { FaArrowDown } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const AllServices = () => {
    // const loadServices = useLoaderData();
    const [loadServices, setLoadServices] = useState([]);
    const [displayMoredata, setDisplayMoreData] = useState([]);
    const [showAllCategory, setShowAllcategory] = useState(false);

        useEffect(()=>{
            fetch('http://localhost:5000/services')
            .then(res=>res.json())
            .then(data=>{
                setLoadServices(data);
                setDisplayMoreData(data.slice(0,6))
            })
        },[])

        const handleLoadMoreCategory=()=>{
            setDisplayMoreData(loadServices);
            setShowAllcategory(true);
        }
   

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl font-bold text-center my-10">All Services</h2>
            <div className="w-10/12 mx-auto grid grid-cols-1 md:gric-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {
                    displayMoredata.map(loadService => <p key={loadService._id}>
                        <div>
                            <div className="card  bg-base-100 shadow-xl">
                                <figure><img src={loadService.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{loadService.name}</h2>
                                    <p>{loadService.description}</p>
                                    <p>{loadService.providerName}</p>
                                    <p>{loadService.area}</p>
                                    <p>{loadService.price}</p>
                                    <div className="card-actions justify-center">
                                        <Link to={`/services/${loadService._id}`}><button className="p-3 bg-orange-500 text-white font-bold rounded-lg">View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p>)
                }
                
            </div>
            <div className="flex justify-center mb-10">
                    {
                        !showAllCategory && <>
                            <button onClick={handleLoadMoreCategory} className="p-3 bg-lime-600 text-white font-bold text-lg rounded-lg flex items-center gap-2">Show more<MdKeyboardDoubleArrowDown /></button>
                        </>
                    }
                </div>
            <Footer></Footer>
        </div>
    );
};

export default AllServices;