import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="">
            <div className="flex flex-col ">
                <div className="flex justify-center"><img className="mt-12 w-48 md:w-80" src="https://i.ibb.co/XVShjQj/images-q-tbn-ANd9-Gc-R721-Dfx1-Fkzrco-VPD5-Lh-Y7-Xe-FJh-Xcjb-FHW0-Q-usqp-CAU.jpg" alt="" /></div>
                <div className="flex justify-center"><button className="btn btn-success text-white text-base w-28"><Link to='/'>Go home</Link></button></div>
            </div>
        </div>
    );
};

export default ErrorPage;