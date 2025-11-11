import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSearch = () => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
    
      <div className="absolute inset-0 z-0">
        <img
          src={heroCampus.src}
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/80 to-accent/90" />
      </div>

    
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Find Your Perfect College
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Explore thousands of colleges, discover opportunities, and book your admission in just a few clicks
            </p>
          </div>

      
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto animate-scale-in">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for a college name..."
                className="pl-12 h-14 text-base bg-white  shadow-medium border-0 focus-visible:ring-2 focus-visible:ring-white"
              />
            </div>
            <Button size="lg" className="btn-gradient h-14 px-8 text-base font-semibold shadow-large">
              Search Colleges
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto pt-8">
            {[
              { label: "Colleges", value: "500+" },
              { label: "Students", value: "50K+" },
              { label: "Success Rate", value: "95%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
