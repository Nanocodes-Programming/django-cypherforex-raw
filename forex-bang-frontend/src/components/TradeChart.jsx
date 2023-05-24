import React from "react";
import chart from "../assets/img/forexsignals.png";
import ScrollCounter from "./ScrollCounter";

const TradeChart = () => {
  return (
    <div className="relative">
      <div className="md:flex block justify-between gap-2 py-[1.5rem] w-[80%] m-auto items-center text-white ">
        <aside className="basis-[49%]">
          <p className="my-4 text-2xl">
            Lorem ipsum dolor sit amet consectetur. Eget pharetra in tortor
            maecenas erat. Mus lobortis sit amet semper tellus euismod dolor
            pulvinar. Laoreet suspendisse venenatis amet quis eget pulvinar nam.
            Non vel mi sodales adipiscin
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
