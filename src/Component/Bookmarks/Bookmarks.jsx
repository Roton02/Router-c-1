import { useEffect, useState } from "react";
import { deleteBlogs, getBlog } from "../../utility/Ls";
import BolgCart from "../Blogs/BolgCart";

const Bookmarks = () => {
    const [blogs , setBlogs]=useState([])
    useEffect(()=>{
        const blog = getBlog()
        setBlogs(blog)
    },[])
    const handleDelete =(id)=>{
        // console.log(blog);
        deleteBlogs(id)
        const blog = getBlog()
        setBlogs(blog)
      }
    return (
        <div className="grid justify-center  min-h-[calc(100vh-124px)] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-5 px-10">
         {
            blogs.map(blog => <BolgCart handleDelete={handleDelete} key={blog.id} istrue={true} blog={blog}></BolgCart>)
         }
          
        </div>
    );
};

export default Bookmarks;