import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} =useParams();

    return ( 
        <div className="BlogDetails">
            <h2>Blog details - {id} </h2>
        </div>
     );
}
 
export default BlogDetails;