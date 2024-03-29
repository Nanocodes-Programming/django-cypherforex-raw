import React from "react";
import { Link } from "react-router-dom";
import chart from "../assets/img/chart3-svgrepo-com 1.png";
import dollar from "../assets/img/dollar-and-bitcoin-exchange-svgrepo-com 1.png";
import group from "../assets/img/Group 121.png";

const service_data = [
  {
    title: "Forex Mentorship Program",
    descrition:
      "Transformed from a novice trader to a Full-time/Part-time Professional Forex Trader/Financial Analyst.",
    image: chart,
    link:'/mentorship'
  },
  {
    title: "Forex Trade Signals",
    descrition:
      "Earn on the go with CypherFx by copying our daily basis signals direct to your trading account.",
    image: dollar,
    link:'/signal'
  },
  {
    title: "Exchange With CypherForex Academy",
    descrition:
      "Sell Bitcoins, Usdt and E-Wallet Funds (Perfect Money,  Skrill, Neteller,  Payoneer Funds) with CypherFx at good rates",
    image: group,
    link:'/exchange'
  },
];

const handleLinkClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  console.log('ups')
};

const Services = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap w-[80%] m-auto gap-4">
        {service_data.map((service) => {
          return (
            <div
              className="min-h-[400px] w-[300px] text-center text-white rounded-[10px] bg-gradient-to-r-yellow-blue-white
          my-[1rem] mx-[0.5rem] border-2 p-[1rem] flex flex-col justify-between bg-white/30 backdrop-blur-sm hover:scale-[1.1] cursor-pointer hover:border-[#030C4B] hover:border-4 card_content"
            >
              <div>
                <img src={service.image} alt="" className="m-auto w-[30%]" />
              </div>
              <p className="text-2xl my-[0.5rem]">{service.title}</p>

              <p className="my-[1rem]"> {service.descrition}</p>

             <Link to={service.link} onClick={handleLinkClick}>
             <button className="w-[70%] mx-auto my-[1rem] rounded-md text-white font-bold py-[0.5rem] bg-[#030C4B] hover:bg-[#2ECBF1] hover:text-[#030C4B]">
                learn more
              </button>
             </Link>
            </div>
          );
        })}
      </div>

      <div className="md:w-[80%] w-full m-auto my-4 md:border-2 border-none rounded-[14px] p-[2rem] min-h-[250px] flex flex-col justify-around bg-transparent text-white md:bg-[#2ecbf180]">
        <h2 className="text-center font-bold md:text-3xl text-2xl mb-[1rem]">Recommended Broker</h2>
        <p>
          Recommended Broker Create your living trading account with our
          recommended brokerage firm. I recommmend brokers based on my personal
          experience with the broker.So far,below is the broker I use and which
          I recommend to all my mentorship students
        </p>
        <a href="https://one.exness-track.com/a/r23hilbd65" target='_blank'>
          {" "}
          <button className="w-[70%] block m-auto my-[1rem] rounded-md text-white font-bold py-[0.5rem] md:bg-[#030C4B] bg-[#2ECBF1] hover:bg-[#2ECBF1] hover:text-[#030C4B]">
            sign up
          </button>
        </a>
      </div>
    </>
  );
};

export default Services;
