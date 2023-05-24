import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import dollar from "../assets/img/dollar-and-bitcoin-exchange-svgrepo-com 1.png";
import Card from "../components/Card";

const Exchanges = () => {
  return (
    <Layout>
      <Wrapper>
        {/* home wrapper */}
        <div className="md:w-[40%] w-full md:text-right text-center h-full md:bg-transparent bg-black/30 backdrop-blur-sm flex flex-col justify-end p-[4rem] items-start">
          <img src={dollar} alt="" className="mx-auto"/>
          <h1 className="text-4xl font-bold text-white">
            Exchange With CypherForex Academy
          </h1>
        </div>
        {/* home wrapper */}
        {/* services starts here */}
      </Wrapper>
      <div className=" bg-[url('/src/assets/img/forexbg.png')] pb-[5rem]  bg-cover bg-center">
        <Card
          price="100"
          lists={[
            "Sell Bitcoins, Usdt and E-Wallet Funds (Perfect Money,  Skrill, Neteller,  Payoneer Funds) with CypherFx at good rates",

            "» Good Rate",
            "» Fast and Secured",
            "» Minimum Trade Amount ✅",
          ]}
        />
      </div>
    </Layout>
  );
};

export default Exchanges;
