import React from "react";
import './Playvideocomp.css'
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import {abbreviateNumber} from "js-abbreviation-number";
import Time from "../Time/Time";

function Playvideocomp({video}) {
    const thumbnailUrl = video?.thumbnails?.[0]?.url;
    const avatarUrl = video?.author?.avatar?.[0]?.url;
    const verified = video?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL'; // Corrected 'auther' to 'author'
  
    return (
      <>
        <div style={{ marginTop: "20px" }}>
          <div className="video_card">
            {video ? (
              <Link to={`/video/${video?.videoId}`}>
                <div>
  
                  <div className="video_thumbnail_container">
                    {thumbnailUrl ? (
                      <img src={thumbnailUrl} alt="Video Thumbnail" className="video_thumbnail" />
                    ) : (
                      <p>No Thumbnail Available</p>
                    )}
                    {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
                  </div>
  
  
                  <div className="Maininner_thumbnail">
  
                    <div className="Dp_Title_Con">
                      <div className="Dp_Con">
                        {avatarUrl ? (
                          <img src={avatarUrl} alt="Author Avatar" className="Dp_Styling" />
                        ) : (
                          <p>No Avatar Available</p> 
                        )}
                      </div>
                    </div>
  
  
                    <div>
                      <span className="video_title">{video?.title}</span>
                    </div>
                    
                  </div>
  
  
                  <div className="Chan_Name_Ver">
                    <div className="Chan_Name">
                      {video?.author?.title}
                    </div>
                    <div className="Chan_Ver">
                      {verified && <BsFillCheckCircleFill color="gray" fontSize={13} />} 
                    </div>
                  </div>
  
  
                  <div className="Views">
                        <span className="Viewspan">{`${abbreviateNumber(video?.stats?.views)} views`}</span>
                        <span className="dot">.</span>
                        <span className="Hours">{video?.publishedTimeText}</span>
                  </div>
  
  
                </div>
              </Link>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </>
    );
    
}
export default Playvideocomp;