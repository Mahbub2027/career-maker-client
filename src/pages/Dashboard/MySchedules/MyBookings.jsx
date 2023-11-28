import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `https://career-maker-server-six.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    return (
        <div className="w-10/12 mx-auto">
            <h2 className="text-3xl font-bold mt-10 text-center">My Bookings</h2>
            <div className="grid grid-cols-1 gap-10 my-10 rounded-l-lg">
                {
                    bookings.map(booking => <div key={booking._id}>
                        <div className="card md:h-52 flex flex-col md:flex-row gap-5  bg-base-100 shadow-xl">
                            <figure><img className="w-full md:w-60 h-44 md:h-full" src={booking.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className='text-2xl font-bold'>{booking.name}</h2>
                                <p><span className="font-bold">Booking Date:</span> {booking.date}</p>
                                <p><span className="font-bold">Instruction:</span> {booking.instruction}</p>
                                <p><span className="font-bold">Price:</span> {booking.price} $</p>
                                {/* <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyBookings;