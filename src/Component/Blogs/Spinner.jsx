import { SyncLoader } from "react-spinners";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <SyncLoader color="#36d7b7" />
        </div>
    );
};

export default Spinner;