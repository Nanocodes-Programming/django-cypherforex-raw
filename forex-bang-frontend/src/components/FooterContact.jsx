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
            <li className="flex justify-around my-[1rem] "><BsFacebook className="text-2xl cursor-pointer" /> <a href="https://twitter.com/Cypher_Forex?t=llPliIDiN1gLF-ovBJYckw&s=09"><BsTwitter className="text-2xl cursor-pointer" /></a> <a href="https://instagram.com/cyber_forex_fx?igshid=MzNlNGNkZWQ4Mg=="><BsInstagram className="text-2xl cursor-pointer" /></a>  <a href="https://t.me/CypherforexAcademy"><BsTelegram className="text-2xl cursor-pointer" /></a> <a href="https://youtube.com/@CypherForexAcademy"><BsYoutube className="text-2xl cursor-pointer" /></a> </li>
          </ul>
        )
      })}
    </div>
  )
}

export default FooterContact
