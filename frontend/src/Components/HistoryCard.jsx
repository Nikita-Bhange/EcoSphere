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
    <article className="card overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className={`pill ${recyclable ? "bg-success text-white" : "bg-warning text-white"}`}>
            {recyclable ? "✅ Recyclable" : "⚠️ Check Local Rules"}
          </div>
          <div className={`pill ${certaintyColor}`}>{certainty}% sure</div>
        </div>

        <h3 className="headline">{title}</h3>

        <div className="mt-3 rounded-lg overflow-hidden border border-slate-200">
          <img src={imageUrl} alt={title} className="h-36 w-full object-cover" />
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>{labelLeft}</span>
          <span className="text-brand">{labelRight}</span>
        </div>

        <div className="mt-4 bg-slate-50 rounded-lg p-3 border border-slate-200">
          <div className="text-xs text-slate-500 mb-1">Recycling Tip</div>
          <p className="text-sm text-slate-700">{tip}</p>
        </div>
      </div>
    </article>
  );
}
