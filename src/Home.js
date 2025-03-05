import { useState } from "react";
import BlogList from "./blogList";

const Home=()=>{
    const [blogs]=useState([
        {title:'My new Website', body:'lorem ispkmk..',author:'mario',id:1},
        {title:'Welcome Party', body:'lorem ispkmk..',author:'yoshi',id:2},
    ]);

return(
    <div className="home">
        <BlogList  blogs={blogs}/>
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