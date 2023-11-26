import Swal from "sweetalert2";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";

const AddServices = () => {

    const handleAddServices= e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const providerName = form.providerName.value;
        const providerEmail = form.providerEmail.value;
        const area = form.area.value;
        const description = form.description.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const servicesDetails = {name, providerEmail, providerName, area, description, price, photo};
        console.log(servicesDetails);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(servicesDetails)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            Swal.fire({
                title: 'Good job',
                text: 'Service added successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
                })
        })
    }

    return (
        <div className="bg-slate-100"> 
            <Navbar></Navbar>
        <div className="w-10/12 mx-auto my-5">
            {/* bg-[#F4F3F0]   text-[#374151]*/}
            <div className="  p-5">
                <h2 className="text-5xl text-[#1c232e]  text-center font-bold font-[Rancho] my-8">Add New Services</h2>
                <form onSubmit={handleAddServices}>
                    {/* Service & Provider name */}
                    <div className="md:flex gap-5">
                        <div className="form-control w-1/2 mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-bold" >Service name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="service name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Service Provider Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="providerName" placeholder="Provider Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* email & area */}
                    <div className="md:flex gap-5">
                        <div className="form-control w-1/2 mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Service Provider email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="providerEmail" placeholder="Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Services Area</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="area" placeholder="service area" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* Short description */}
                    <div className="md:flex gap-5">
                        <div className="form-control w-full mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Service Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>


                    </div>
                    {/*Price & Photo url */}
                    <div className="">
                        <div className="form-control w-full mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="">
                        <div className="form-control w-full mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    

                    <input className="bg-orange-500 p-2 rounded-lg cursor-pointer w-full text-white  normal-case font-bold text-xl" type="submit" value="Add Service" />

                </form>
            </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default AddServices;