
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {

    const hangleContactinfo = e => {
        e.preventDefault();

        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const email = form.email.value;
        const message = form.message.value;

        const messageInfo = { fname, lname, email, message };
        console.log(messageInfo);
    }

    return (
        <div className="bg-slate-100 ">
            <div className="w-11/12 mx-auto my-20 py-10">
                <h2 className="font-bold">We work 24/7</h2>
                <h2 className="text-4xl font-bold text-orange-500">CALL 825-971-4362</h2>
                <div className="flex flex-col md:flex-row gap-5 mt-10">
                    <div className="w-full lg:w-1/3 space-y-5">
                        <h2 className="text-4xl font-bold mb-7">Contact</h2>
                        <p className="flex items-center gap-3 text-lg"><MdEmail></MdEmail>contact@info.com</p>
                        <p className="flex items-center gap-3 text-lg"><MdLocationOn></MdLocationOn>602 18th ave SW Mirpur Dhaka</p>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-4xl font-bold mb-7">Message Us</h2>
                        <form onSubmit={hangleContactinfo}>
                            <div>
                                <div className="md:flex gap-5">
                                    <div className="form-control w-1/2 mb-5">
                                        <label className="label">
                                            <span className="label-text text-lg font-bold" >First name</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="fname" placeholder="first name" className="input input-bordered w-full" required />
                                        </label>
                                    </div>
                                    <div className="form-control w-1/2 mb-5">
                                        <label className="label">
                                            <span className="label-text text-lg font-bold">Last Name</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="lname" placeholder="last name" className="input input-bordered w-full" required />
                                        </label>
                                    </div>

                                </div>
                                {/* <div className="md:flex gap-5"> */}
                                <div className="form-control w-full mb-5">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold" >Email</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" required />
                                    </label>
                                </div>
                                <div className="form-control w-full mb-5">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold">Message</span>
                                    </label>
                                    <label className="input-group">
                                        <textarea rows='3' name="message" className="w-full border-2 p-3 rounded-lg" placeholder="Enter your message" required></textarea>
                                        {/* <input type="text" name="message"  placeholder="Enter your message" className="input input-bordered w-full" /> */}
                                    </label>
                                </div>
                                <div>
                                    <button className="bg-orange-500 py-3 px-4 font-bold text-white rounded-lg">Submit</button>
                                </div>

                                {/* </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;