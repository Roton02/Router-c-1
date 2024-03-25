import toast from "react-hot-toast";
export const getBlog = () =>{
    let blogs = [];
    const getItem = localStorage.getItem('blogs')
    if(getItem){
        blogs = JSON.parse(getItem)
    }
    return blogs
    
}
// Save 
export const setBlogs = blog =>{
    let blogs = getBlog()
    const isAxist = blogs.find(b => b.id === blog.id)
    if (isAxist) {
        // console.log("object");
        return toast.error('Already ace.')
    }
    blogs.push(blog)
    localStorage.setItem('blogs', JSON.stringify(blogs))
    toast.success('add korci ')
}


// delete
export const deleteBlogs = id =>{
    let blogs = getBlog()
    const deleteBlogs = blogs.filter(b => b.id !==id )
    localStorage.setItem('blogs', JSON.stringify(deleteBlogs))
    toast.success('delete done ')
}
