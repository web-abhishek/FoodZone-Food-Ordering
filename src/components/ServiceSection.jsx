import { Rocket, Smartphone, MapPin, Headphones } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Get your food delivered hot and fresh within 30 minutes",
    iconColor: "primary",
  },
  {
    icon: Smartphone,
    title: "Easy Ordering",
    description: "Simple and intuitive ordering process in just a few taps",
    iconColor: "accent",
  },
  {
    icon: MapPin,
    title: "Live Tracking",
    description: "Track your order in real-time from kitchen to doorstep",
    iconColor: "primary",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round the clock customer support for any assistance",
    iconColor: "accent",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why choose <span className="text-red-500">FoodZone?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Experience hassle-free ordering with fast delivery, real-time tracking, and premium customer support. We're committed to bringing quality food to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconColor={service.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
