import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  //const navigate = useNavigate();
  return (
    <>
      <div className="mt-4 my-3 p-3" /* onClick={() => navigate(`/cards/${item.id}`)} */>
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-zinc-700 dark:text-white flex flex-col">
          <figure>
            <img src={item.image} alt="Image" />
          </figure>
          <div className="card-body max-h-full">
            <h2 className="card-title h-1 contents">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
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
