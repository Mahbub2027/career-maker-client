import { Link } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { useEffect, useRef, useState } from "react";
// import { FaArrowDown } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Typewriter } from 'react-simple-typewriter'

const AllServices = () => {
    // const loadServices = useLoaderData();
    const [loadServices, setLoadServices] = useState([]);
    const [displayMoredata, setDisplayMoreData] = useState([]);
    const [showAllCategory, setShowAllcategory] = useState(false);

    const searchRef = useRef();

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setLoadServices(data);
                setDisplayMoreData(data.slice(0, 6))
            })
    }, [])

    const handleLoadMoreCategory = () => {
        setDisplayMoreData(loadServices);
        setShowAllcategory(true);
    }

    const handleSearch= ()=>{
        const search = searchRef?.current?.value.toLowerCase();
        console.log(search)

        const filterdata = loadServices.filter((item) =>item.name.toLowerCase().includes(search));
        console.log(filterdata);
        setDisplayMoreData(filterdata);
    }
        

    return (
        <div>
            <Navbar></Navbar>

            <div className="hero h-[90vh]" style={{ backgroundImage: 'url(https://i.ibb.co/hZD3z9b/Brilho-Luxury-Home-Services-Inc-House-and-Condo-Cleaning-in-Toronto-and-the-GTA.jpg)' }}>
                {/* <div className="hero h-[90vh] bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/z5RpsLm/123524425-bottles-with-detergents-brushes-and-sponges-on-concrete-background-colorful-cleaning-produ.jpg)' }}> */}
                <div className="hero-overlay bg-black bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-black">
                        <h1 className="mb-5 text-5xl font-bold">
                            Services {' '}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Garden cleaning', 'Floor cleaning', 'House Cleaning', 'Repair furniture']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                ></Typewriter>
                            </span>
                            </h1>
                        <p className="mb-5 font-semibold">Your go-to platform for hassle-free home services. Connect with trusted professionals for cleaning, repairs, and more.</p>
                        
                        <div className="join">
                            <input ref={searchRef} 
                            defaultValue={''} 
                            type="text" 
                            placeholder="search category" className="w-96 input input-bordered join-item" />
                            <button onClick={handleSearch} className="btn btn-primary join-item">Search</button>
                        </div>
                        
                        
                    </div>
                </div>
            </div>



            {/* All services category */}
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
            {
                displayMoredata.length >= 6 ? <>
                <div className="flex justify-center mb-10">
                {
                    !showAllCategory && <>
                        <button onClick={handleLoadMoreCategory} className="p-3 bg-lime-600 text-white font-bold text-lg rounded-lg flex items-center gap-2">Show more<MdKeyboardDoubleArrowDown /></button>
                    </>
                }
                </div>
                </> : ''
            }
            <Footer></Footer>
        </div>
    );
};

export default AllServices;