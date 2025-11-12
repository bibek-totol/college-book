"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getCollegeById } from "@/data/colleges";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Star,
  Calendar,
  FileText,
  CheckCircle,
  Sparkles,
  FlaskConical,
  Trophy,
  ExternalLink,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

const CollegeDetails = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;
  const college = typeof id === "string" ? getCollegeById(id) : undefined;

  if (!college) {
    return (
      <div className="min-h-screen bg-gradient-background flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-6">College Not Found</h1>
          <Button onClick={() => router.push("/colleges")}>
            Back to Colleges
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navbar />

      
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/colleges">Colleges</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{college.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      
      <div className="relative h-[420px] overflow-hidden rounded-b-3xl">
        <img
          src={college.image as string}
          alt={college.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="space-y-3 text-white">
                <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
                  {college.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">{college.location}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{college.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FlaskConical className="w-5 h-5" />
                    <span className="text-sm">{college.researchProjects}+ Research Works</span>
                  </div>
                </div>
              </div>
              <Button
                className="bg-gradient-to-r from-primary to-accent font-bold group-hover:scale-105 transition-transform duration-300 cursor-pointer px-8 py-6"
                onClick={() => router.push(`/admission?college=${college.id}`)}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="admission" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:w-[600px] mx-auto">
            <TabsTrigger value="admission">Admission</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            
          </TabsList>

          
          <TabsContent value="admission" className="space-y-6 animate-fade-in">
            <Card className="p-6 md:p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Admission Process</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    Important Deadlines
                  </h3>
                  <p className="text-muted-foreground">
                    {college.admissionProcess.deadlines}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-4">Application Steps</h3>
                  <div className="space-y-3">
                    {college.admissionProcess.steps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 group"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold group-hover:bg-primary group-hover:text-white transition-colors">
                          {index + 1}
                        </div>
                        <p className="text-foreground pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-4">
                    Required Documents
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {college.admissionProcess.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    className="w-full md:w-auto bg-gradient-primary hover:shadow-hover transition-all"
                    onClick={() => router.push(`/admission?college=${college.id}`)}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Start Application
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

    
          <TabsContent value="events" className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {college.eventsDetails.map((event, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-hover transition-all group"
                >
                  {event.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  )}
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-lg">{event.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

        
          <TabsContent value="research" className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <FlaskConical className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Research Works</h2>
            </div>

            <div className="space-y-4">
              {college.researchWorks.map((research, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-hover transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {research.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {research.description}
                      </p>
                    </div>
                    {research.link && (
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={research.link}>
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

        
        </Tabs>
      </div>

      
    </div>
  );
};

export default CollegeDetails;
