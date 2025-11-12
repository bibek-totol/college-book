import { StaticImageData } from "next/image";

export interface College {
  id: string;
  name: string;
  rating: number;
  image: string | StaticImageData;
  location: string;
  admissionDates: string;
  events: string[];
  research: string[];
  sports: string[];
  heroImages: string[];
  admissionProcess: {
    steps: string[];
    deadlines: string;
    documents: string[];
  };
  eventsDetails: {
    name: string;
    date: string;
    description: string;
    image?: string;
  }[];
  researchWorks: {
    title: string;
    description: string;
    link?: string;
  }[];
  sportsDetails: {
    name: string;
    achievements: string;
    icon: string;
  }[];
  researchProjects: number;
}

export interface Admission {
  id: string;
  collegeId: string;
  collegeName: string;
  candidateName: string;
  subject: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  image?: string;
}

export interface Review {
  id: string;
  admissionId: string;
  rating: number;
  comment: string;
  studentName: string;
  collegeName: string;
  date: string;
}
