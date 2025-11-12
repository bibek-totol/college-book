import { colleges } from "@/data/colleges";
import CollegeCard from "./CollegeCard";

const CollegesSection = () => {
  

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Top Colleges You Can Explore
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover prestigious institutions offering world-class education and endless opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.slice(0, 3).map((college) => (
            <CollegeCard
              key={college.id}
              college={college} 
              showDetails={false} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegesSection;
