"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [admissions, setAdmissions] = useState<any[]>([]);

  const defaultReviews = [
    {
      name: "Alex Thompson",
      avatar: "AT",
      rating: 5,
      college: "Stanford University",
      review:
        "EduBook made my college search so much easier. The detailed information and easy booking process saved me weeks of research. Highly recommended!",
    },
    {
      name: "Priya Sharma",
      avatar: "PS",
      rating: 5,
      college: "MIT Boston",
      review:
        "Amazing platform! I found the perfect college that matched my interests in AI research. The search filters and college comparisons were incredibly helpful.",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const admissionsRes = await fetch("/api/admissions/all");
        const admissionsData = await admissionsRes.json();
        setAdmissions(admissionsData.admissions || []);

      
        const reviewsRes = await fetch("/api/reviews");
        const reviewsData = await reviewsRes.json();
        const storedReviews = reviewsData.reviews || [];

        
        const mergedReviews = storedReviews.map((review: any) => {
          const admission = admissionsData.admissions.find(
            (a: any) => a._id === review.admissionId
          );
          return {
            name: admission?.candidateName || "Anonymous Student",
            avatar: admission?.candidateName
              ? admission.candidateName
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")
                  .toUpperCase()
              : "ST",
            college: admission?.collegeName || "Unknown College",
            rating: review.rating,
            review: review.comment,
          };
        });

        setReviews([...mergedReviews, ...defaultReviews]);
      } catch (err) {
        console.error("Failed to fetch reviews or admissions:", err);
        setReviews([...defaultReviews]);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Students Say About Their Colleges
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from students who found their perfect match through EduBook
          </p>
        </div>

        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="p-6 space-y-4 shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{review.review}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.college}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No reviews available yet.</p>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
