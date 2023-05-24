import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const ScrollCounter = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setViewPortEntered(true)}
      onExit={() => setViewPortEntered(false)}
    >
      <div className="flex md:flex-row flex-col justify-between w-[80%] m-auto md:my-auto my-[1rem] text-center text-white z-10 relative">
        <aside className="border-[2px] p-[1rem]">
          <h1 className="text-5xl mb-3 font-bold ">
            {viewPortEntered && <CountUp end={1} duration={2} />}K+
          </h1>
          <p>Testimony</p>
        </aside>
        <aside className="border-[2px] p-[1rem] md:m-0 my-[0.5rem]">
          <h1 className="text-5xl mb-3 font-bold">
            {viewPortEntered && <CountUp end={98} duration={2} />}%
          </h1>
          <p>Success Rate</p>
        </aside>
        <aside className="border-[2px] p-[1rem] md:m-0 my-[0.5rem]">
          <h1 className="text-5xl mb-3 font-bold">
            {viewPortEntered && <CountUp end={10} duration={2} />}K+
          </h1>
          <p>Subscribers</p>
        </aside>
        <aside className="border-[2px] p-[1rem]">
          <h1 className="text-5xl mb-3 font-bold">
         {viewPortEntered && <CountUp end={5} duration={2} />}+
          </h1>
          <p>Signals daily</p>
        </aside>
      </div>
    </ScrollTrigger>
  );
};

export default ScrollCounter;
