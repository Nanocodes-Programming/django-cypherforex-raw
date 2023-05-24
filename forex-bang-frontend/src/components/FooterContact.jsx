import { BiEnvelope, BiPhoneCall, BiLocationPlus } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";





const FooterContact = ({footer}) => {
 
  
  return (
    <div>
      <h1 className="my-[1rem] font-bold text-3xl">Contact Us</h1>
      {footer.map(foot => {
        return (
          <ul key={foot.id}>

            <li className="flex  items-center my-3">
              {" "}
              <span className="mx-2">
                <BiEnvelope />
              </span>{" "}
              {foot.website_email}
            </li>
            <li className="flex items-center my-3">
              <span className="mx-2">
                <BiPhoneCall />
              </span>
             {foot.phone}
            </li>
            <li className="flex items-center my-3">
              <span className="mx-2">
                <BiLocationPlus />
              </span>
            {foot.address}
            </li>
            <li className="flex justify-around my-[1rem] "><BsFacebook className="text-2xl cursor-pointer" />  <BsTwitter className="text-2xl cursor-pointer" /> <BsInstagram className="text-2xl cursor-pointer" /> <BsTelegram className="text-2xl cursor-pointer" /> <BsYoutube className="text-2xl cursor-pointer" /></li>
          </ul>
        )
      })}
    </div>
  )
}

export default FooterContact
