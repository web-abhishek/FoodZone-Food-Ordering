import { Badge } from "../components/UI/Badge";
import { Facebook, Instagram, Twitter, Star, CheckCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/UI/Avatar";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-red-50 via-white to-orange-50 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute top-14 left-6 text-5xl opacity-70 animate-float">🍕</span>
        <span className="absolute top-28 right-8 text-4xl opacity-80 animate-float-delayed">🍔</span>
        <span className="absolute bottom-20 left-16 text-5xl opacity-60 animate-float">🥤</span>
        <span className="absolute bottom-12 right-10 text-3xl opacity-70 animate-float-delayed">🍟</span>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <Badge className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
              🍔 Express delivery in 30 min
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Delicious food <span className="text-red-500">delivered fast,</span> wherever you are.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Discover menus from top restaurants, place orders with ease, and enjoy warm meals at home. Perfect for busy days, family nights, and friendly gatherings.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
              >
                View Menu
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:border-red-300 hover:text-red-600"
              >
                Contact us
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Free delivery area</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">Within 5 km</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Customer rating</p>
                <div className="mt-2 flex items-center gap-2 text-slate-900">
                  <Star className="h-4 w-4 text-amber-400" />
                  <span className="text-lg font-semibold">4.9/5</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600">
              <span className="text-2xl">🛵</span>
              <span>Fast order tracking, secure checkout, and fresh meals every time.</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200/50 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-br from-red-200 via-transparent to-transparent opacity-80" />
            <div className="relative grid gap-6">
              <div className="flex flex-col gap-4 rounded-4xl bg-slate-950/95 p-6 text-white shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Chef’s choice</p>
                    <p className="mt-2 text-2xl font-bold">Fiery Burger Deluxe</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 px-3 py-2 text-sm font-semibold text-emerald-200">Hot</div>
                </div>
                <p className="text-sm text-slate-300">Juicy beef, cheddar cheese, fresh lettuce, and secret sauce.</p>
                <div className="flex flex-wrap gap-2 text-sm text-slate-300">
                  <span className="rounded-full bg-white/10 px-3 py-1">Burger</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Fast Food</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Popular</span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-4 text-slate-900 shadow-sm">
                  <p className="text-sm text-slate-500">Trusted by</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Avatar className="h-10 w-10 border border-slate-200">
                      <AvatarImage src="https://i.pravatar.cc/100?img=1" />
                      <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-10 w-10 border border-slate-200">
                      <AvatarImage src="https://i.pravatar.cc/100?img=2" />
                      <AvatarFallback>U2</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-10 w-10 border border-slate-200">
                      <AvatarImage src="https://i.pravatar.cc/100?img=3" />
                      <AvatarFallback>U3</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-4 text-slate-900 shadow-sm">
                  <p className="text-sm text-slate-500">Secure checkout</p>
                  <div className="mt-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span className="font-semibold text-slate-900">Safe & simple</span>
                  </div>
                </div>
              </div>

              <div className="rounded-4xl border border-slate-200 bg-linear-to-r from-red-500 to-orange-400 p-4 text-white shadow-lg shadow-red-300/30">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em]">Order with confidence</p>
                    <p className="mt-2 text-xl font-bold">Live delivery updates</p>
                  </div>
                  <div className="rounded-full bg-white/20 px-4 py-3 text-sm font-semibold">Start now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
