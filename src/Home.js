import { useState , useEffect } from "react";
import BlogList from "./blogList";

const Home=()=>{
    const [blogs, setBlogs]=useState(null);



const handleDelete=(id)=>{
    const newBlogs =blogs.filter(blog =>blog.id !==id);
    setBlogs(newBlogs);
}

useEffect(()=>{
    fetch('http://localhost:8000/blogs')
        .then(res=>{
            return res.json();
        }).then(data => {
            setBlogs(data);
        });
},[]);

return(
    <div className="home">
        {blogs && <BlogList  blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
       
    </div>
    );
}
 
export default Home;







// const Home = () => {

    //     const [name,setName]=useState('Winter');
    
    //     const handleClick =()=>{
    //         setName('Summer')
    // }
    
    //     return (  
    //         <div className="home">
    //             <p>Hello,{name}</p>
    //             <button onClick={handleClick}>Click</button>
    //         </div>
    //     );
    // }