import React, { useState } from "react";
import './Menudis.css'

function Menudis(){
    const categories = [
        "All",
        "Music",
        "Gaming",
        "News",
        "Sports",
        "Movies",
        "Education",
        "Live",
        "Fashion & Beauty",
        "Travel",
        "Technology",
        "Science",
        "Cooking",
        "Comedy",
        "DIY",
        "Fitness",
        "Health",
        "Animation",
        "Pets & Animals",
        "Art",
        "Automotive",
        "History",
        "Documentary",
        "Kids",
        "Lifestyle",
        "Podcasts",
        "Short Films",
        "Nature",
        "Music Videos",
        "Highlights"
      ];

      const [color,setcolor]=useState('All')

      const handlecolor=(item)=>{
        setcolor(item)
      }
      
    return(
        <>
            <div className="Menuouter_bar">

            {categories.map((item)=>{
                return(
                    <div className="MenuNav_bar" style={{
                        backgroundColor:color===item ? 'black':'#efeded ',
                        color:color===item ?'white':'black'
                        }} key={item} onClick={()=> handlecolor(item)}>{item} </div>
                        
                )
            })}                
            </div>
                
        </>
    )

}
export default Menudis;


