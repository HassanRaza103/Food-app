import React from "react";
import './Sidebar.css'
import Sidebaricon from "../../CustomComp/Siderbaricon/Sidebaricon";

function Sidebar() {
    return (
        <>
            <div className="Side_bar_Con">

                <div>
                <Sidebaricon iconClass='fa-solid fa-house' nameicon='Home' />
              <Sidebaricon iconClass='fa-solid fa-film' nameicon='Shorts' />
              <Sidebaricon iconClass='fa-solid fa-video' nameicon='Subscriptions' />
                </div>
                <hr className="my-line"/>
                <div>
                <Sidebaricon name='You' nameicon='' />
                <Sidebaricon iconClass='fa-solid fa-photo-film' nameicon='Library' />
              <Sidebaricon iconClass='fa-solid fa-clock-rotate-left' nameicon='History' />
              <Sidebaricon iconClass='fa-solid fa-play' nameicon='Your Videos' />
              <Sidebaricon iconClass='fa-solid fa-clock' nameicon='Watch Later' />
              <Sidebaricon iconClass='fa-solid fa-thumbs-up' nameicon='Liked Videos' />
              <Sidebaricon iconClass='fa-solid fa-compass' nameicon='Explore' />
                </div>
                <hr className="my-line"/>
                <div>
                <h3 className="Sub_heading">Subscriptions</h3>
                <Sidebaricon ImgSrc='Mrbeast.png' nameicon='MrBeast' />
                <Sidebaricon ImgSrc='T.png' nameicon='Tseries' />
                <Sidebaricon ImgSrc='Ducky.png' nameicon='ducky Bhai' />
                <Sidebaricon ImgSrc='Profile.png' nameicon='Hassan' />
                <Sidebaricon ImgSrc='Geo.png' nameicon='Geo News' />
                <Sidebaricon ImgSrc='Ary.png' nameicon='Ary News' />
                <Sidebaricon ImgSrc='Bbc.png' nameicon='BBC News' />

                </div>

                <hr className="my-line"/>

                <div>
                <h3 className="Sub_heading">Explore</h3>

                <Sidebaricon iconClass='fa-solid fa-fire' nameicon='Trending' />
              <Sidebaricon iconClass='fa-solid fa-music' nameicon='Music' />
              <Sidebaricon iconClass='fa-solid fa-gamepad' nameicon='Gaming' />
              <Sidebaricon iconClass='fa-solid fa-newspaper' nameicon='News' />
              <Sidebaricon iconClass='fa-solid fa-futbol' nameicon='Sports' />
              

                </div>

                <hr className="my-line"/>

                <div>
                <h3 className="Sub_heading"> More from YouTube</h3>
                <Sidebaricon ImgSrc='Youicon.png' nameicon='YouTube Premium' />
                <Sidebaricon ImgSrc='Youstudio.png' nameicon='YouTube Studio' />
                <Sidebaricon ImgSrc='Youmusic.png' nameicon='YouTube Music' />
                <Sidebaricon ImgSrc='Youkids.png' nameicon='YouTube Kids' />
                </div>

                <hr className="my-line"/>

                <div>
              <Sidebaricon iconClass='fa-solid fa-gear' nameicon='Settings' />
                <Sidebaricon iconClass='fa-solid fa-circle-question' nameicon='Help ' />
              <Sidebaricon iconClass='fa-solid fa-paper-plane' nameicon='Send feedback' />
              <Sidebaricon iconClass='fa-solid fa-tower-broadcast' nameicon='Live' />
                </div>

                <hr className="my-line"/>

                <div className="sidebar_Fotter">
                  <span>

                  About Press Copyright <br/>Contact us Creator Advertise <br/>Developers
                  <br/>
                  <br/>
                  Terms Privacy Policy & Safety <br/> How YouTube works <br/>Test new features
                  <br/>
                  <br/>
                  <p>© 2024 Google LLC</p>
                  <br/>
                 

                  
                  </span>
                </div>








              



            </div>

        </>
    )

}
export default Sidebar;