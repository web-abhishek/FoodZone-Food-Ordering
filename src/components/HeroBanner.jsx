import { Button } from "../components/UI/Button";
import { Badge } from "../components/UI/Badge";
import {
  Play,
  Facebook,
  Instagram,
  Twitter,
  Star,
  CheckCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/UI/Avatar";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-coral-light via-background to-background">
      {/* Floating Food Emojis */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-[10%] text-5xl animate-float">
          🍕
        </span>
        <span className="absolute top-32 right-[15%] text-4xl animate-float-delayed">
          🍔
        </span>
        <span className="absolute bottom-40 left-[5%] text-5xl animate-float-delayed">
          🥪
        </span>
        <span className="absolute top-48 left-[25%] text-3xl animate-float">
          🌭
        </span>
        <span className="absolute bottom-32 right-[10%] text-4xl animate-float">
          🍟
        </span>
        <span className="absolute top-60 right-[30%] text-3xl animate-float-delayed">
          🥤
        </span>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            {/* Badge */}
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium hover:bg-primary/20">
              🍔 Super fast delivery
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Food delivery within{" "}
              <span className="text-primary">30 minutes</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-muted-foreground max-w-xl">
              Home delivery and online reservation system for restaurants, cafe,
              medicine, food & groceries
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Order Now
              </Button>

              <button className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors group">
                <span className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <Play
                    className="w-5 h-5 text-accent-foreground ml-0.5"
                    fill="currentColor"
                  />
                </span>
                <span className="font-medium">Order Process</span>
              </button>
            </div>

            {/* Extra Info */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">🛵</span>
              <span className="font-medium">Free delivery around 5 km</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Decorative Elements */}
          <div className="relative hidden lg:block">
            {/* Large Circle Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full bg-linear-to-br from-primary/20 to-accent/10 blur-3xl" />
            </div>

            {/* Review Card */}
            <div className="absolute top-20 right-10 bg-card p-4 rounded-2xl shadow-xl border border-border animate-bounce-gentle z-20">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Avatar className="w-8 h-8 border-2 border-card">
                    <AvatarImage src="https://i.pravatar.cc/100?img=1" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-card">
                    <AvatarImage src="https://i.pravatar.cc/100?img=2" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-card">
                    <AvatarImage src="https://i.pravatar.cc/100?img=3" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="font-bold text-foreground">4.9</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    (10.6K reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Confirm Order Badge */}
            <div className="absolute bottom-32 left-10 bg-accent text-accent-foreground px-5 py-3 rounded-full shadow-xl flex items-center gap-2 animate-float z-20">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Confirm Order</span>
            </div>

            {/* Central Food Image Placeholder */}
            <div className="relative z-10 flex items-center justify-center h-full min-h-125">
              <div className="text-[200px] animate-float">🍔</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
