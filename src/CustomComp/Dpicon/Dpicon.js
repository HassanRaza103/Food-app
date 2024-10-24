import React from "react";
import './Dpicon.css'

function Dpicon(props) {
    return (
        <>
            <div class="Home_menuD">

            {props.ImgSrc 
            ? 
            (<img src={props.ImgSrc} alt={props.nameicon} className="icon-imageD" />)
            : props.iconClass ?
            (<i className={props.iconClass}></i>)
            :(<h3>{props.name}</h3>)
            }
                     
                <span>{props.nameicon}</span>
            </div>
        </>
    )

}
export default Dpicon;