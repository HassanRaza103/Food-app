import React from "react";
import './Videicon.css'

function Videicon(props) {
    return (
        <>
            <div class="Home_menuV">

            {props.ImgSrc 
            ? 
            (<img src={props.ImgSrc} alt={props.nameicon} className="icon-imageV" />)
            : props.iconClass ?
            (<i className={props.iconClass}></i>)
            :(<h3>{props.name}</h3>)
            }
                     
                <span>{props.nameicon}</span>
            </div>
        </>
    )

}
export default Videicon;