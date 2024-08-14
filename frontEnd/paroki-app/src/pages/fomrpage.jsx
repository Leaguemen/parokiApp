import React from "react";
import "../Styling/pengumuman.css"
import Postingan from "../components/Postingan";
import Forms from "../components/Forms";


export function Formpage(){
    return(
        <>
        <div className="masterparent">
            <div className="title">
                FORMS
            </div>
            <div className="parentPost">
                <Forms/>
            </div>
        </div>
    </>
    )
}

export default Formpage;