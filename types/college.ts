import { StaticImageData } from "next/image";

export interface College {
  id: string;
  name: string;
  image: StaticImageData | string;
  rating: number;
  admissionDates: string;
  researchProjects: number;
  events: string[];
  research: string[];
  sports: string[];
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
