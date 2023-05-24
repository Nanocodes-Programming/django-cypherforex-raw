import {useState, useEffect} from 'react';
import { SwiperSlide } from "swiper/react";
import Swiperjs from "./Swiperjs";
import { BsFillStarFill } from "react-icons/bs";
import profile from "../assets/img/profile.jpg";
import axios from "axios";
// Import Swiper styles


const Testimonial = () => {
  const [testimony, setTestimony] = useState([])
  const blogging = () => {
    axios.get('/api/testimony/?format=json')
      .then(response => {
        // Handle success

        const data = response.data
        setTestimony(data)
      })
      .catch(error => {
        // Handle error
        console.log(error);
      });

  }
  useEffect(() => {
    blogging()
  }, [])
  return (
    <Swiperjs>
      {testimony.map((testify) => {
        return (
          <SwiperSlide key={testify.id}>
            <div className="w-[300px] min-h-[300px] border-2 p-[1rem] text-white rounded-lg">
              <div className="text-center mb-4 flex flex-col items-center justify-center">
                <img
                  src={testify.testimony_image}
                  alt=""
                  className="w-[90px] h-[90px] object-cover rounded-full m-auto "
                />
                <span className="flex items-center mt-2 ">
                  <BsFillStarFill className="text-[yellow]" />
                  <BsFillStarFill className="text-[yellow]" />
                  <BsFillStarFill className="text-[yellow]" />
                  <BsFillStarFill className="text-[yellow]" />
                  <BsFillStarFill className="text-[yellow]" />
                </span>
              </div>
              <p>{testify.testimony_body}</p>
              <p className="text-right font-bold">~ {testify.name}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiperjs>
  );
};

export default Testimonial;
