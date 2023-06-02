import React from "react";
import { Link } from "react-router-dom";

const Card = ({ lists, title, price,type }) => {
  const currentPath = window.location.pathname;

  const oneof = "[One-Off]";
  return (
    <div className="flex md:flex-row flex-col-reverse text-left  items-center justify-between md:w-[70%] w-[90%] m-auto p-[2rem] text-white bg-white/30 backdrop-blur-sm hover:scale-[1.1] cursor-pointer hover:border-[#030C4B] hover:border-4 card_content rounded-[12px] mb-[2rem]">
      <ul className="text-[20px]">
        {lists?.map((listed) => {
          return <li key={listed} className="text-[16px]">{listed}</li>;
        })}
         <Link to={`/pay/${price}`}>
        <button className="w-full md:hidden m-4 block mx-auto my-[1rem] rounded-md text-white font-bold py-[0.5rem] bg-[#2ECBF1] hover:bg-[#2ECBF1] hover:text-[#030C4B]">
        {currentPath === '/exchange'?'Exchange':'Subscribe'} 
        </button>
        </Link>
      </ul>

      <div className="basis-[40%] text-center">
        <p className="md:font-normal font-bold md:text-[18px] text-2xl">{title}</p>
        <h2 className="font-bold text-4xl my-[0.5rem] ">
          ${price}. <span className="text-xl">00</span><span className="mb-[0.5rem] text-xl font-normal"> {type?type:oneof}</span>
        </h2>
        
        <Link to={`/pay/${price}`}>
        <button className="w-full hidden md:block mx-auto my-[1rem] rounded-md text-white font-bold py-[0.5rem] bg-[#2ECBF1] hover:bg-[#2ECBF1] hover:text-[#030C4B]">
         {currentPath === '/exchange'?'Exchange':'Subscribe'} 
        </button>
        </Link>
      </div>
    </div>
  );
};
export default Card;
