import React from "react";
import "../Styling/pengumuman.css"
import Postingan from "../components/Postingan";


export const Pengumuman = () =>{
    return (
    <>
        <div className="masterparent">
        <div className="title">
            PENGUMUMAN
        </div>
        <div className="parentPost">
            <Postingan/>
        </div>
        </div>
    </>)
}


export default Pengumuman;