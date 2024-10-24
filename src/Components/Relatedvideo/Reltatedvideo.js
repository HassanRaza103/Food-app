import React from "react";
import './Relatedvideo.css'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import Time from "../Time/Time";
import { Link } from "react-router-dom";

function Relatedvideo({ video }) {
    const thumbnailUrl = video?.thumbnails?.[0]?.url;
    const verified = video?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL';
    return (
        <div className="Related_video_con">
            <Link to={`/video/${video?.videoId}`}  className="video_link">
                <div className="Main_view">

                    <div className="one_view">
                        <div className="video_thumbnail_container">
                            {thumbnailUrl ? (
                                <div className="video_thumbnail_wrapper">
                                    <img src={thumbnailUrl} alt="Video Thumbnail" className="video_thumbnail" />
                                </div>
                            ) : (
                                <p>No Thumbnail Available</p>
                            )}
                            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
                        </div>
                    </div>

                    <div className="two_view">
                        <div className="Maininner_thumbnail">
                            <div>
                                <span className="video_titles">{video?.title}</span>
                            </div>
                        </div>
                        <div className="Chan_Name_Vers">
                            <div className="Chan_Names">
                                {video?.author?.title}
                            </div>
                            <div className="Chan_Vers">
                                {verified && <BsFillCheckCircleFill color="gray" fontSize={13} />}
                            </div>
                        </div>
                        <div className="Viewss">
                            <span className="Viewspans">{`${abbreviateNumber(video?.stats?.views)} views`}</span>
                            <span className="dots">.</span>
                            <span className="Hourss">{video?.publishedTimeText}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Relatedvideo;
