import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { setBlogs } from "../../utility/Ls";

const Bolges = () => {
  const blog = useLoaderData();
  // console.log(blog);
  const [time , settTime]= useState(0)
  const handleTabs =tab =>{
    settTime(tab)
  }
  const {
    comments_count,
    public_reactions_count,
    reading_time_minutes,
    title,
    published_at
  } = blog;

  const handlebookmark =()=>{
    // console.log(blog);
    setBlogs(blog)
  }
  
  return (
    <div>
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
	<article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
		<div className="space-y-6">
			<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
				<div className="flex items-center md:space-x-2">
					
					<p className="text-sm">{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString()}</p>
				</div>
				<p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {public_reactions_count} views</p>
			</div>
		</div>

        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link onClick={()=>handleTabs(0)}
          to=''
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${time === 0 ? 'border border-b-0': 'border-b' } dark:border-gray-600 rounded-t-lg dark:text-gray-600`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Content</span>
        </Link>
        <Link onClick={()=>handleTabs(1)}
          to={`author`}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  
          ${time===1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Author</span>
        </Link>
        <Link> <button onClick={()=>handlebookmark(blog)} className="btn  ml-4 rounded-full bg-gray-300"> <MdBookmarkAdd  className="text-pink-600 " size={20} ></MdBookmarkAdd> </button> </Link>
       
      </div>

		
    <Outlet></Outlet>
	</article>
	<div>
		<div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">

     
			
			
		</div>
		<div className="space-y-2">
			<h4 className="text-lg font-semibold">Related posts</h4>
			<ul className="ml-4 space-y-1 list-disc">
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
				</li>
			</ul>
		</div>
	</div>
</div>

      
    </div>
  );
};

export default Bolges;
