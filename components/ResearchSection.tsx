import { FileText, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

const ResearchSection = () => {
  const researchPapers = [
    {
      title: "Quantum Computing Applications in Modern Healthcare",
      author: "Dr. Sarah Chen",
      university: "MIT Boston",
      date: "March 2024",
      link: "#",
    },
    {
      title: "Sustainable Energy Solutions for Urban Development",
      author: "Prof. James Wilson",
      university: "Stanford University",
      date: "February 2024",
      link: "#",
    },
    {
      title: "AI-Driven Climate Change Prediction Models",
      author: "Dr. Emily Rodriguez",
      university: "Harvard College",
      date: "January 2024",
      link: "#",
    },
    {
      title: "Breakthrough in Cancer Immunotherapy Research",
      author: "Dr. Michael Thompson",
      university: "Stanford University",
      date: "December 2023",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Recent Research by Our Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore groundbreaking research and academic excellence from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {researchPapers.map((paper, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-medium transition-shadow duration-300 cursor-pointer group"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {paper.title}
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    <p>{paper.author}</p>
                    <p className="text-xs">{paper.university} • {paper.date}</p>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
