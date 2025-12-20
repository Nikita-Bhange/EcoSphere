import React from "react";
import Navbar from "../Components/Navbar";
import metalcans from "../assets/metalcans.jpg"
import plastic from "../assets/plastic.jpg"
import cardboard from "../assets/cardboards.jpg"
function History() {
  const userEmail = localStorage.getItem("userEmail") || "user@example.com";
  const initial = userEmail[0].toUpperCase();

  // Dummy history data (replace with API/ML response)
  const historyData = [
    {
      id: 1,
      imageUrl: plastic,
      imageName: "Plastic-Bottle",
      category: "Recyclable",
      tips: "Rinse and place in plastic recycling bin."
    },
    {
      id: 2,
      imageUrl: cardboard,
      imageName: "cardboard",
      category: "Bio-degradable",
      tips: "Dispose in compost or organic waste bin."
    },
    {
      id: 3,
      imageUrl: metalcans,
      imageName: "metalcans",
      category: "Recyclable",
      tips: "Resell to store, can reuse it"
    }
  ];

  return (
    <>
     <Navbar/>
    <div className="max-h-screen  px-16 py-8">
     
    
      {/* History List */}
      <div className="bg-white rounded-lg shadow p-4 max-h-[70vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          Classification History
        </h2>

        {historyData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b py-2 last:border-b-0"
          >
            {/* Image */}
            <img
              src={item.imageUrl}
              alt={item.imageName}
              className="w-40 h-30 rounded-md object-cover"
            />

            {/* Image Name */}
            <div className="w-1/4 font-medium text-xl text-gray-800">
              {item.imageName}
            </div>

            {/* Category */}
            <div className="w-1/4">
              <span className="px-3 py-1 rounded-full text-lg font-semibold bg-green-100 text-green-700">
                {item.category}
              </span>
            </div>

            {/* Recycling Tips */}
            <div className="flex-1 text-gray-600 ">
              {item.tips}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default History;
