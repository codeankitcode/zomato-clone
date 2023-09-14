import React from "react";
import homeBg from "../assets/home-bg.png"

export default function Home(){
    const styles = {
        backgroundImage: `url(${homeBg})`        
      }
    

    return(
    <div style={styles} className='homeBackground'>
        <h1>zomato</h1>
        <p>Discover the best food & drinks in Delhi NCR</p>
    </div>
    )
}