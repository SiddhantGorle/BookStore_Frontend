/* import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OpenCard() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchItem = async () => {
          try {
                console.log("inside try...");
                console.log("id ", id);
                const response = await axios.get(`${BASE_URL}/book/${id}`);
                console.log("Response : ", response);
                setItem(response.data);
                setLoading(false);
          } catch (err) {
                setError(err);
                setLoading(false);
          }
        };
    
        fetchItem();
      }, [id]);  

      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error fetching data</div>;
      if (!item) return <div>Item not found</div>;

  return (
    <div className="container mx-auto mt-4">
      <div className="card w-full bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="text-2xl my-4">${item.price}</div>
          <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenCard;
 */