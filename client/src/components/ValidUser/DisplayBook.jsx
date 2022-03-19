import React from "react";
import { useSelector } from "react-redux";
const DisplayBook = (prop) => {
  const { book } = prop;
  const isLogged = useSelector(state => state.isLogged)
  return (
    <>
    {isLogged
    ?
      <div className="display-book">
        {book.map((item, index) => {
          return (
            <div className="book-card" key={index}>
              {
                <div>
                  <h6>{item.title}</h6>
                  <img src={item.image} alt={item.title} />
                  <h3>Rs{" " + item.price}</h3>
                  <p>{item.author}</p>
                </div>
              }
            </div>
          );
        })}
      </div>
      :'hello'
    }
    </>
  );
};

export default DisplayBook;
