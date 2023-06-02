import { Link } from "react-router-dom";

const UseLInks = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    console.log('ups')
  };
  return (
    <div>
      <h1 className="text-3xl font-bold md:text-right text-left">Usefull Links</h1>
      <p className="my-[0.5rem]"> <Link to='/mentorship' onClick={handleLinkClick}>Forex Mentorship</Link> </p>
      <p className="my-[0.5rem]"> <Link to='/resource' onClick={handleLinkClick}>Resources</Link> </p>
      <p className="my-[0.5rem]"> <Link to='/blog' onClick={handleLinkClick}>Blogs</Link> </p>
    

      <p className="my-[0.5rem]"> <Link to='/signal' onClick={handleLinkClick}>Forex Trading Signals</Link> </p>
      <p className="my-[0.5rem]"> <Link to='/exchange' onClick={handleLinkClick}>Crypto Exchange</Link> </p>
  
    </div>
  );
};

export default UseLInks;
