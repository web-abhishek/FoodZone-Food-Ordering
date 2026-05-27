import HeroBanner from "../components/HeroBanner"
import Offer from "../components/Offer";
import ReviewSlider from "../components/ReviewSlider";
import ServicesSection from "../components/ServiceSection";
import Product from "./Product";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />
      <ServicesSection />
      <Product />
      <Offer />
      <ReviewSlider />
    </div>
  );
};

export default Index;