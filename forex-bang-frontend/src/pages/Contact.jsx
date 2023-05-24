
import React from 'react';
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Googlemaps from "../components/Googlemaps";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";

const Contact = () => {
  const [showContant, setShowContant] = useState(0);
  const showContact = () => {
    setShowContant(!showContant);
  };
  return (
    <>
      <Layout>
        <Wrapper>
        <div className="md:w-[40%] w-full text-left  h-full flex flex-col justify-end md:p-[4rem] md:bg-transparent bg-black/30 backdrop-blur-sm p-[2rem] items-start">
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
            <p className="text-2xl text-[#fff]  mb-4">
              Thank you for visiting our website. If you have any questions or
              comments, please don't hesitate to contact us. Our customer
              service team is available to assist you.
            </p>
        </div>
         
        </Wrapper>
        <div className="w-[95%] m-auto items-center p-[1rem]">
          <Googlemaps />
          <button
            onClick={showContact}
            className="w-[200px] mx-auto my-[1rem] rounded-md text-white font-bold py-[0.5rem] bg-[#2ECBF1] hover:bg-[#2ECBF1] hover:text-[#030C4B]"
          >
            contact us
          </button>

          {showContant ? <ContactForm /> : ""}
        </div>
      </Layout>
    </>
  );
};

export default Contact;
