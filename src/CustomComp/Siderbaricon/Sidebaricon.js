import React from "react";
import './Sidebaricon.css'

function Sidebaricon(props) {
    return (
        <>
            <div class="Home_menu">

            {props.ImgSrc 
            ? 
            (<img src={props.ImgSrc} alt={props.nameicon} className="icon-image" />)
            : props.iconClass ?
            (<i className={props.iconClass}></i>)
            :(<h3>{props.name}</h3>)
            }
                     
                <span>{props.nameicon}</span>
            </div>
        </>
    )

}
export default Sidebaricon;