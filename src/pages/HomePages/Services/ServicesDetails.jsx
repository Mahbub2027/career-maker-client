import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const ServicesDetails = () => {
    const { user } = useContext(AuthContext);
    const details = useLoaderData();
    const { name,  providerName, area, description, providerPhoto, price, photo } = details;


    const handleBookServices = e => {
        const form = e.target;
        const name = form.name.value;
        // const providerName = form.providerName.value;
        const providerEmail = form.providerEmail.value;
        const date = form.date.value;
        const instruction = form.instruction.value;
        // const providerPhoto = form.providerPhoto.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const bookingsDetails = { name, providerEmail, providerName, date, instruction, providerPhoto, price, photo };
        console.log(bookingsDetails);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookingsDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if(data.insertedId){
                    Swal.fire({
                        title: 'Good job',
                        text: 'Booking successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                        })
                // }
            })
    }

    // const handleMyBookings = () =>{
    //     const myBookings = {name, providerEmail, providerName, date, instruction, providerPhoto, price, photo }
    //     console.log(myBookings);
    //     fetch('http://localhost:5000/bookings',{
    //         method: 'POST',
    //         headers: {
    //             'content-type' : 'application/json'
    //         },
    //         body: JSON.stringify()
    //     })

    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //     })
    // }




    return (
        <div>
            <Navbar></Navbar>
            <div className="w-3/4 mx-auto my-10 space-y-3">
                <div>
                    <div className="">
                        <p className="flex justify-center"><img className="" src={photo} alt="" /></p>
                        <h2 className="text-4xl font-bold mt-20">{name}</h2>
                        <p className="my-5"><span className="font-bold text-xl">Description:</span> {description}</p>
                        <p><span className="font-bold text-xl">Price:</span> {price}</p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <div>
                            <p><img className="w-12 h-12 rounded-full" src={providerPhoto} alt="" /></p>
                        </div>
                        <div className="my-5">
                            <h2 className="font-bold text-xl">{providerName}</h2>
                            <p>{area}</p>
                        </div>
                    </div>
                </div>
                {/* <button className="btn btn-success">Book now</button> */}
                {/* modal */}
                <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="bg-orange-500 py-3 px-5 text-white font-bold rounded-lg" onClick={() => document.getElementById('my_modal_5').showModal()}>Book now</button>
                    <dialog id="my_modal_5" className="modal ">
                        <div className="modal-box w-10/12 max-w-4xl">
                            <div className="">
                            <h2 className="text-4xl text-[#1c232e]  text-center font-bold my-8">Booking Service</h2>
                                <form onSubmit={handleBookServices} method="dialog">
                                    {/* input field */}

                                    
                                        <div className="  p-5">
                                            {/* <h2 className="text-4xl text-[#1c232e]  text-center font-bold my-8">Book Service</h2> */}
                                            {/* <form onSubmit={handleMyBookings}> */}
                                            {/* <form > */}
                                                <div className="form-control w-full mb-5">
                                                    <label className="label">
                                                        <span className="label-text text-base font-bold" >Service name</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text" name="name" value={name} placeholder="service name" className="input input-bordered w-full" />
                                                    </label>
                                                </div>
                                                {/* <div className="form-control w-full mb-5">
                                                        <label className="label">
                                                            <span className="label-text text-base font-bold" >Service Provider Name</span>
                                                        </label>
                                                        <label className="input-group">
                                                            <input type="text" name="providerName" value={user.displayName} placeholder="Provider Name" className="input input-bordered w-full" />
                                                        </label>
                                                    </div> */}

                                                <div className="form-control w-full mb-5">
                                                    <label className="label">
                                                        <span className="label-text text-base font-bold">Service Provider email</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="email" name="providerEmail" value={user.email} placeholder="Email" className="input input-bordered w-full" />
                                                    </label>
                                                </div>
                                                <div className="form-control w-full mb-5">
                                                    <label className="label">
                                                        <span className="label-text text-base font-bold">Services Taking date</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="date" name="date" placeholder="service taking date" className="input input-bordered w-full" />
                                                    </label>
                                                </div>

                                                <div className="form-control w-full mb-5">
                                                    <label className="label">
                                                        <span className="label-text text-base font-bold">Service instruction</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text" name="instruction" placeholder=" instruction" className="input input-bordered w-full" />
                                                    </label>
                                                </div>

                                                <div className="">
                                                    <div className="form-control w-full mb-5">
                                                        <label className="label">
                                                            <span className="label-text text-base font-bold">Price</span>
                                                        </label>
                                                        <label className="input-group">
                                                            <input type="text" name="price" value={price} placeholder="price" className="input input-bordered w-full" />
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="">
                                                    <div className="form-control w-full mb-5">
                                                        <label className="label">
                                                            <span className="label-text text-base font-bold">Services image</span>
                                                        </label>
                                                        <label className="input-group">
                                                            <input type="text" name="photo" value={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                                                        </label>
                                                    </div>
                                                </div>

                                                {/* <input className="bg-orange-500 p-2 rounded-lg cursor-pointer w-full text-white  normal-case font-bold text-xl" type="submit" value="Purchase" /> */}
                                                {/* <button onClick={handleMyBookings}  className="p-2 w-full rounded-lg bg-orange-500 text-white font-bold">Purchase</button> */}
                                            {/* </form> */}
                                        
                                    </div>
                                    <input className="bg-orange-500 p-2 rounded-lg cursor-pointer w-full text-white  normal-case font-bold text-xl" type="submit" value="Purchase" />
                                    {/* <button onClick={handleMyBookings}  className="p-2 w-full rounded-lg bg-orange-500 text-white font-bold">Purchase</button> */}
                                    {/* if there is a button in form, it will close the modal */}
                                    {/* <button className="btn">Close</button> */}
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                {/* modal end */}

                {/* same services for user */}
                

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServicesDetails;