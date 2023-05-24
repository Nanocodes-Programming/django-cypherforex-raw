import { Link } from "react-router-dom";

const UseLInks = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold md:text-right text-left">Usefull Links</h1>
      <p className="my-[0.5rem]"> <Link to='/mentorship'>Forex Mentorship</Link> </p>
      <p className="my-[0.5rem]"> <Link to='/resource'>Resources</Link> </p>
      <p className="my-[0.5rem]"> <Link to='/blog'>Blogs</Link> </p>
    

      <p className="my-[0.5rem]"> <Link to='/signal'>Forex Trading Signals</Link> </p>
      <p className="my-[0.5rem]"> <Link to='/exchange'>Crypto Exchange</Link> </p>
  
    </div>
  );
};

export default UseLInks;
