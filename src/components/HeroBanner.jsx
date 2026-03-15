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
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative h-[850] overflow-hidden bg-linear-to-br from-coral-light via-background to-background max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none">
        
        <span className="absolute top-32 right-[15%] text-4xl animate-float-delayed">
          🍔
        </span>
        
        <span className="absolute top-90 right-[10%] text-4xl animate-float">
          🍟
        </span>
        <span className="absolute top-60 right-[30%] text-3xl animate-float-delayed">
          🥤
        </span>
      </div>

      <div className="container mx-auto px-4 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8 relative z-10">

            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium hover:bg-primary/20">
              🍔 Super fast delivery
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Food delivery within <span className="text-primary">30 minutes</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Home delivery and online reservation system for restaurants, cafe,
              medicine, food & groceries
            </p>

            <Button
              size="lg"
              className="text-white bg-linear-to-r from-red-400 via-red-500 to-red-600 hover:bg-linear-to-br focus:ring-4 
              focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg 
              dark:shadow-red-800/80 font-medium rounded-full ml-0 text-lg py-3 text-center leading-5"
            >
              Order Now
            </Button>

            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">🛵</span>
              <span className="font-medium">Free delivery around 5 km</span>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex gap-3">
                <Link
                  to="/contact"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </Link>
                <Link
                  to="/contact"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </Link>
                <Link
                  to="/contact"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full bg-linear-to-br from-primary/20 to-accent/10 blur-3xl" />
            </div>

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
                  <span className="text-xs text-muted-foreground">(10.6K reviews)</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-32 left-10 bg-accent text-accent-foreground px-5 py-3 rounded-full shadow-xl flex items-center gap-2 animate-float z-20">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Confirm Order</span>
            </div>

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
