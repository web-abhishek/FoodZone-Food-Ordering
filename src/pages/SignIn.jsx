import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-emerald-50 text-slate-900 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl rounded-4xl border border-white/10 bg-white p-6 shadow-2xl shadow-indigo-950/40 sm:p-8">
        <div className="mb-8 text-center bg-red-500 shadow-xl shadow-gray-400 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center text-2xl text-white -mt-16">
          <FaRegUser className="text-white" />
        </div>
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Sign in to your account</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Welcome back to FoodZone</h1>
          <p className="mt-3 text-slate-600">Please enter your details to sign in.</p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
          <div>
            <label className="sr-only" htmlFor="signin-email">Email address</label>
            <input
              id="signin-email"
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
              className="text-sm w-full rounded-3xl bg-slate-100 px-4 py-4 text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
              placeholder="Email address"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="signin-password">Password</label>
            <input
              id="signin-password"
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
              className="text-sm w-full rounded-3xl bg-slate-100 px-4 py-4 text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="shadow-lg shadow-black/30 w-full rounded-full bg-red-500 px-4 py-3 text-white transition hover:bg-red-600 sm:w-auto sm:px-8"
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="font-semibold text-red-500 hover:text-red-800 transition">
            Create one now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
