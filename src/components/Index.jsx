import HeroBanner from "./HeroBanner"
import ServicesSection from "./ServiceSection";
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