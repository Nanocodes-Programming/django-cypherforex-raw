// import Googlemaps from "../components/Googlemaps";
import Layout from "../components/Layout";
import about from "../assets/img/about_us1.png";
import Wrapper from "../components/Wrapper";

const About = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <div className="md:w-[40%] w-full text-left  h-full flex flex-col md:bg-transparent bg-black/30 backdrop-blur-sm justify-end md:p-[4rem] p-[2rem] items-start">
            <h1 className="text-4xl font-bold text-white">About us </h1>
            <p className="text-2xl text-white   my-4">
              Exclusive Mentorship Program Get the best One-on-One Private
              Training you could ever imagine both online and offline with
              CypherFx Expert Team.
            </p>
          </div>
        </Wrapper>
        <div className="flex md:p-[2rem] p-0 md:flex-row flex-col">
          <img src={about} alt="" />
          <div className="p-[1rem] text-white">
            <h2 className="font-bold text-4xl mb-[1rem]">About Us</h2>
            <p className="text-lg my-[2rem]">
              Cypher Forex is a community of advanced traders all over the world
              actively cyphering profitable pips from the largest financial
              market. Cypher Forex academy is pioneered by Mr. Justin (Cypherfx)
              who is an Award-Winning Forex Trader. Having gained over 7+ years
              of live experience in the Foex market, Cypher Forex Academy has
              been equipped with varieties of Technical, Fundamental and
              Sentimental professional traders who have gone way beyond in the
              field of Forex and has kept the academy growing and soaring in
              integrity, thus placing us above all in the system with rains of
              testimonies from our subscribers all over the world.
            </p>

            <button className="min-w-[200px] mx-auto my-[1rem] rounded-md text-white font-bold py-[0.5rem] bg-[#2ECBF1] hover:bg-[#2ECBF1] hover:text-[#030C4B]">
              join the academy
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
