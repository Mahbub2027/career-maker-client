import { useLoaderData } from "react-router-dom";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import About from "../About/About";

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Services services={services}></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;