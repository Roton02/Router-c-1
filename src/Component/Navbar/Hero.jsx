import { Link } from "react-router-dom";
import wave from "../../assets/wave.svg"
const Hero = () => {
  return (
    <div>
      <div className="hero relative flex flex-col min-h-[calc(100vh-118px)] ">
        <div className="hero-content  text-center">
          <div className="mt-28">
            <h1 className="text-5xl font-bold">Welcome to <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">Kynus-MR</span> </h1>
            <p className="py-6">
            Kynus-MR is the bridge between the complex world of technology and <br /> the curious minds eager to understand it
            </p>
            <div className="flex gap-2 justify-center">
              {" "}
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                <span className="relative text-black group-hover:text-white">
                  <Link to="/blogs">Read Blogs</Link>
                </span>
              </a>
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                <span className="relative text-black group-hover:text-white">
                  <Link to="/bookmark"> Bookmarks</Link>
                </span>
              </a>
            </div>
          </div>
        </div>
        
          <img className="absolute bottom-0 w-full" src={wave} alt="" />
        
      </div>
    </div>
  );
};

export default Hero;
