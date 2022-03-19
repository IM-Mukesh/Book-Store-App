import React, { useEffect, useState } from "react";
import DisplayBook from "./DisplayBook";

const GetBooks = () => {
  const [book, setBook] = useState([]);
  const [isLoading, setisloading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      // You can await here
      let data = await fetch("http://localhost:5000/book/getbooks");
      data = await data.json();
      // console.log(data);
      setBook(data);
      setisloading(false);
      // console.log("loading over");
    }
    fetchData();
  }, []);

  return (
    <div className="book-container">
      {!isLoading && <DisplayBook book={book}></DisplayBook>}
    </div>
  );
};

export default GetBooks;
















// useEffect(async () => {
//   var data = await fetch("http://localhost:5000/book/getbooks");
//   data = await data.json();
//   console.log(data);
//   setBook(data);
//   setisloading(false);
// }, []);