import { useState } from "react";


const Home = () => {

        const [name,setName]=useState('Winter');
    
        const handleClick =()=>{
            setName('Summer')
    }
    
        return (  
            <div className="home">
                <p>Hello,{name}</p>
                <button onClick={handleClick}>Click</button>
            </div>
        );
    }