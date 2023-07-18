import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Wrapper from '../components/Wrapper'
import { useParams } from "react-router-dom";
import PaystackPop from '@paystack/inline-js'
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PaystackForm() {
  const {id} = useParams()
  // console.log(id);
  const [amount, setAmount] = useState(id);
  const [email, setEmail] = useState("");
  // const [ipInfo, setIpInfo] = useState({});

  // useEffect(() => {
  //   const getIpInfo = async () => {
  //     try {
  //       const responseIp = await axios.get('https://api.ipgeolocation.io/ipgeo/?apiKey=fbd8438054b94e6a89d2c06b071f4165');
  //       const responseInfo = responseIp.data.currency.code;
  //       setIpInfo(responseInfo);
  //     } catch (error) {
  //       console.error("Error: ", error);
  //     }
  //   }
  
  //   getIpInfo();
  // }, [ipInfo]);

  // console.log(ipInfo)
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  


const handleSubmit = async (e) => {
if(email === ''){
  return
}
  e.preventDefault();


  // const currency = ipInfo; 
  const currency = 'NGN'; 
  let factor;
  if (currency === 'NGN') {
    factor = 100 * 700; // Convert Naira to Kobo
  } else {
    factor = 100; // Convert USD to cents to  to USD
  }

  
  const paystack = new PaystackPop()
  paystack.newTransaction({
    key: 'pk_live_268e1d4fb258db71ad85f8e00a757b2e085a96b2',
    amount: amount * factor,
    email,
    currency,

    onSuccess(transaction){
      let message = `payment complete! Reference ${transaction.reference}`
      setAmount('')
      setEmail('')
      toast.success(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    onCancel(){
      toast.error("🦄 Transaction Cancelled!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  })
};


  return (
    <Layout>
      <Wrapper>
      <div className="pt-[5rem] px-[3rem]">
      <h2 className="pt-[4rem] text-center font-bold text-white text-4xl uppercase">Payment</h2>
     <form  className="max-w-md mx-auto ">
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block mb-2 font-bold text-white"
          >
            Amount
          </label>
          <input
            id="amount"
            type="number"
            min="0"
            step="0.01"
            required
            disabled
            value={amount}
            onChange={handleAmountChange}
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-bold text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={handleEmailChange}
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Pay with Paystack
        </button>
      </form>
     </div>
      </Wrapper>
    
    </Layout>
  );
}

export default PaystackForm;
