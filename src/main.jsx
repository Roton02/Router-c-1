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
// import Bolg from './Component/Blogs/Bolges.jsx';
import Bolges from './Component/Blogs/Bolges.jsx';
import Content from './Component/Blogs/Content.jsx';
import Author from './Component/Blogs/Author.jsx';
import toast, { Toaster } from 'react-hot-toast';

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
        element: <Blog></Blog>,
        loader: ()=> fetch('https://dev.to/api/articles/?per_page=20&top=7')
      },
      {
        path:'/blog/:id',
        element: <Bolges></Bolges>,
        loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
          {
            index: true,
            element: <Content></Content>,
            loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path:'author',
            element: <Author></Author>,
            loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          }
        ],
      },
      {
        path: '/bookmark',
        element: <Bookmarks></Bookmarks>
      },
      
    ],

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>
   </RouterProvider>
   <Toaster></Toaster>
  </React.StrictMode>,
)
