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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-white pt-40 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl rounded-4xl border border-white/10 bg-white p-6 shadow-2xl shadow-indigo-950/40">
        
        <div className="mb-8 text-center bg-red-500 shadow-xl shadow-gray-400 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center text-2xl text-red-500 -my-16">
          <FaRegUser className="text-white" />
        </div>
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Sign in to your account</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Welcome back to FoodZone</h1>
          <p className="mt-3 text-slate-600">Please enter your details to sign in.</p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-3">
          <div>
            
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
              className="text-sm w-full rounded-3xl bg-gray-200 px-4 py-4 text-gray-800 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
              placeholder={
                  <>
                    <FaRegUser className="text-white" />
                    {" Email address"}
                  </>
                }
            />
          </div>

          <div>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
              className="text-sm w-full rounded-3xl bg-gray-200 px-4 py-4 text-gray-800 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
              placeholder={
                  <>
                    <FaRegUser className="text-white" />
                    {"Password"}
                  </>
                }
            />
          </div>

          <button
            type="submit"
            className="shadow-lg shadow-black/30 w-1/3 mx-auto block rounded-full bg-red-500 px-4 py-3 text-white transition hover:bg-red-600"
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-400">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="font-semibold text-red-500 hover:text-red-800 transition ease-in-out delay-100">
            Create one now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
