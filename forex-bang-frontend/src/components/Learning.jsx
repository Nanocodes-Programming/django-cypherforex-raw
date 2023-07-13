// import bg from '../assets/img/heroman.jpg'
import { Link } from "react-router-dom";

const Learning = () => {
  return (
    <div className='bg-[url("/src/assets/img/heroman.jpg")] min-h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-white'>
        <h2 className="font-bold text-4xl text-center md:text-white md:bg-transparent text-[#030c4b] bg-[#2ecbf1] ">Learn Forex Trading  From The Masters!</h2>
        <p className="text-lg text-center text-white p-[1rem]">Cypher Forex Academy expose you to the Forex market as a whole and transforms you into a Professional Forex Trader within a short time space</p>
        <p className="my-[2rem]">Join The Next Set of Money Genius</p>
        <button className="w-[40%]  md:block mx-auto my-[1rem] rounded-md text-white font-bold py-[0.5rem] bg-[#2ECBF1] hover:bg-[#2ECBF1] hover:text-[#030C4B] hover:scale-[1.1] "><Link to='/pay/:id'>Register for the next class now </Link></button>
    </div>
  )
}

export default Learning