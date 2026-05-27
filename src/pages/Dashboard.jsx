import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-emerald-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-4xl border border-white/10 bg-slate-900/95 p-8 shadow-2xl shadow-slate-900/40">
        <div className="mb-10 rounded-[1.75rem] bg-slate-800/90 border border-white/10 p-8 shadow-inner">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Customer dashboard</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">Welcome back to FoodZone</h1>
              <p className="mt-4 max-w-2xl text-slate-300 text-lg leading-8">
                Personalize your orders, check recent activity, and get back to the menu in one smooth experience.
              </p>
            </div>
            <div className="inline-flex rounded-full bg-white/5 px-5 py-3 text-slate-200 ring-1 ring-white/10">
              <span className="text-slate-300 text-sm">Next delivery</span>
              <span className="ml-3 rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300 text-sm font-semibold">
                Today • 7:30 PM
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="rounded-3xl bg-slate-800/90 p-6 border border-white/10 shadow-inner">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Total orders</p>
            <p className="mt-4 text-3xl md:text-4xl font-semibold text-white">12</p>
            <p className="mt-3 text-slate-400">Your recent food cravings delivered right to your door.</p>
          </div>
          <div className="rounded-3xl bg-slate-800/90 p-6 border border-white/10 shadow-inner">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Favorites</p>
            <p className="mt-4 text-3xl md:text-4xl font-semibold text-white">8</p>
            <p className="mt-3 text-slate-400">Saved meals and restaurants for quick reorders.</p>
          </div>
          <div className="rounded-3xl bg-slate-800/90 p-6 border border-white/10 shadow-inner">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Saved addresses</p>
            <p className="mt-4 text-3xl md:text-4xl font-semibold text-white">3</p>
            <p className="mt-3 text-slate-400">Pickup and delivery locations ready when you are.</p>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-4xl bg-slate-800/90 p-8 border border-white/10 shadow-inner">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-white">Recent orders</h2>
                <p className="mt-2 text-slate-400">Track your latest meals and reorder with one click.</p>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300">Updated now</span>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-900/80 p-5 border border-white/5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-white">Italian Grill Combo</p>
                    <p className="mt-1 text-sm text-slate-400">Delivered • 1 hour ago</p>
                  </div>
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-300">Delivered</span>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5 border border-white/5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-white">Spicy Taco Bowl</p>
                    <p className="mt-1 text-sm text-slate-400">Scheduled • Tomorrow</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300">In progress</span>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5 border border-white/5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-white">Veggie Power Salad</p>
                    <p className="mt-1 text-sm text-slate-400">Ready to reorder anytime</p>
                  </div>
                  <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-sm text-indigo-300">Favorite</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-4xl bg-slate-800/90 p-8 border border-white/10 shadow-inner lg:sticky lg:top-24">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white">Quick actions</h2>
              <p className="mt-2 text-slate-400">Jump straight to the things you do most.</p>
            </div>
            <div className="grid gap-4">
              <Link
                to="/products"
                className="rounded-3xl bg-cyan-500 px-5 py-4 text-white font-semibold transition hover:bg-cyan-400"
              >
                Browse menu
              </Link>
              <button className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-left text-slate-200 transition hover:bg-white/10">
                Manage saved addresses
                <span className="block mt-2 text-sm text-slate-400">Update delivery details and pickup points.</span>
              </button>
              <button className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-left text-slate-200 transition hover:bg-white/10">
                View favourites
                <span className="block mt-2 text-sm text-slate-400">See meals and restaurants you saved.</span>
              </button>
              <button className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-left text-slate-200 transition hover:bg-white/10">
                Track delivery status
                <span className="block mt-2 text-sm text-slate-400">Check where your order is right now.</span>
              </button>
            </div>
          </div>
        </div>

          <div className="mt-10 rounded-4xl bg-slate-800/90 p-8 border border-white/10 shadow-inner">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Today’s recommendations</h2>
              <p className="mt-2 text-slate-400">Handpicked dishes and restaurant specials to satisfy your cravings.</p>
            </div>
            <div className="inline-flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300">Popular</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300">New</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300">Fast delivery</span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-900/80 p-5 border border-white/5">
              <p className="text-lg font-semibold text-white">Mango Lassi</p>
              <p className="mt-2 text-sm text-slate-400">Refresh your order with a cool beverage.</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5 border border-white/5">
              <p className="text-lg font-semibold text-white">Sizzling Noodles</p>
              <p className="mt-2 text-sm text-slate-400">A spicy favorite ready in minutes.</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5 border border-white/5">
              <p className="text-lg font-semibold text-white">Cheesy Pizza</p>
              <p className="mt-2 text-sm text-slate-400">Classic comfort food for any mood.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
