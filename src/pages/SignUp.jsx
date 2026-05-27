import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-emerald-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-4xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-300/40 sm:p-10">
        <div className="mb-8 text-center bg-red-500 shadow-xl shadow-gray-400 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center text-2xl text-white -mt-20">
          <FaRegUser className="text-white" />
        </div>
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Create new account</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Sign up for FoodZone</h1>
          <p className="mt-3 text-slate-600">This is a demo registration form for frontend flows.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="sr-only" htmlFor="signup-name">Full name</label>
            <input
              id="signup-name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="text-sm w-full rounded-3xl bg-slate-100 px-4 py-4 text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
              placeholder="Full name"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="signup-email">Email address</label>
            <input
              id="signup-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="text-sm w-full rounded-3xl bg-slate-100 px-4 py-4 text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
              placeholder="Email address"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="sr-only" htmlFor="signup-phone">Phone number</label>
            <input
              id="signup-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="text-sm w-full rounded-3xl bg-slate-100 px-4 py-4 text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
              placeholder="Phone number"
            />

            <label className="sr-only" htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="text-sm w-full rounded-3xl bg-slate-100 px-4 py-4 text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="shadow-lg shadow-black/30 bg-red-500 hover:bg-red-600 px-4 py-3 text-white transition w-full rounded-full sm:w-auto sm:px-8 mx-auto block"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link to="/signin" className="font-semibold text-red-500 hover:text-red-800">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
