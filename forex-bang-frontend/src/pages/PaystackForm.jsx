import { useState } from "react";
import Layout from "../components/Layout";
import Wrapper from '../components/Wrapper'
import PaystackPop from '@paystack/inline-js'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PaystackForm() {
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastname, setLastname ] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key:'pk_test_aca09eec94602ae4353d32290f8d1a781383a221',
      amount:amount *100,
      email,
      
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

    
    // Use Paystack API to initiate payment with the amount and email provided
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
