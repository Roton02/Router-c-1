import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Hero from './Component/Navbar/Hero.jsx';
import Blog from './Component/Blogs/Blog.jsx';
import Bookmarks from './Component/Bookmarks/Bookmarks.jsx';


const router= createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Hero></Hero>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path: '/bookmark',
        element: <Bookmarks></Bookmarks>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
  </React.StrictMode>,
)
