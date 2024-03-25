import { Outlet } from "react-router-dom";
import Footer from "../Navbar/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return ( 
        <div>
            <div className="h-[64px]">
            <Navbar></Navbar>
            </div>
            <div className=" min-h-[calc(100vh-124px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;