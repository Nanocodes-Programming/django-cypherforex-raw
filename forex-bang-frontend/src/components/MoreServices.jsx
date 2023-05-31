import React from 'react';
import teaching from "../assets/img/teaching.jpg";
import graduate from "../assets/img/graduate.jpg";
import mentor from "../assets/img/mentor.jpg";
import ideas from "../assets/img/ideas.jpg";
import trading from "../assets/img/trading.png";
import vip from "../assets/img/vip.png";
const MoreServices = () => {
  const services = [
    {
      title: "  Forex Fundamental & Technical  Course",
      text: "Improvise yours trading skills with Cypher's beginner, Intermediate and advanced courses and videos. Be among the next gen of Cypher Fx Millionaire team by just sinking what we teach and putting it into practice consistently because our mentorship is as effective and practically based.",
      img: graduate,
    },
    {
      title: "Weekly Zoom Sessions",
     text:"We meet on live zoom sessions every week to study the market for the week and as well give you some heads up on what to expect from the market for the week and equally study our previous trade actions for the past week. Hows and whys are studies, thus growing your knowledge in the Forex market.",
     img: teaching,
    },
    {
      title: " Signals & Trading Ideas ",
      text: "Cypher Forex adopts the earn as you learn strategy. Cypher and his expert team never take their eyes off the market. We are actively monitoring the Fundamental and Technical aspects of the market and will always send our signals out to our Mentorship students in a matter of few seconds to ensure you milk the market constantly with us. Cypher your pips from both our Scalping and Swing Analysis as we are equipped with professional short term and swing Traders.",
      img: ideas,
    },
    {
      title: "Mentorship",
      text: "VIP members can schedule a 1-1 mentorship with any of our mentors through the built-in scheduling app. They can ask any questions and sometimes even trade live with the mentor; this is quickest way to become a successful trader.",
      img: mentor,
    },
  
    {
      title: "V.I.P Support ",
      text: "We are willing to give you the V.I.P assistant in our Trading Floor in Nig and equally fund successful traders from our Mentorship students who are doing well. Experience outstanding services and rewards from us both as a Mentorship and Funded trader.",
      img: vip,
    },
  ];
  return (
    <div className="p-[2rem]">
      <h2 className="font-bold text-4xl text-white text-center mb-[2rem]">
        Our Services
      </h2>
      <section className="flex justify-between items-center gap-[2%] flex-wrap">
        {services.map((service) => {
          return (
            <div className="w-[350px] p-[1rem] text-center min-h-[450px]  bg-white rounded-md mb-[1rem] ">
              <img
                src={service.img}
                alt=""
                className="rounded-full w-[100px] h-[100px] m-auto border-4 border-[#030C4B]"
              />
              <h2 className="text-2xl font-bold my-[1rem]">{service.title}</h2>
              <p className="mt-[2rem]">{service.text}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MoreServices;
