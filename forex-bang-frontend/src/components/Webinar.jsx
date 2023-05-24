import pexel1 from "../assets/img/pexels-godisable-jacob-1027162.jpg";
import Swiperjs from "./Swiperjs";
import { SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import axios from "axios";

const Webinar = () => {
  const [seminars, setSeminars] = useState([])
  const blogging = () => {
    axios.get('/api/seminar/?format=json')
      .then(response => {
        // Handle success

        const data = response.data
        setSeminars(data)
      })
      .catch(error => {
        // Handle error
        console.log(error);
      });

  }
  useEffect(() => {
    blogging()
  }, [])
  console.log(seminars)
  return (
    <>
    <Swiperjs>
    <p className="text-center font-bold text-white text-4xl p-[2rem]">Webinars</p>
      {/* <section className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 p-[1rem] justify-center "> */}
     
      {seminars.map(seminar=>{
        return (
          <SwiperSlide key={seminar.id}>
          <div className="w-[320px] bg-white min-h-0-[400px] rounded-lg m-[1rem] p-[1rem]">
            <aside className="w-full h-[170px] ">
              <img
                src={seminar.seminar_image}
                alt=""
                className="w-full h-full object-cover rounded-lg card_content cursor-pointer hover:scale-[1.1]"
              />
            </aside>
            <aside className="p-[1rem]">
              <p className="text-center font-bold mb-[0.3rem]">{seminar.seminar_title} </p>
              <p className="mb-[1rem]"></p>
            </aside>
          </div>
        {/* </section> */}
        </SwiperSlide>
        )
      })}
      </Swiperjs>
    </>
  );
};

export default Webinar;
