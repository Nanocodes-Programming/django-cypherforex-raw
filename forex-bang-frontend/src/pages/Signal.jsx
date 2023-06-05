import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import signal from "../assets/img/Group 121.png";
import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";

const Signal = () => {
  const [signals, setSignals] = useState([]);
  const [loading, setLoading] = useState(false);

  function bookInfo() {
    setLoading(true);
    axios
      .get("/api/signals/?format=json")
      .then((response) => {
        // Handle success
        // console.log(response)
        const data = response.data;
        console.log(data);
        setSignals(data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
        setLoading(false);
      });
  }
  useEffect(() => {
    bookInfo();
  }, []);
  return (
    <Layout>
      <Wrapper>
        {/* home wrapper */}
        <div className="md:w-[40%] w-full text-left  h-full flex flex-col justify-end md:p-[4rem] md:bg-transparent bg-black/30 backdrop-blur-sm p-[2rem] items-start">
          <img src={signal} alt="" />
          <h1 className="text-4xl font-bold text-white">Forex Trade Signals</h1>
          <p className="text-2xl text-white   my-4">
            Earn on the go with CypherFx by copying our daily bases signals
            direct to your trading account
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
        <div className="min-h-[400px] bg-[url('/src/assets/img/forexbg.png')]   bg-cover bg-center">
          {signals?.map((menty) => {
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

export default Signal;
