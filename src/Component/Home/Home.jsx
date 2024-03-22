import { Outlet } from "react-router-dom";
import Footer from "../Navbar/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <div className="h-16">
            <Navbar></Navbar>
            </div>
            <div className="px-10 min-h-[calc(100vh -116px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;