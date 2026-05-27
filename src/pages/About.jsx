import { Heart, Zap, Users, Award, TrendingUp } from "lucide-react";
import about from "../assets/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-slate-50">
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
                FoodZone was founded with a simple mission: bring great food to
                every doorstep. From a small team with big dreams to a trusted
                delivery platform, we connect customers with hundreds of
                restaurants across the country.
              </p>

              <div className="mt-6 space-y-4">
                <p className="text-slate-600">We believe food brings people together — whether it's a quick lunch or a family dinner.</p>
                <p className="text-slate-600">500+ partner restaurants, fast delivery, and a focus on quality.</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link to="/products" className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-red-700">
                  Explore Menus
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl h-64 sm:h-80 md:h-96 lg:h-96">
              <img src={about} alt="about" className="h-full w-full object-cover" />

              <div className="absolute left-4 bottom-4 rounded-lg bg-white/95 p-4 shadow">
                <p className="text-xl font-bold text-slate-900">250+ Cities</p>
                <p className="text-sm text-slate-500 mt-1">Serving across the country</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Mission & Vision</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center gap-4">
                <Heart className="text-red-500" size={28} />
                <h3 className="text-xl font-semibold text-slate-900">Mission</h3>
              </div>
              <p className="mt-4 text-slate-600">To revolutionize the food delivery experience by connecting passionate restaurants with hungry customers and delivering quality service always.</p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center gap-4">
                <Zap className="text-yellow-500" size={28} />
                <h3 className="text-xl font-semibold text-slate-900">Vision</h3>
              </div>
              <p className="mt-4 text-slate-600">To be the most trusted food delivery platform, known for quality, sustainability, and customer delight.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Core Values</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-linear-to-r from-blue-50 to-blue-100 p-6 shadow hover:shadow-lg">
              <Users className="text-blue-600 mb-4" size={36} />
              <h4 className="text-lg font-bold text-slate-900 mb-2">Customer First</h4>
              <p className="text-slate-600">Creating value and delighting customers with exceptional service.</p>
            </div>

            <div className="rounded-lg bg-linear-to-r from-green-50 to-green-100 p-6 shadow hover:shadow-lg">
              <Award className="text-green-600 mb-4" size={36} />
              <h4 className="text-lg font-bold text-slate-900 mb-2">Quality</h4>
              <p className="text-slate-600">Maintaining high standards across food and delivery.</p>
            </div>

            <div className="rounded-lg bg-linear-to-r from-purple-50 to-purple-100 p-6 shadow hover:shadow-lg">
              <TrendingUp className="text-purple-600 mb-4" size={36} />
              <h4 className="text-lg font-bold text-slate-900 mb-2">Innovation</h4>
              <p className="text-slate-600">Constantly improving our platform for better experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">By The Numbers</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-500 md:text-4xl">50M+</p>
              <p className="mt-1 text-sm text-slate-500">Orders Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-500 md:text-4xl">500+</p>
              <p className="mt-1 text-sm text-slate-500">Partner Restaurants</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-500 md:text-4xl">2M+</p>
              <p className="mt-1 text-sm text-slate-500">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-500 md:text-4xl">4.8★</p>
              <p className="mt-1 text-sm text-slate-500">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">Leadership Team</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: "Abhishek Acharya",
                role: "Founder & CEO",
                bio: "Passionate about connecting people with great food.",
              },
              {
                name: "Sarah Johnson",
                role: "Chief Operations Officer",
                bio: "Driving operational excellence and restaurant partnerships.",
              },
              {
                name: "Michael Chen",
                role: "Head of Technology",
                bio: "Building innovative solutions for seamless delivery.",
              },
            ].map((member, index) => (
              <div key={index} className="rounded-lg bg-slate-50 p-6 text-center shadow hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-red-400 to-red-500 text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm text-red-600 font-semibold">{member.role}</p>
                <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-linear-to-r text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to Order?</h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-slate-700">Explore thousands of delicious meals from your favorite restaurants, available at your fingertips.</p>
          <div className="mt-8">
            <Link to="/products" className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-white font-semibold shadow hover:bg-red-700">Start Ordering Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
