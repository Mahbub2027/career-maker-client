
const About = () => {
    return (
        <div className="my-16 bg-slate-100">

            <div className="flex flex-col lg:flex-row-reverse p-8">
                <div className="w-full md:w-1/2 mx-auto p-5 space-y-5">
                    <h2 className="text-4xl font-bold text-center my-10">About Us</h2>
                    <p className="text-justify">Founded with a vision to simplify and enrich the way you experience home services, 
                        HomeCareer is more than just a platform; 
                        it is a community-driven effort to make your home a haven.</p>
                    <p className="text-justify">As you explore the various categories on our platform, 
                        you will discover not just a service provider, but a 
                        trusted partner invested in the well-being of your home. 
                        We believe that a thriving home environment contributes to 
                        a better quality of life, and we are here to facilitate that journey for you.</p>
                    <p className="text-justify">
                    We have designed our platform to be user-friendly and convenient. Booking a service 
                    is as easy as a few clicks, and our flexible scheduling options allow you to choose 
                    a time that suits your busy lifestyle.
                    </p>
                </div>
                <div className="w-full md:w-1/2 mx-auto p-5">
                    <img src="https://i.ibb.co/CM5yCJ6/depositphotos-243548726-stock-photo-woman-looking-male-technician-checking.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;