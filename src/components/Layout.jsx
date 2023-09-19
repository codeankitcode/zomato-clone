import React from "react";
import {Outlet} from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import TabOptions from "./TabOptions";

export default function Layout(){
    return (
        <div className="wrapper">
            <Header />
            <TabOptions />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}