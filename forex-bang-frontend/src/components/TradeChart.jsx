import React from "react";
import chart from "../assets/img/forexsignals.png";
import ScrollCounter from "./ScrollCounter";

const TradeChart = () => {
  return (
    <div className="relative">
      <div className="md:flex block justify-between gap-2 py-[1.5rem] w-[80%] m-auto items-center text-white ">
        <aside className="basis-[49%]">
          <h2 className="text-center md:text-3xl text-2xl font-bold">Join CypherFx community</h2>
          <p className="my-4 md:text-2xl text-[18px]">
            

            We have a Telegram Community where we take care of Technicals and Fundamentals of Forex 
            market daily and equally paste our free Trade Signals on a daily basis
          </p>
          <a href="https://t.me/CypherforexAcademy" target='_blank'>
          {" "}
          <button className="w-[70%] block m-auto my-[1rem] rounded-md text-white font-bold py-[0.5rem] md:bg-[#030C4B] bg-[#2ECBF1] hover:bg-[#2ECBF1] hover:text-[#030C4B]">
           Join community
          </button>
          </a>
        </aside>
        <aside>
          <img src={chart} alt="" className="w-[60%] m-auto md:static absolute bottom-1 right-1" />
        </aside>
      </div>

      <ScrollCounter />
    </div>
  );
};

export default TradeChart;
