import React from "react";
import "../Styling/InPro.css"

export function IndiviualPost({content}){

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return(
        <>
            <div className="pContainer">
                <div className="ptext ptitle">{content.title}</div>
                <div className="ptext">Author : {content.username}</div>
                <div className="ptext">Tanggal Pembuatan : {formatDate(content.tanggal)}</div>
                <hr/>
                <div className="ptext pparag">{content.isi}</div>    
            </div>
        </>
    )
};

export default IndiviualPost;