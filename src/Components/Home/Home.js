import React from "react";
import './Home.css';
import Sidebar from '../Sidebar/Sidebar';
import Video from "../Video/Video";
import { useAuth } from "../../Context/AuthProvider";
import Menudis from "../Menudis/Menudis";
import Dpshow from "../Dpshow/Dpshow";


function Home() {
  const { data } = useAuth();

  return (
    <>
      <div className="main_classes">
      
        <Sidebar />
        <div className="Main_video">
          <Menudis className='Menu_bar' />
          <div className="video_styling">
            {data.map((item) => (
              <Video key={item.id} video={item?.video} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
