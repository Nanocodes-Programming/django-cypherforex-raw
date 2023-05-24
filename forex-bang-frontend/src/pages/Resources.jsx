
import React from 'react';
// import Ebooks from "../components/Ebooks";
import Books from "../components/Books";
import Layout from "../components/Layout";
import Videos from "../components/Videos";
import Webinar from "../components/Webinar";
import Wrapper from "../components/Wrapper";

const Resources = () => {
  return (
    <>
      <Layout>
        <Wrapper>
        <div className="md:w-[40%] w-full text-left  h-full flex flex-col md:bg-transparent bg-black/30 backdrop-blur-sm justify-end md:p-[4rem] p-[2rem] items-start">
         <h1 className="text-4xl font-bold text-white">Resources </h1>
            <p className="text-2xl text-white   my-4">
            various types of materials, tools, and inputs that are required to
              carry out a particular task, project or activity.
            </p>
        </div>
          {/* home wrapper */}
          
        </Wrapper>
        <Webinar />
        <Videos />
        <Books />
        {/* <Ebooks /> */}
      </Layout>
    </>
  );
};

export default Resources;
