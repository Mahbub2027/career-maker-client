import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            
            <Marquee speed={200} pauseOnClick>
                <div className="mx-5">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/XsvSvDJ/Home-services-in-vizag-1.jpg)' }}>
                    <div className="hero-overlay bg-gray-400 bg-opacity-40"></div>
                    <div className="hero-content text-center ">
                        <div className="text-white">
                            <h1 className="mb-5 text-3xl md:text-5xl text-orange-500 font-bold">Unlock the Door to Hassle-Free Home Services</h1>
                            <p className="mb-5">Swap your household tasks with skilled professionals. From cleaning to repairs, find reliable service providers in your neighborhood.</p>
                            <Link to='/login'><button className="p-3 rounded-lg bg-orange-500 text-white font-semibold">Get Started</button></Link>
                        </div>
                    </div>
                </div>
                </div>

                <div className="mx-5">
                <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/rpzrHfD/lowes-home-services-og.jpg)' }}>
                    <div className="hero-overlay bg-gray-400 bg-opacity-40"></div>
                    <div className="hero-content text-center ">
                        <div className="text-white">
                            <h1 className="mb-5 text-3xl md:text-5xl text-orange-500 font-bold">Transform Your Home, Task by Task</h1>
                            <p className="mb-5">Your go-to platform for hassle-free home services. Connect with trusted professionals for cleaning, repairs, and more.</p>
                            <Link to='/login'><button className="p-3 rounded-lg bg-orange-500 text-white font-semibold">Get Started</button></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mx-5">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/nBcqyW8/photo-1505798577917-a65157d3320a-q-80-w-1000-auto-format-fit-crop-ixlib-rb-4-0.jpg)' }}>
                    <div className="hero-overlay bg-gray-400 bg-opacity-40"></div>
                    <div className="hero-content text-center ">
                        <div className="text-white">
                            <h1 className="mb-5 text-3xl md:text-5xl text-orange-500 font-bold">Where Home Tasks Meet Trusted Professionals</h1>
                            <p className="mb-5">Find experienced professionals for a wide range of home services. Quality assistance is just a click away</p>
                            <Link to='/login'><button className="p-3 rounded-lg bg-orange-500 text-white font-semibold">Get Started</button></Link>
                        </div>
                    </div>
                </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Banner;