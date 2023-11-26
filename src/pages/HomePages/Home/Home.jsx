import { useLoaderData } from "react-router-dom";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Offer from "../Offer/Offer";

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Services services={services}></Services>
            <Offer></Offer>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;