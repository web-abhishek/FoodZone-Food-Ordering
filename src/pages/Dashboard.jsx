import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-slate-900/90 p-10 shadow-2xl shadow-slate-900/40">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Customer dashboard</p>
          <h1 className="mt-4 text-4xl font-semibold">Welcome to your dashboard</h1>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            Track your orders, explore food recommendations, and return to shopping anytime.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-800/80 p-6 border border-white/10 shadow-inner">
            <h2 className="text-xl font-semibold text-white mb-3">Recent orders</h2>
            <p className="text-slate-400 leading-7">
              Orders will appear here once you place them. For now, enjoy our tasty menu and select your favorites.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-800/80 p-6 border border-white/10 shadow-inner">
            <h2 className="text-xl font-semibold text-white mb-3">Account quick actions</h2>
            <ul className="space-y-2 text-slate-400">
              <li>• View your favourites</li>
              <li>• Track delivery status</li>
              <li>• Manage saved addresses</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex rounded-full bg-cyan-500 px-8 py-3 text-slate-950 font-semibold hover:bg-cyan-400 transition"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
