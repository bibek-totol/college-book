"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star, Mail, Phone, MapPin, Calendar, User, BookOpen } from "lucide-react";
import { toast } from "sonner";
import { getSession } from "next-auth/react";

interface Admission {
  _id: string;
  collegeId: string;
  collegeName: string;
  candidateName: string;
  subject: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  imageUrl?: string | null;
  submittedAt: string;
}

interface Review {
  _id: string;
  admissionId: string;
  userEmail: string;
  rating: number;
  comment: string;
  createdAt: string;
}

const MyCollege = () => {
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState<{ [key: string]: { rating: number; comment: string } }>({});
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    
    getSession().then((session) => {
      if (session?.user?.email) {
        setUserEmail(session.user.email);
        fetchAdmissions(session.user.email);
        fetchReviews(session.user.email);
      } else {
        toast.error("Please log in to see your applications");
      }
    });
  }, []);

  const fetchAdmissions = async (email: string) => {
    try {
      const res = await fetch(`/api/admissions?userEmail=${email}`);
      const data = await res.json();
      setAdmissions(data.admissions || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch your applications");
    }
  };

  const fetchReviews = async (email: string) => {
    try {
      const res = await fetch(`/api/reviews?userEmail=${email}`);
      const data = await res.json();
      setReviews(data.reviews || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch your reviews");
    }
  };

  const handleRatingClick = (admissionId: string, rating: number) => {
    setNewReview((prev) => ({
      ...prev,
      [admissionId]: { ...prev[admissionId], rating },
    }));
  };

  const handleCommentChange = (admissionId: string, comment: string) => {
    setNewReview((prev) => ({
      ...prev,
      [admissionId]: { ...prev[admissionId], comment },
    }));
  };

  const handleSubmitReview = async (admissionId: string) => {
    if (!userEmail) return toast.error("You must be logged in");

    const review = newReview[admissionId];
    if (!review?.rating) return toast.error("Please select a rating");
    if (!review?.comment?.trim()) return toast.error("Please write a comment");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          admissionId,
          rating: review.rating,
          comment: review.comment,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        setReviews((prev) => [...prev, data.review]);
        setNewReview((prev) => {
          const updated = { ...prev };
          delete updated[admissionId];
          return updated;
        });
        toast.success("Review submitted successfully!");
      } else {
        toast.error(data.error || "Failed to submit review");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit review");
    }
  };

  const getReviewForAdmission = (admissionId: string) => {
    return reviews.find((r) => r.admissionId === admissionId);
  };

  if (admissions.length === 0) {
    return (
      <div className="min-h-screen pt-20 pb-12 bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">No Applications Yet</h1>
          <p className="text-xl text-muted-foreground mb-8">
            You haven't submitted any college applications yet.
          </p>
          <Button
            onClick={() => window.location.href = "/admission"}
            className="bg-gradient-to-r from-primary to-accent font-bold transition-opacity"
          >
            Apply Now
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My College Applications</h1>
          <p className="text-xl text-muted-foreground">
            View your submitted applications and leave reviews
          </p>
        </div>

        <div className="space-y-8">
          {admissions.map((admission) => {
            const existingReview = getReviewForAdmission(admission._id);
            const currentReview = newReview[admission._id];

            return (
              <Card key={admission._id} className="shadow-card shadow-xl">
                <CardHeader className="bg-gradient-primary text-foreground rounded-t-lg">
                  <CardTitle className="text-2xl">{admission.collegeName}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <User className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Candidate Name</p>
                          <p className="text-muted-foreground">{admission.candidateName}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Subject</p>
                          <p className="text-muted-foreground">{admission.subject}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-muted-foreground">{admission.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-muted-foreground">{admission.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Date of Birth</p>
                          <p className="text-muted-foreground">
                            {new Date(admission.dateOfBirth).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Address</p>
                          <p className="text-muted-foreground">{admission.address}</p>
                        </div>
                      </div>
                      {admission.imageUrl && (
                        <div>
                          <p className="font-semibold mb-2">Photo</p>
                          <img
                            src={admission.imageUrl}
                            alt="Candidate"
                            className="w-32 h-32 object-cover rounded-lg"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>

                    {existingReview ? (
                      <div className="bg-secondary p-4 rounded-lg">
                        <div className="flex gap-1 mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < existingReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{existingReview.comment}</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Submitted on {new Date(existingReview.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold mb-2">Rating</p>
                          <div className="flex gap-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <button
                                key={i}
                                onClick={() => handleRatingClick(admission._id, i + 1)}
                                className="transition-transform hover:scale-110"
                              >
                                <Star
                                  className={`h-8 w-8 ${
                                    currentReview?.rating && i < currentReview.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="font-semibold mb-2">Comment</p>
                          <Textarea
                            placeholder="Share your experience with this college..."
                            value={currentReview?.comment || ""}
                            onChange={(e) => handleCommentChange(admission._id, e.target.value)}
                            rows={4}
                          />
                        </div>

                        <Button
                          onClick={() => handleSubmitReview(admission._id)}
                          className="bg-gradient-to-r from-primary to-accent font-bold group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                          Submit Review
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCollege;
