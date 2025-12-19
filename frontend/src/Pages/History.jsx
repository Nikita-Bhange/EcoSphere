import React from "react";

function History() {
  const userEmail = localStorage.getItem("userEmail") || "user@example.com";
  const initial = userEmail[0].toUpperCase();

  // Dummy history data (replace with API/ML response)
  const historyData = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/80",
      imageName: "Plastic Bottle",
      category: "Recyclable",
      tips: "Rinse and place in plastic recycling bin."
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/80",
      imageName: "Banana Peel",
      category: "Organic",
      tips: "Dispose in compost or organic waste bin."
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/80",
      imageName: "Used Battery",
      category: "Non-Recyclable",
      tips: "Drop at authorized e-waste collection centers."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-16 py-8">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 bg-white p-4 rounded-lg shadow">
        <div className="w-14 h-14 rounded-full bg-green-700 text-white flex items-center justify-center text-xl font-bold">
          {initial}
        </div>
        <div>
          <p className="text-sm text-gray-500">Logged in as</p>
          <p className="text-lg font-semibold text-gray-800">{userEmail}</p>
        </div>
      </div>

      {/* History List */}
      <div className="bg-white rounded-lg shadow p-4 max-h-[70vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-green-700">
          Classification History
        </h2>

        {historyData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border-b py-4 last:border-b-0"
          >
            {/* Image */}
            <img
              src={item.imageUrl}
              alt={item.imageName}
              className="w-20 h-20 rounded-md object-cover"
            />

            {/* Image Name */}
            <div className="w-1/4 font-medium text-gray-800">
              {item.imageName}
            </div>

            {/* Category */}
            <div className="w-1/4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                {item.category}
              </span>
            </div>

            {/* Recycling Tips */}
            <div className="flex-1 text-gray-600 text-sm">
              {item.tips}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
