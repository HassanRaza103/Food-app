

import React from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import "./Searchcomp.css";

function Searchcomp({ video }) {
  const thumbnailUrl = video?.thumbnails?.[0]?.url;
  const avatarUrl = video?.author?.avatar?.[0]?.url;
  const verified = video?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL';
  const description = video?.descriptionSnippet  || "No description available";

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <div className="video_cardse">
          {video ? (
            <Link to={`/video/${video?.videoId}`}>
              <div className="MainSearch_Con">


                <div className="First_Serch_Con">
                  <div className="video_thumbnail_containerse">
                    {thumbnailUrl ? (
                      <div className="imageStylings">
                        <img src={thumbnailUrl} alt="Video Thumbnail" className="video_thumbnailse" />
                      </div>

                    ) : (
                      <p>No Thumbnail Available</p>
                    )}
                  </div>
                </div>




                <div className="Second_Serch_Con">

                  <div className="Maininner_thumbnailse">
                    <div>
                      <span className="video_titlese">{video?.title}</span>
                    </div>
                  </div>



                  <div className="video_descriptions1">
                    <p className="Des_Text">{description}</p>
                  </div>





                  <div className="LasTSearc_con" >
                    <div>
                      <div className="Dp_Title_Conse">
                        <div className="Dp_Conse">
                          {avatarUrl ? (
                            <img src={avatarUrl} alt="Author Avatar" className="Dp_Stylingse" />
                          ) : (
                            <p>No Avatar Available</p> // Fallback if avatar URL is not present
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="sub_views_con">
                      <div className="Chan_Name_Verse">
                        <div className="Chan_Namese">
                          {video?.author?.title}
                        </div>
                        <div className="Chan_Verse">
                          {verified && <BsFillCheckCircleFill color="gray" fontSize={13} />} {/* Corrected icon component */}
                        </div>
                      </div>


                      <div className="Viewsse">
                        <span className="Viewspanse">{`${abbreviateNumber(video?.stats?.views)} views`}</span>
                        <span className="dotse">.</span>
                        <span className="Hoursse">{video?.publishedTimeText}</span>
                      </div>
                    </div>
                  </div>






                </div>








              </div>
            </Link>
          ) : (
            <p className="Loading">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Searchcomp;
