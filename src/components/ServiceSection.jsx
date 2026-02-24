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
    <section className="py-12 bg-muted/30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide the best food delivery experience with our premium services designed for your convenience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
