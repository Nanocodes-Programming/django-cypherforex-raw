import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import { BounceLoader } from "react-spinners";
import { useState, useEffect } from "react";

const Blogs = () => {
  const [blogsPosts, setBlogsPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const blogging = () => {
    setloading(true);
    axios
      .get("/api/blog/?format=json")
      .then((response) => {
        // Handle success

        const data = response.data;
        setBlogsPosts(data);
        setloading(false);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
        setloading(false);
      });
  };
  useEffect(() => {
    blogging();
  }, []);
  console.log(blogsPosts);
  return (
    <>
      <Layout>
        <Wrapper>
          {/* home wrapper */}
          <div className="md:w-[40%] w-full md:text-left text-center h-full flex flex-col md:justify-center justify-end p-[4rem] items-start">
            <p className="text-2xl text-white font-bold  mb-4">Blogs</p>
          </div>
        </Wrapper>

        {loading ? (
          <div className="flex items-center justify-center">
         <BounceLoader color="#36d7b7" size={100}/>
       </div>
        ) : (
          <section className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 p-[1rem] justify-center">
            {blogsPosts.map((post) => {
              return (
                <div
                  className="w-[320px] bg-white min-h-0-[400px] rounded-lg m-[1rem]"
                  key={post.id}
                >
                  <aside className="w-full h-[170px]">
                    <img
                      src={post.blog_image}
                      alt=""
                      className="w-full h-full object-cover card_content cursor-pointer hover:scale-[1.1]"
                    />
                  </aside>
                  <aside className="p-[1rem]">
                    <p className="text-center font-bold mb-[0.3rem]">
                      {post.blog_title}
                    </p>
                    <p className="mb-[1rem]">{post.blog_body}</p>
                    <button className="bg-[orange] text-white px-[3rem] py-[0.3rem] rounded-xl">
                      read more
                    </button>
                  </aside>
                </div>
              );
            })}
          </section>
        )}
      </Layout>
    </>
  );
};

export default Blogs;
