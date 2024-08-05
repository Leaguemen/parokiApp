import React from "react";
import IndiviualPost from "./IndividualPost";
import "../Styling/Posts.css"

export function Postingan(){
    const [posts,setPosts] = React.useState([]);

    React.useEffect(()=>{
        fetch("/postingan")
        .then((res) => res.json())
        .then((posts)=> setPosts(posts.reverse()))}
    ,[])

    return(
        <>
        <div className="container">
            <div>
                {
                    posts.map((post,index)=>(
                        <IndiviualPost content={post} />
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Postingan;