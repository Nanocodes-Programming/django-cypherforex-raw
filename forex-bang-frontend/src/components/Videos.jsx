import first from "../assets/img/03.React Formik Tutorial - 3 - useFormik Hook.mp4";
import pexel1 from "../assets/img/pexels-godisable-jacob-1027162.jpg";
import Swiperjs from "./Swiperjs";
import { SwiperSlide } from "swiper/react";
import axios from "axios";
import { useState, useEffect } from "react";

const Videos = () => {
  const [videos, setVideos] = useState([])
  const blogging = () => {
    axios.get('/api/videos/?format=json')
      .then(response => {
        // Handle success

        const data = response.data
        setVideos(data)
      })
      .catch(error => {
        // Handle error
        console.log(error);
      });

  }
  useEffect(() => {
    blogging()
  }, [])
  console.log(videos)
  return (
    <>
      <p className="text-center font-bold text-white text-4xl p-[2rem]">
        Videos
      </p>

      {/* <section className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 p-[1rem] justify-center "> */}
      <Swiperjs>
     {videos.map(vid=>{
      return (
        <SwiperSlide key={vid.id}>
        <div className="w-[320px] bg-white min-h-0-[400px] rounded-lg m-[1rem] p-[1rem]">
          <aside className="w-full h-[170px] ">
            <video
              src={vid.video}
              controls
              className=' className="w-full h-full object-cover rounded-lg card_content cursor-pointer hover:scale-[1.1]"'
            ></video>
          </aside>
          <aside className="p-[1rem] flex justify-between">
            <img
              src={vid.video_poster_image}
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <div>
              <p className="font-bold mb-[0.3rem]">{vid.video_title} </p>
              <p className="mb-[1rem]"> {vid.created_at}</p>
            </div>
          </aside>
        </div>
      </SwiperSlide>
      )
     })}
        
      </Swiperjs>
      {/* </section> */}
    </>
  );
};

export default Videos;
