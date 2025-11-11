import CollegeCard from "./CollegeCard";
import college1 from "@/assets/college-1.jpg";
import college2 from "@/assets/college-2.jpg";
import college3 from "@/assets/college-3.jpg";

const CollegesSection = () => {
  const colleges = [
    {
      image: college1,
      name: "Stanford University",
      admissionDates: "Applications open: Oct 1 - Dec 15",
      events: "Annual Tech Summit, Cultural Fest 2024",
      research: "AI & Machine Learning, Biotechnology",
      sports: "Basketball Champions, Olympic Training",
    },
    {
      image: college2,
      name: "MIT Boston",
      admissionDates: "Early Action: Nov 1 - Jan 15",
      events: "Innovation Week, Startup Bootcamp",
      research: "Robotics, Quantum Computing, Clean Energy",
      sports: "Rowing Team, Track & Field Excellence",
    },
    {
      image: college3,
      name: "Harvard College",
      admissionDates: "Regular Decision: Dec 1 - Jan 31",
      events: "Leadership Summit, Global Conference",
      research: "Law & Policy, Medical Research, Economics",
      sports: "Football Legacy, Swimming Champions",
    },
  ];

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
          {colleges.map((college) => (
            <CollegeCard
              key={college.name}
              {...college}
              image={typeof college.image === "string" ? college.image : college.image.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegesSection;
