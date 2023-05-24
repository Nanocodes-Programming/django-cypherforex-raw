import React from "react";

const FooterForm = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-2">Newsletter</h1>
      <form action="#">
       <p>submit your email to get the latest updates on <br /> forex and other related <br /> subjects.</p>
        <input
          type="email"
          className=" rounded-[10px] my-4 p-2 w-full block bg-[#fff] text-black outline-none"
          placeholder=" Enter your Email"
        />
        <button className="bg-[#2ECBF1] hover:bg-[#2ECBF1] hover:text-[#030C4B] px-[2rem] py-[0.5rem] rounded-lg"> send </button>
      </form>
    </div>
  );
};

export default FooterForm;
