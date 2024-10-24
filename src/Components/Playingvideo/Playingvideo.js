import React, { useEffect, useState } from "react";
import './playingvideo.css';
import { useParams } from "react-router-dom";
import FetchData from "../../Utils/Rapisapi";
import ReactPlayer from "react-player";
import Relatedvideo from "../Relatedvideo/Reltatedvideo";
import { BsFillCheckCircleFill, BsThreeDots } from "react-icons/bs";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { abbreviateNumber } from "js-abbreviation-number";

function Playingvideo() {

    const [video, setVideo] = useState(null);
    const [Subsc, setSubscr] = useState(false);
    const [related, setRelatedVideo] = useState([]); 
    const [isLiked, setIsLiked] = useState(false);  
    const [isDisliked, setIsDisliked] = useState(false);
    const { id } = useParams();  


    const avatarUrl = video?.author?.avatar?.[1]?.url;
    const verified = video?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL';
    const likes = video?.stats?.likes || 0;
    const subscribers = video?.author?.stats?.subscribers || 0;
    const description = video?.description || "No description available";
    const comments = video?.comments || [];

  
    useEffect(() => {
        fetchVideoDetails();
        fetchRelatedVideo();
    }, [id]);

    // Fetch video details from API
    const fetchVideoDetails = () => {
        FetchData(`video/details/?id=${id}`).then((res) => {
            console.log('Video details response:', res);
            setVideo(res);
        }).catch((error) => console.error('Error fetching video details:', error));
    };

    // Fetch related videos from API
    const fetchRelatedVideo = () => {
        FetchData(`video/related-contents/?id=${id}`).then((res) => {
            setRelatedVideo(res.contents || []);
        }).catch((error) => console.error('Error fetching related videos:', error));
    };

    // Toggle like button logic
    const toggleLike = () => {
        setIsLiked(!isLiked);  // Toggle like
        if (isDisliked) setIsDisliked(false);  // Reset dislike when like is clicked
    };

    // Toggle dislike button logic
    const toggleDislike = () => {
        setIsDisliked(!isDisliked);  // Toggle dislike
        if (isLiked) setIsLiked(false);  // Reset like when dislike is clicked
    };

    const toglesubsc=()=>{
        setSubscr(!Subsc)
    }



    return (
        <div className="MAin_video_Con">
            <div className="Outer_View">
                {/* Main video player */}
                <div className="Inner_video_Con">
                    <div className="video_class">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            height="100%"
                            width="100%"
                            playing={true}
                            controls
                        />
                    </div>

                    <div>
                        <div className="SecondVideoClass">

                            <div>
                                <span className="video_title">{video?.title || 'No title available'}</span>
                            </div>

                            <div className="Main_row_con">
                                <div className="Maininner_thumbnails">

                                    <div className="Dp_Title_Cons">

                                        <div className="Dp_Cons">
                                            {avatarUrl ? (
                                                <img
                                                    src={avatarUrl}
                                                    alt="Author Avatar"
                                                    className="Dp_Styling"
                                                />
                                            ) : (
                                                <img
                                                    src="https://via.placeholder.com/50"  // Fallback image
                                                    alt="No Avatar"
                                                    className="Dp_Styling"
                                                />
                                            )}
                                        </div>

                                    </div>

                                    {/* Channel name, verification, and subscriber count */}
                                    <div className="Chnael_Sub_name">
                                        <div className="Chan_Name_Vers">
                                            <div className="Chan_Name">
                                                <span className="Channel_name">{video?.author?.title || 'Unknown Author'}</span>
                                            </div>
                                            <div className="Chan_Ver">
                                                {verified && <BsFillCheckCircleFill color="gray" fontSize={13} />}
                                            </div>
                                        </div>

                                        {/* Subscribers count */}
                                        <div className="Subscribers">
                                            <span>{`${abbreviateNumber(subscribers)} subscribers`}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <button onClick={toglesubsc} className="subscribebutton" style={{backgroundColor:`${Subsc ? "rgb(227, 225, 225)" : "black" }`}}>
                                            subscribe
                                        </button>
                                    </div>

                                </div>


                                <div className="second_end">



                                    <div className="LikeDislikeContainer">

                                        <button
                                            className={`like-button ${isLiked ? 'active' : ''}`}
                                            onClick={toggleLike}
                                        >
                                            <FaThumbsUp
                                                color={isLiked ? 'black' : 'white'}
                                                style={{ fontSize: '20px' }}
                                            /><span className="Likes_class">{`${abbreviateNumber(likes)}`}</span>
                                        </button>


                                        <button
                                            className={`dislike-button ${isDisliked ? 'active' : ''}`}
                                            onClick={toggleDislike}
                                        >
                                            <FaThumbsDown
                                                color={isDisliked ? 'black' : 'white'}
                                                style={{ fontSize: '20px' }}
                                            />
                                        </button>
                                    </div>

                                    <div className="Views_1">
                                        <span className="Viewspans_1">
                                            {`${abbreviateNumber(video?.stats?.views || 0)} views`}
                                        </span>
                                    </div>

                                    <div className="three-dots-container">
                                        <BsThreeDots className="three-dots-icon" />
                                    </div>

                                </div>

                            </div>
                            {/* .... */}




                        </div>
                    </div>

                    {/* Video Description */}
                    <div className="video_description">
                        <h3>Description</h3>
                        <p>{description}</p>
                    </div>

                    {/* Comments Section */}
                    <div className="comments_section">
                        <h3>Comments</h3>
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <div key={index} className="comment">
                                    <p><strong>{comment.author}</strong>: {comment.text}</p>
                                </div>
                            ))
                        ) : (
                            <p>No comments available</p>
                        )}
                    </div>
                </div>

                {/* Related Videos */}
                <div className="Inner_related_video">
                    {
                        related.map((item, index) => (
                            <Relatedvideo key={index} video={item?.video} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Playingvideo;
