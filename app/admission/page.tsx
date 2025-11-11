"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { colleges } from "@/data/colleges";


const Admission = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedCollegeId = searchParams.get("college");

  const [selectedCollege, setSelectedCollege] = useState<string>(preselectedCollegeId || "");
  const [formData, setFormData] = useState({
    candidateName: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    image: null as File | null,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!selectedCollege) {
      toast?.error("Please select a college");
      return;
    }

    const submissions = JSON.parse(localStorage.getItem("admissions") || "[]");
    const college = colleges.find((c) => c.id === selectedCollege);

    const newSubmission = {
      id: Date.now().toString(),
      collegeId: selectedCollege,
      collegeName: college?.name || "",
      ...formData,
      imageUrl: formData.image ? URL.createObjectURL(formData.image) : null,
      submittedAt: new Date().toISOString(),
    };

    submissions.push(newSubmission);
    localStorage.setItem("admissions", JSON.stringify(submissions));

    toast?.success("Application submitted successfully!");
    router.push("/my-college");
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            College Admission
          </h1>
          <p className="text-xl text-muted-foreground">
            Select a college and submit your application
          </p>
        </div>

        {/* College Selection */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle>Select a College</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {colleges.map((college) => (
                <button
                  key={college.id}
                  onClick={() => setSelectedCollege(college.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedCollege === college.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="font-semibold">{college.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Rating: {college.rating}/5
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Admission Form */}
        {selectedCollege && (
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="candidateName">Candidate Name *</Label>
                    <Input
                      id="candidateName"
                      name="candidateName"
                      value={formData.candidateName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Your intended major"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="image">Upload Photo</Label>
                    <Input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your complete address"
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Admission;
