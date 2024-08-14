import { Link } from "react-router-dom";
import pope from "../assets/pope.png"
import theo from "../assets/Theodorus.png"
import "../Styling/Navbar.css"


export function Navbar() {
    return(
        <>
        <div className="Banner">
            <div className="ls"> 
                <div>
                    <img src={pope} className="pope" alt="" />
                </div>
                <div className="Title">
                    <div className="ltitle">POPE</div>
                    <div className="ltitle">FRANCIS</div>
                    <div className="stitle">APOSTOLIC JOUNEY TO</div>
                    <div className="mtitle">INDONESIA</div>
                    <div className="stitle">FAITH ⚫ FRATERNITY ⚫ COMPASSION</div>
                </div>
            </div>
            <img src={theo} className="logo" alt="" />
        </div>
        <div className="ButtonContainer">
            <Link to="/">
                <button className="Tombol">Pengumuman</button>
            </Link>
            <Link to="https://docs.google.com/spreadsheets/d/12AKQerW2W67vRic5ValWN8ACHGwZXmY1MsvQFMXp-kE/edit?usp=sharing" target="_blank">
                <button className="Tombol">Rundown</button>
            </Link>
            <Link to="https://docs.google.com/spreadsheets/d/1NZDwS6WG6Erkr3jTlJ0KbydN6SHIeihWwsVxhz7Z3Dg/edit?usp=sharing" target="_blank">
                <button className="Tombol">Peserta</button>
            </Link>
            <Link to="/formpage">
                <button className="Tombol">Form</button>
            </Link>
        </div>
        <div className="lowStyle">

        </div>
        </>
    )
};

export default Navbar;