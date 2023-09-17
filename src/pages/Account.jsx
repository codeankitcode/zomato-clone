import React from "react";
import { Link } from "react-router-dom";

export default function Account(){
    return (
        <div>
            <input type="text" placeholder="enter  your mail" />
            <input type="password" placeholder="enter you password" />
            <Link to="/" >Log in</Link>
        </div>
    )
}