

import React ,{ useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import HistoryCard from "../Components/HistoryCard";
export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/auth/history")
      .then(res => setHistory(res.data))
      .catch(err => console.error(err));
    
  }, []);

//     .then((res) => {
//       console.log("History API response:", res.data); // 👈 LOG HERE
//       setHistory(res.data);
//     })



  return (
    <>
    <Navbar/>
    <p className="text-3xl font-bold text-black px-12 py-5  ">HISTORY</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {history.map(item => (
        <HistoryCard
          key={item._id}
          title={item.waste_type}
          recyclable={item.recyclable}
          certainty={item.confidence}
          tip={[item.tips[0],item.tips[1]]}
         imageUrl={`http://localhost:8000/static/images/${item.image_url}`}
          labelLeft={item.type}
          labelRight={item.ecoscore}
        />
      ))}
    </div>
    </>
  );
}
