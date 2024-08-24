import React from "react";
import "../Styling/pengumuman.css"
import News from "../components/News";


export function Newspage(){
    return (
        <>
            <div className="masterparent">
                <div className="title">
                    Pengumuman
                </div>
                {/* <div className="parentPost">
                    <Postingan/>
                </div> */}
                <div className="tableContainer">
                <News/>
                </div>
            </div>
        </>)
}

export default Newspage;