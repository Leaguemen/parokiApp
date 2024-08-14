import React from "react";
import "../Styling/pengumuman.css"
import Postingan from "../components/Postingan";
import PostTable from "../components/Tablepost";


export const Pengumuman = () =>{

    const bukaDoa = () => {
        window.open("https://drive.google.com/file/d/15ScL7i3VUvDNj3emBVOzo3_o7XKlP3re/view?usp=drive_link","blank");
    };


    return (
    <>
        <div className="masterparent">
            <div className="title">
                PENGUMUMAN
            </div>
            {/* <div className="parentPost">
                <Postingan/>
            </div> */}
            <div className="tableContainer">
            <PostTable/>
            </div>
            <button onClick={bukaDoa} className="tombol" >
                DOA
                <br/>
                PAUS
            </button>
        </div>
    </>)
}


export default Pengumuman;