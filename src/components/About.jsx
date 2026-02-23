import { Heart, Zap, Users, Award, TrendingUp } from "lucide-react";
import about from "../assets/about.jpg";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                FoodZone was founded in 2020 with a simple mission: to make
                great food accessible to everyone. What started as a small team
                with big dreams has grown into a trusted food delivery platform
                serving thousands of customers daily.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We believe that food brings people together. Whether you're
                looking for a quick lunch, a family dinner, or celebrating a
                special occasion, FoodZone is here to make it delicious and
                convenient.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a network of 500+ partner restaurants and a dedicated
                delivery team, we're committed to delivering excellence with
                every order.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
              <img src={about} alt="about" className="w-full h-full object-cover" />
                  <div className="absolute left-0 bottom-0 rounded-3xl rounded-bl-none bg-white bg-opacity-90 p-6 shadow-lg">
                    <p className="text-2xl font-bold">250+ Cities</p>
                  <p className="text-sm mt-2">Serving across the country</p>
                  </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="text-red-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize the food delivery experience by connecting
                passionate restaurants with hungry customers, ensuring every
                meal is prepared with care and delivered with speed.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Zap className="text-yellow-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and beloved food delivery platform,
                recognized for our commitment to quality, sustainability, and
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-linear-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Users className="text-blue-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Customer First
              </h3>
              <p className="text-gray-600">
                Everything we do is centered around creating value and
                delighting our customers with exceptional service.
              </p>
            </div>
            <div className="bg-linear-to-r from-green-50 to-green-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Award className="text-green-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards of food quality and service
                excellence in every interaction.
              </p>
            </div>
            <div className="bg-linear-to-r from-purple-50 to-purple-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <TrendingUp className="text-purple-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously improve our platform and services to meet
                evolving customer needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-orange-500 mb-2">50M+</p>
              <p className="text-xl text-gray-300">Orders Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-orange-500 mb-2">500+</p>
              <p className="text-xl text-gray-300">Partner Restaurants</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-orange-500 mb-2">2M+</p>
              <p className="text-xl text-gray-300">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-orange-500 mb-2">4.8★</p>
              <p className="text-xl text-gray-300">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-linear-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-orange-600 to-red-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Explore thousands of delicious meals from your favorite restaurants,
            available at your fingertips.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg">
            Start Ordering Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
