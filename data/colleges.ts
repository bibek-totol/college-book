import { College } from "@/types/college";
import stanfordImg from "@/assets/stanford.jpg";
import mitImg from "@/assets/mit.jpg";
import harvardImg from "@/assets/harvard.jpg";
import yaleImg from "@/assets/yale.jpg";
import princetonImg from "@/assets/princeton.jpg";
import columbiaImg from "@/assets/columbia.jpg";

export const colleges: College[] = [
  {
    id: "1",
    name: "Stanford University",
    image: stanfordImg,
    rating: 4.9,
    admissionDates: "Applications open: Oct 1 - Dec 15",
    researchProjects: 450,
    events: ["Annual Tech Summit", "Cultural Fest 2024", "Innovation Week"],
    research: ["AI & Machine Learning", "Biotechnology", "Quantum Computing"],
    sports: ["Basketball Champions", "Olympic Training", "Swimming Excellence"],
  },
  {
    id: "2",
    name: "MIT Boston",
    image: mitImg,
    rating: 4.8,
    admissionDates: "Early Action: Nov 1 - Jan 15",
    researchProjects: 520,
    events: ["Innovation Week", "Startup Bootcamp", "Hackathon 2024"],
    research: ["Robotics", "Quantum Computing", "Clean Energy"],
    sports: ["Rowing Team", "Track & Field Excellence", "Sailing Champions"],
  },
  {
    id: "3",
    name: "Harvard College",
    image: harvardImg,
    rating: 4.9,
    admissionDates: "Regular Decision: Dec 1 - Jan 31",
    researchProjects: 600,
    events: ["Leadership Summit", "Global Conference", "Arts Festival"],
    research: ["Law & Policy", "Medical Research", "Economics"],
    sports: ["Football Legacy", "Swimming Champions", "Crew Excellence"],
  },
  {
    id: "4",
    name: "Yale University",
    image: yaleImg,
    rating: 4.8,
    admissionDates: "Applications open: Sep 15 - Dec 31",
    researchProjects: 480,
    events: ["Drama Festival", "Research Symposium", "Global Summit"],
    research: ["Political Science", "Architecture", "Environmental Studies"],
    sports: ["Lacrosse Champions", "Soccer Excellence", "Tennis Legacy"],
  },
  {
    id: "5",
    name: "Princeton University",
    image: princetonImg,
    rating: 4.9,
    admissionDates: "Early Decision: Nov 1 - Jan 1",
    researchProjects: 420,
    events: ["Mathematics Conference", "Poetry Reading", "Science Fair"],
    research: ["Mathematics", "Physics", "Public Policy"],
    sports: ["Rugby Excellence", "Basketball Legacy", "Golf Champions"],
  },
  {
    id: "6",
    name: "Columbia University",
    image: columbiaImg,
    rating: 4.7,
    admissionDates: "Applications open: Oct 15 - Jan 5",
    researchProjects: 550,
    events: ["Film Festival", "Business Forum", "Cultural Week"],
    research: ["Journalism", "Business", "International Relations"],
    sports: ["Fencing Champions", "Wrestling Excellence", "Cross Country"],
  },
];
