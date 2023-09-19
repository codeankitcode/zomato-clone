import React from "react";
import { NavLink } from "react-router-dom";

export default function TabOptions(){
    return(
        <div>
            <NavLink to="/delivery">
                <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" alt="" />   
                <p>Delivery</p>
            </NavLink>
            <div>
                <img src="" alt="" />
                <p>Dining Out</p>
            </div>
            <div>
                <img src="" alt="" />
                <p>Nightlife</p>
            </div>
        </div>
    )
}