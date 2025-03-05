import { useState } from "react";

const Home=()=>{
    const [blogs,setBlogs]=useState([
        {title:'My new Website', body:'lorem ispkmk..',author:'mario',id:1},
        {title:'Welcome Party', body:'lorem ispkmk..',author:'yoshi',id:2},
    ]);

return(
    <div className="home">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
        ))}
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