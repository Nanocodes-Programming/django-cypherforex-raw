import React from "react";
import Download from "./Download";
import Footer from "./Footer";
import Nav from "./Nav";
import { useState ,useEffect} from "react";
import axios from "axios";

const Layout = ({ children }) => {
  const [footer, setFooter] = useState([])
  const footerInfo = () => {
    axios.get('/api/website/?format=json')
      .then(response => {
        // Handle success

        const data = response.data
        
        setFooter(data)
      })
      .catch(error => {
        // Handle error
        console.log(error);
      });

  }
  useEffect(() => {
    footerInfo()
  }, [])
  return (
    <>
      <section className=" bg-[#030C4B]">
        <Nav footer={footer} />
        {children}
        <Download />
        <Footer footer={footer}/>
      </section>
    </>
  );
};

export default Layout;
