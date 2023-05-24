import axios from "axios";
import { useState,useEffect } from "react";

const Books = () => {
  const [ebook, setEbook] = useState([])
  const bookInfo = () => {
    axios.get('/api/ebook/?format=json')
      .then(response => {
        // Handle succes
        const data = response.data
        setEbook(data)
      })
      .catch(error => {
        // Handle error
        console.log(error);
      });

  }
  useEffect(() => {
    bookInfo()
  }, [])

  return (
    <div>
      {ebook.map(book =>{
        return (
          <aside className="md:flex block items-center justify-between w-[90%] p-[1rem] m-auto  border-b-2 text-white" key={book.id}>
          <div>
            <p className="font-bold text-3xl">{book.ebook_title}</p>
            <span>{book.poster}</span>
          </div>
          <div>
              <button className="py-[0.4rem] px-[3rem] bg-[gold] rounded-lg">Download Ebook</button>
          </div>
        </aside>
        )
      })}
     
    </div>
  )
}

export default Books
