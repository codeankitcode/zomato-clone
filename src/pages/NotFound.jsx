import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div>
            <h2>Page is not found</h2>
            <Link to="/">Return to Home</Link>
        </div>
    )
}