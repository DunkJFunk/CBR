import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import NavFollow from "../components/NavFollow";

const Root = () => {
    return (
        <div className="bg-owhite">
            <Navbar />
            <NavFollow />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root;