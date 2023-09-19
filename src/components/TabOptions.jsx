import React from "react";
import { NavLink } from "react-router-dom";

export default function TabOptions(){
    return(
        <div>
            <NavLink to="/delivery">
                <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" alt="" />   
                <p>Delivery</p>
            </NavLink>
            <NavLink>
                <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" alt="" />
                <p>Dining Out</p>
            </NavLink>
            <NavLink>
                <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt="" />
                <p>Nightlife</p>
            </NavLink>
        </div>
    )
}