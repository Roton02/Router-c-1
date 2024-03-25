import { useLoaderData, useNavigation } from "react-router-dom";
import BolgCart from "./BolgCart";
import Spinner from "./Spinner";

const Blog = () => {
    const loaderData = useLoaderData()
    const nagvaigetion = useNavigation()
    if (nagvaigetion.state ==='loading') return <Spinner></Spinner>
  return (
    <section className=" text-gray-100 text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 text-black"
        >
          <img
            src={loaderData[0].cover_image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500 bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            {loaderData[0].title}
            </h3>
            <span className="text-xs text-gray-400 text-gray-400">
            {new Date(loaderData[0].published_at).toLocaleDateString() }
            </span>
            <p>
             {loaderData[0].description}
            </p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
         {
            loaderData.map(blog => <BolgCart key={blog.id} blog={blog}></BolgCart>)
         }
          
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 bg-gray-900 text-gray-400 text-gray-400"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
