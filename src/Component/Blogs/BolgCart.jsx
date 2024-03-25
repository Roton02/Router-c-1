import { Link } from 'react-router-dom';
import ErrorImages from '../../assets/404.jpg'
const BolgCart = ({blog, istrue,handleDelete}) => {
    // console.log(blog.collection_id);
    const {id, title,description,published_at,cover_image} =blog;

    

    return (
        
       <div className='relative'>
         <Link 
        rel="noopener noreferrer"
         to={`/blog/ ${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline text-black y transition  hover:scale-105 border-opacity-30 hover:border-secondary p-2  "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500 bg-gray-500"
          src={cover_image || ErrorImages }
        />
        <div className="p-6 space-y-2 ">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400 text-gray-400">
          {new Date(published_at).toLocaleDateString() }
          </span>
          <p>
            {description}
          </p>
          
        </div>
      </Link>
      <div>
      {istrue && <button onClick={()=>handleDelete(id)} className='bg-pink-500 p-3 rounded-full -top-3 -right-5 absolute'>del</button>}
      </div>
       </div>
        
    );
};

export default BolgCart;