import { Link } from "react-router-dom";

const Offer = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-5 bg-orange-500 text-white px-5 py-20">
            <div className="w-full lg:w-3/4">
                <p className="text-4xl font-semibold">Now Get Upto <span className="bg-white text-orange-500 p-2 rounded-lg text-3xl lg:text-5xl font-bold">15%</span> Discount on Recurring Services</p>
            </div>
            <div>
                <Link to='/allServices'><button className="bg-white text-orange-500 font-semibold rounded-lg px-5 py-3">Book for now to Offer</button></Link>
            </div>
        </div>
    );
};

export default Offer;