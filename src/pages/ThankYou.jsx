import React from "react";
import { Link, useLocation } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const { orderId, customerName, total } = location.state || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur rounded-3xl shadow-2xl border border-indigo-100 overflow-hidden">
        <div className="p-10 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700">
            <span className="text-4xl">✅</span>
          </div>
          <h1 className="text-4xl font-semibold text-slate-900 mb-4">Thank You for Your Order!</h1>
          <p className="text-slate-600 text-lg mb-8">
            Your payment was accepted successfully. We&apos;re preparing your order now.
          </p>
          <div className="mx-auto max-w-md rounded-3xl bg-slate-50 p-6 text-left shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500 uppercase tracking-[0.24em] mb-2">Order Confirmation</p>
            <p className="text-lg font-semibold text-slate-900">Order ID: <span className="text-indigo-600">{orderId || "N/A"}</span></p>
            {customerName && <p className="text-slate-700 mt-2">Customer: {customerName}</p>}
            {total !== undefined && <p className="text-slate-700 mt-2">Order Total: ₹{Number(total).toFixed(2)}</p>}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center rounded-full shadow-lg shadow-black/30 bg-red-500 hover:bg-red-600 px-8 py-3 text-white text-sm font-semibold transition-colors"
            >
              Go to Dashboard
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
