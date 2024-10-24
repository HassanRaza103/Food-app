import React, { useEffect, useState } from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import Sidebaricon from "../../CustomComp/Siderbaricon/Sidebaricon";
import Videicon from "../../CustomComp/Videicon/Videicon";
import Dpicon from "../../CustomComp/Dpicon/Dpicon";

function Navbar() {
    const [Search, setSearch] = useState('');
    const [isPopup, setIsPopup] = useState(false); // Add state for popup visibility
    // const [isPopupVideo, setisPopupVideo] = useState(false); // Add state for popup visibility
    // const [isPopupbelicon, setisPopupbelicon] = useState(false); // Add state for popup visibility
    const navigate = useNavigate();

    const searchHandle = (e) => {
        if (e.key === 'Enter' || e === 'SearchButton') {
            navigate(`search/${Search}`);
            setSearch('');
        }
    };

    const HandleFun = (popup) => {
        if (isPopup === popup) {
            setIsPopup(null)
        } else (
            setIsPopup(popup)

        )
    }
    // const HandleYoutube =()=>{
        
    // }


    // useEffect(()=>{

    //     const NewHandleFunction=(event)=>{
    //         const NewData=document.querySelector('.Popup_Box, .Popup_Box2, .Popup_Box3')
    //         if(NewData && !NewData.contains(event.target)){
    //             setIsPopup(null)
    //         }
    //     }


    //     document.addEventListener('click',NewHandleFunction);

    //     return()=>{
    //         document.removeEventListener('click',NewHandleFunction)
    //     }

    // },[])



    return (
        <>

            <div className="Nav_MainCon">
                <div className="Start_Navbar">
                    <i className="fa-solid fa-bars"></i>
                    <img  src="youtube.png" alt="ohh" className="Youtube_icon"></img>
                </div>

                <div className="Middle_Navbar">
                    <div className="Middle_Nav">
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyUp={searchHandle}
                            value={Search}
                            type="text"
                            placeholder="Search"
                            className="Input_search"
                        />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="Middle_Nav_mic">
                        <i onClick={() => searchHandle('SearchButton')} className="fa-solid fa-microphone"></i>
                    </div>
                </div>


                <div className="End_Navbar">
                    <span onClick={() => HandleFun('Video')} className="videoIcon"><i className="fa-solid fa-video"></i></span>
                    <span onClick={() => HandleFun('Bell')} className="Bellicon"><i className="fa-regular fa-bell"></i></span>
                    <img onClick={() => HandleFun('Profile')} src="Profile.png" alt="Profile" className="Profile_img"></img>
                </div>

                {isPopup === 'Profile' && (
                    <div className="Popup_Box">

                        <div className="Profile_class">
                            <div className="Dp_Class">
                                <img src="Profile.png" alt="hassan" className="Profile_Image_Con" />
                            </div>

                            <div className="Text_Class">
                                <p className="o_Text" >Hassan Raza</p>
                                <p className="t_Text" >@Hassan_Raza_Gaming</p>
                                <p className="th_Text" >View your channel</p>

                            </div>

                        </div>
                        <br />
                        <hr />
                        <div className="Icon_List">
                            <Dpicon iconClass='fa-solid fa-photo-film' nameicon='Library' />
                            <Dpicon iconClass='fa-solid fa-clock-rotate-left' nameicon='History' />
                            <Dpicon iconClass='fa-solid fa-play' nameicon='Your Videos' />
                            <br />
                            <hr />
                            <Dpicon iconClass='fa-solid fa-clock' nameicon='Watch Later' />
                            <Dpicon iconClass='fa-solid fa-thumbs-up' nameicon='Liked Videos' />
                            <br />
                            <hr />
                            <Dpicon iconClass='fa-solid fa-compass' nameicon='Explore' />
                            <Dpicon iconClass='fa-solid fa-play' nameicon='Your Videos' />
                            <Dpicon iconClass='fa-solid fa-clock' nameicon='Watch Later' />
                            <Dpicon iconClass='fa-solid fa-thumbs-up' nameicon='Liked Videos' />
                            <Dpicon iconClass='fa-solid fa-compass' nameicon='Explore' />
                        </div>


                    </div>
                )}

                {isPopup === 'Video' && (
                    <div className="Popup_Box2">
                        <Videicon iconClass='fa-solid fa-clock' nameicon='Watch Later' />
                        <Videicon iconClass='fa-solid fa-thumbs-up' nameicon='Liked Videos' />
                        <Videicon iconClass='fa-solid fa-compass' nameicon='Explore' />
                    </div>
                )}

                {isPopup === 'Bell' && (
                    <div className="Popup_Box3">
                        <h4>User Profile</h4>
                        <p>This is a popup!</p>
                    </div>
                )}



            </div>


        </>
    );
}

export default Navbar;
