"use client";

import { College } from "@/types/college";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Sparkles, Trophy, FlaskConical, Star } from "lucide-react";
import { useRouter } from "next/navigation";

interface CollegeCardProps {
  college: College;
  showDetails?: boolean;
}

const CollegeCard = ({ college, showDetails = false }: CollegeCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (showDetails) {
      router.push(`/admission?college=${college.id}`);
    } else {
      router.push(`/colleges/${college.id}`);
    }
  };

  return (
    <Card className="overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={typeof college.image === "string" ? college.image : college.image.src}
          alt={college.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {college.name}
        </h3>
        <div className="absolute top-4 right-4 bg-background rounded-full px-3 py-1 flex items-center gap-1 text-foreground">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-sm text-foreground">{college.rating}</span>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-2">
          <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-sm text-muted-foreground">Admission Dates</p>
            <p className="text-sm">{college.admissionDates}</p>
          </div>
        </div>

        {showDetails && (
          <>
            <div className="flex items-start gap-2">
              <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm text-muted-foreground">Events</p>
                <p className="text-sm">{college.events.join(", ")}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <FlaskConical className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm text-muted-foreground">Research</p>
                <p className="text-sm">{college.research.join(", ")}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Trophy className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm text-muted-foreground">Sports</p>
                <p className="text-sm">{college.sports.join(", ")}</p>
              </div>
            </div>
          </>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          className="w-full bg-gradient-to-r from-primary to-accent font-bold "
          onClick={handleClick}
        >
          {showDetails ? "Apply Now" : "View Details"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CollegeCard;
