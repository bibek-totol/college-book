"use client";
import { Calendar, Trophy, FlaskConical, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface CollegeCardProps {
  image: string;
  name: string;
  admissionDates: string;
  events: string;
  research: string;
  sports: string;
}

const CollegeCard = ({
  image,
  name,
  admissionDates,
  events,
  research,
  sports,
}: CollegeCardProps) => {
  return (
    <Card className="overflow-hidden card-hover-lift bg-card border-border shadow-soft hover:shadow-large">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
          {name}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Info Items */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-foreground">Admission Dates</div>
              <div className="text-sm text-muted-foreground">{admissionDates}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-accent mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-foreground">Events</div>
              <div className="text-sm text-muted-foreground">{events}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FlaskConical className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-foreground">Research</div>
              <div className="text-sm text-muted-foreground">{research}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Trophy className="h-5 w-5 text-accent mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-foreground">Sports</div>
              <div className="text-sm text-muted-foreground">{sports}</div>
            </div>
          </div>
        </div>

        {/* Button */}
        <Button className="w-full btn-gradient mt-4">
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default CollegeCard;
