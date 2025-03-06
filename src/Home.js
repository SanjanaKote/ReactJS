import { useState , useEffect } from "react";
import BlogList from "./blogList";

const Home=()=>{
    const [blogs, setBlogs]=useState([
        {title:'My new Website', body:'lorem ispkmk..',author:'mario',id:1},
        {title:'Welcome Party', body:'lorem ispkmk..',author:'yoshi',id:2},
        {title:'Story of Success', body:'lorem ispkmk..',author:'mario',id:3},
    ]);

const [name,setName]=useState('mario');

const handleDelete=(id)=>{
    const newBlogs =blogs.filter(blog =>blog.id !==id);
    setBlogs(newBlogs);
}

useEffect(()=>{
    console.log('use effect ran');
    console.log(name);
},[name]);

return(
    <div className="home">
        <BlogList  blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        <button onClick={()=>setName('luigi')}>change Name</button>
        <p>{name}</p>
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