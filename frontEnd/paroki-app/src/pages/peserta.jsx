import React from 'react';
import Table from '../components/Table';
import "../Styling/peserta.css"

export function Peserta(){
    return(
        <div>
            <div className="title">
                DAFTAR PESERTA
            </div>
            <div className='tableContainer'>
                <Table />
            </div>
        </div>
    )
}

export default Peserta;