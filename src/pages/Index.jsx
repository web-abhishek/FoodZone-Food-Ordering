import HeroBanner from "../components/HeroBanner"
import ServicesSection from "../components/ServiceSection";
import Product from "./Product";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />
      <ServicesSection />
      <Product />
    </div>
  );
};

export default Index;