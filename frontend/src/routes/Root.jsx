import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import NavFollow from "../components/NavFollow";
import { Auth0Provider } from "@auth0/auth0-react";

const Root = () => {
    return (
        <Auth0Provider
        domain="dev-zews3bx766n1mjtg.us.auth0.com"
        clientId="uwh1DbOW8xWMvOgaVrSiyPLSmwmLOdjk"
        authorizationParams={{
          redirect_uri: window.location.origin + "/admin",
        }}
        cacheLocation="memory"
        useRefreshTokens={true}
        >
        <div className="bg-owhite">
            <Navbar />
            <NavFollow />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
        </Auth0Provider>
    )
}

export default Root;