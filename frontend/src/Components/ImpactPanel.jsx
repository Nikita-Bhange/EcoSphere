// src/components/ImpactPanel.jsx
import React from "react";
import { useImpact } from "../context/ImpactContext";

export default function ImpactPanel() {
  const { ecoscore, items } = useImpact();


  return (
    <section className="mt-6 card p-3">
      <h1 className="headline mb-3 text-2xl text-green-900 font-bold ">Your Impact</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-green-100 p-4 border border-green-800">
          <div className="text-3xl font-bold text-slate-900">{ecoscore}</div>
          <div className="subtle mt-1">Eco Score</div>
        </div>
        <div className="rounded-lg bg-green-100 p-4 border border-green-800">
          <div className="text-3xl font-bold text-slate-900">{items}</div>
          <div className="subtle mt-1">Items recycled this month</div>
        </div>
      </div>
    </section>
  );
}
