import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  // const navigate = useNavigate();
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-zinc-700 dark:text-white flex flex-col">
          <figure className="w-full h-96">
            <img src={item.image} alt="Image" className="w-full h-full object-cover" />
          </figure>
          <div className="card-body flex flex-col justify-between p-4 h-1/2">
            <div>
              <h2 className="card-title text-lg">
                {item.name}
                <div className="badge badge-secondary ml-2">{item.category}</div>
              </h2>
              <p className="text-sm">{item.title}</p>
            </div>
            <div className="card-actions flex justify-between items-center mt-4">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
