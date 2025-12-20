// ProfilePanel.jsx
import React, { useEffect, useState, useRef } from "react";
import HistoryCard from "./HistoryCard"
import Badges from "./Badges.jsx"

import { FiClock, FiLogOut } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import ImpactPanel from "./ImpactPanel.jsx"



export default function Profile({ userId, onClose }) {
    // const [user, setUser] = useState({ name: "Loading...", photoUrl: "" });
    const [user, setUser] = useState({ name: "nikitabhange05@gmail.com", photoUrl: "" });
     const navigate = useNavigate();

       const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    navigate("/");
  };


    useEffect(() => {
        const loadUser = async () => {
            const res = await fetch(`/api/user/${userId}`);
            const data = await res.json();
            setUser({ name: data.name || "User", photoUrl: data.photoUrl || "" });
        };
        loadUser();
    }, [userId]);

    return (
        <>
            <div className="absolute top-14 right-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
                >
                    ×
                </button>

                {/* Profile content */}
                <div className="flex items-center gap-3">
                    <img
                        src={
                            user.photoUrl ||
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW2MAFrFnfa_bT1jSttLbmvfotJcqQyCCGg&s"
                        }
                        alt="Profile"
                        className="h-12 w-12 rounded-full border border-gray-300 object-cover"
                    />
                    <div>
                        <h2 className="text-m text-gray-800">{user.name}</h2>
                        {/* <button className="text-sm text-blue-600 hover:text-blue-800">
                            Edit Profile
                        </button> */}
                    </div>
                </div>

                {/* <section className="mt-4">
                    <h2 className="headline mb-2">History</h2>
                    <HistoryCard title="Corrugated Cardboard" recyclable certainty={66} tip="Break down boxes, remove any plastic or tape, and bundle together." imageUrl="https://images.unsplash.com/photo-1584352721269-6b7a1a5c1f42?q=80&w=800&auto=format&fit=crop" labelLeft="6 Redindyze" labelRight="Reanding »" />
                </section> */}
                <NavLink to="/history">

                    <button className="bg-red-700 rounded-2xl mt-5 font-bold text-white  p-2">View History</button>
                </NavLink>
                <ImpactPanel bedScore={720} itemsThisMonth={33} />

                {/* <Badges badges={[{ id: 1, name: "Starter", icon: "⭐" }, { id: 2, name: "Cardboard Champ", icon: "📦" }, { id: 3, name: "Eco Streak", icon: "🌿" },]} /> */}
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition">
                    <FiLogOut className="text-red-600 text-lg" />
                    Logout
                </button>
            </div>
        </>
    );
}
