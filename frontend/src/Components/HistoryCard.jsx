// src/components/HistoryCard.jsx
import React from "react";

export default function HistoryCard({
  title,
  recyclable = true,
  certainty = 66,
  tip,
  imageUrl,
  labelLeft,
  labelRight,
}) {
  const certaintyColor =
    certainty >= 80 ? "bg-success text-white" : certainty >= 50 ? "bg-brand text-white" : "bg-warning text-white";

  return (
    <article className="card overflow-hidden bg-amber-50 rounded-3xl">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className={`pill ${recyclable ? "bg-success text-green-900 font-bold" : "bg-warning text-black"}`}>
            {recyclable ? "✅ Recyclable" : "⚠️ Check Local Rules"}
          </div>
          <div className="text-blue-900 font-bold">{certainty}% sure</div>
        </div>

        <p className="headline text-xl font-bold ">{title}</p>

        <div className="mt-3 rounded-lg overflow-hidden border border-slate-200">
          <img src={imageUrl} alt={title} className=" w-full object-cover" />
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span className="text-xl text-slate-600">{labelLeft}</span>
          <span className="text-brand text-xl text-slate-600">{labelRight}</span>
        </div>

        <div className="mt-4 border-green-900 border-4 rounded-lg p-3 ">
          <div className="text-xs text-slate-700 mb-1">Recycling Tip</div>
          <p className="text-sm text-slate-800 ">{tip}</p>
        </div>
      </div>
    </article>
  );
}
