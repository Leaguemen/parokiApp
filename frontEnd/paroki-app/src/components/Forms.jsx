import React from "react";
import IndiviualPost from "./IndividualPost";
import "../Styling/Posts.css"

export function Forms(){
    const [posts,setPosts] = React.useState([]);

    React.useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/forms`)
        .then((res) => res.json())
        .then((posts)=> setPosts(posts.reverse()))
        .catch((error)=> {
            console.error("masalah api euy:", error);
        })}
    ,[])

    
    for(const e of posts){
        console.log(e.isi);
    }

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

export default Forms;