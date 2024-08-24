import React from "react";
import "../Styling/pengumuman.css"
import Forms from "../components/Forms";


export function Formpage(){
    return (
        <>
            <div className="masterparent">
                <div className="title">
                    Forms
                </div>
                {/* <div className="parentPost">
                    <Postingan/>
                </div> */}
                <div className="tableContainer">
                <Forms/>
                </div>
            </div>
        </>)
}

export default Formpage;