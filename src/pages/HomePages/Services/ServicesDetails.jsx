import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

const ServicesDetails = () => {
    const details = useLoaderData();
    const { name, providerEmail, providerName, area, description, providerPhoto, price, photo } = details;
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-10/12 mx-auto my-10 space-y-3">
                <div>
                    <p><img src={photo} alt="" /></p>
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <p>Description: {description}</p>
                    <p>Price: {price}</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <div>
                        <p><img className="w-12 h-12 rounded" src={providerPhoto} alt="" /></p>
                    </div>
                    <div>
                        <h2>{providerName}</h2>
                        <p>{area}</p>
                    </div>
                </div>
                {/* <button className="btn btn-success">Book now</button> */}
                {/* modal */}
                <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Book now</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                {/* modal end */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServicesDetails;