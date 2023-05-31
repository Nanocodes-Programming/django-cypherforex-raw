import React from "react";
import chart from "../assets/img/forexsignals.png";
import ScrollCounter from "./ScrollCounter";

const TradeChart = () => {
  return (
    <div className="relative">
      <div className="md:flex block justify-between gap-2 py-[1.5rem] w-[80%] m-auto items-center text-white ">
        <aside className="basis-[49%]">
          <p className="my-4 text-2xl">
            Join CypherFx community

            We have a Telegram Community where we take care of Technicals and Fundamentals of Forex 
            market daily and equally paste our free Trade Signals on a daily basis
          </p>
          <input
            type="text"
            className="w-full p-[0.5em] rounded-lg border-2 block "
          />
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
