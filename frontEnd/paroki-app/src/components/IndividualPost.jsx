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

    const convertLinks = (inputText) => {
        // Regular expression to match URLs
        const urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
        return inputText.replace(urlPattern, (url) => {
          return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
        });
      };

    const formattedIsi = convertLinks(content.isi).replace(/\n/g, '<br />');

    return(
        <>
            <div className="pContainer">
                <div className="ptext ptitle">{content.title}</div>
                <div className="ptext">Author : {content.username}</div>
                <div className="ptext">Tanggal Pembuatan : {formatDate(content.tanggal)}</div>
                <hr/>
                <div className="ptext pparag" dangerouslySetInnerHTML={{__html:formattedIsi}}/>    
            </div>
        </>
    )
};

export default IndiviualPost;