import { useState , useEffect } from "react";
import BlogList from "./blogList";

const Home=()=>{
    const [blogs, setBlogs]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError] =useState(null);



const handleDelete=(id)=>{
    const newBlogs =blogs.filter(blog =>blog.id !==id);
    setBlogs(newBlogs);
}

useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error("could not fetch the data for that resource");
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      })
    }, 1000);
  }, [])
 
return(
    <div className="home">
        {error && <div>{ error }</div> }
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList  blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
        
    </div>
    );
}
 
export default Home;