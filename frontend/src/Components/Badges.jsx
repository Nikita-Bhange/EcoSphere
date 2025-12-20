// src/components/Badges.jsx
import React from "react";

export default function Badges({ badges = [] }) {
  return (
    <section className="mt-6">
      <h3 className="headline mb-2">Your Badges</h3>
      <div className="card p-3">
        <div className="flex items-center gap-2 flex-wrap">
          {badges.map((b) => (
            <div
              key={b.id}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm"
            >
              <span>{b.icon}</span>
              <span className="text-slate-700">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
