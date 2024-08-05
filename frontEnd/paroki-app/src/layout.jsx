import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import "./Styling/Layout.css"


export function Layout(){
    return(
        <>
            <div className="pageContainer">
                <Navbar/>
                <main>
                    <Outlet/>
                </main>
            </div>
        </>
    )
}