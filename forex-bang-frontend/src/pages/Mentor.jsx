import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import chart from "../assets/img/chart3-svgrepo-com 1.png";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { BounceLoader } from "react-spinners";

const Mentor = () => {
  const [mentored, setMentored] = useState([]);
  const [loading, setLoading] = useState(false);

  function bookInfo() {
    setLoading(true); // Start loading
    axios
      .get("/api/mentorshipprogram/?format=json")
      .then((response) => {
        const data = response.data.data;
        setMentored(data);
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Stop loading in case of error
      });
  }

  useEffect(() => {
    bookInfo();
  }, []);

  // console.log(mentored)
  return (
    <Layout>
      <Wrapper>
        {/* home wrapper */}
        <div className="md:w-[40%] w-full text-left  h-full flex flex-col justify-end md:p-[4rem] md:bg-transparent bg-black/30 backdrop-blur-sm p-[2rem] items-start">
          <img src={chart} alt="" />
          <h1 className="text-4xl font-bold text-white">Mentorship Program</h1>
          <p className="text-2xl text-white   my-4">
            Exclusive Mentorship Program Get the best One-on-One Private
            Training you could ever imagine both online and offline with
            CypherFx Expert Team.
          </p>
        </div>
        {/* home wrapper */}
        {/* services starts here */}
      </Wrapper>
      {loading ? (
       <div className="flex items-center justify-center">
         <BounceLoader color="#36d7b7" size={100}/>
       </div>
      ) : (
        <div className=" bg-[url('/src/assets/img/forexbg.png')] pb-[5rem]  bg-cover bg-center">
          {mentored?.map((menty) => {
            return (
              <Card
                key={menty.id}
                price={menty.price}
                title={menty.packagename}
                lists={menty.features}
              />
            );
          })}
        </div>
      )}
    </Layout>
  );
};

export default Mentor;
