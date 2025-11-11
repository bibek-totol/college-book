import CollegeCard from "@/components/CollegeCard";
import { colleges } from "@/data/colleges";

const Colleges = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Colleges</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover prestigious institutions offering world-class education and endless opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.map((college) => (
            <CollegeCard key={college.id} college={college} showDetails />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colleges;
