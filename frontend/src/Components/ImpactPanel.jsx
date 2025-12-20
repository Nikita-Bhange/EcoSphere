// src/components/ImpactPanel.jsx
import React from "react";

export default function ImpactPanel({ bedScore, itemsThisMonth }) {
  return (
    <section className="mt-6 card p-4">
      <h3 className="headline mb-3 text-2xl text-green-300 font-bold ">Your Impact</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-green-100 p-4 border border-green-800">
          <div className="text-3xl font-bold text-slate-900">{bedScore}</div>
          <div className="subtle mt-1">Bed Score</div>
        </div>
        <div className="rounded-lg bg-green-100 p-4 border border-green-800">
          <div className="text-3xl font-bold text-slate-900">{itemsThisMonth}</div>
          <div className="subtle mt-1">Items recycled this month</div>
        </div>
      </div>
    </section>
  );
}
