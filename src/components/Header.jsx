import React from "react";
import {Link} from "react-router-dom"

export default function Header(){
    return (
        <header>
            <nav>
                <Link to="/foods">Foods</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Account</Link>
            </nav>
        </header>
    )
}