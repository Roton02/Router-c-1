import { Link, useLoaderData } from "react-router-dom";
import ErrorImages from '../../assets/404.jpg'
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const Content = () => {
    const blog = useLoaderData()
    // console.log(blog);
    const { title,cover_image,tags,url, body_html} =blog;
    return (
        <div className="border-2   border-opacity-30 ">
            
            <Link
            
        rel="noopener noreferrer"
        className="mx-auto group hover:no-underline focus:no-underline text-black  p-2"
      >
        <img
          role="presentation"
          className="object-cover mb-3 w-full rounded h-44 bg-gray-500 bg-gray-500"
          src={cover_image || ErrorImages }
        />
        <div className="px-2 space-y-2">
          <a href={url} target ="_blank" 
         className="text-2xl  font-semibold group-hover:underline group-focus:underline">
            {title}
          </a> <br />
          {
        tags.map((t,idx) => <a key={idx} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"> #{t}</a> )
      }

        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </Link>
        </div>
    );
};

export default Content;