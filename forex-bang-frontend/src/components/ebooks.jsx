import React from "react";
import axios from "axios";

const Ebooks = () => {
  return (
    <div>
      <aside className="md:flex block items-center justify-between w-[90%] p-[1rem] m-auto  border-b-2 text-white">
        <div>
          <p className="font-bold text-3xl">basic transformation theory</p>
          <span>nanotech.com</span>
        </div>
        <div>
            <button className="py-[0.4rem] px-[3rem] bg-[gold] rounded-lg">Download Ebook</button>
        </div>
      </aside>
    </div>
  );
};

export default Ebooks;
