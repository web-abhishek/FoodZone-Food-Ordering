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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-4xl border border-slate-200 bg-white p-10 shadow-2xl shadow-slate-300/40">
        <div className="mb-8 text-center bg-red-500 shadow-xl shadow-gray-400 p-4 rounded-full w-20 h-20 mx-auto flex 
        items-center justify-center text-2xl text-red-500 -my-20">
          <FaRegUser className="text-white" />
        </div>
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Create new account</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Sign up for FoodZone</h1>
          <p className="mt-3 text-slate-600">This is a demo registration form for frontend flows.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
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
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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

          <div className="grid gap-6 sm:grid-cols-2">
            
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="text-sm w-full rounded-3xl bg-gray-200 px-4 py-4 text-gray-800 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                              placeholder={
                                  <>
                                    <FaRegUser className="text-white" />
                                    {" Email address"}
                                  </>
                                }
              />

              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
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

          <button
            type="submit"
            className="shadow-lg shadow-black/30 bg-red-500 hover:bg-red-600 px-4 py-3 text-white transition w-1/3 mx-auto block rounded-full"
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
