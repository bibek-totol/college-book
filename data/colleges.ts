import { College } from "@/types/college";
import stanfordImg from "@/assets/stanford.jpg";
import mitImg from "@/assets/mit.jpg";
import harvardImg from "@/assets/harvard.jpg";
import yaleImg from "@/assets/yale.jpg";
import princetonImg from "@/assets/princeton.jpg";
import columbiaImg from "@/assets/columbia.jpg";


export const colleges: College[] = [
  {
    id: "stanford",
    name: "Stanford University",
    rating: 4.9,
    image: stanfordImg.src,
    location: "Stanford, California, USA",
    admissionDates: "Applications open: Oct 1 - Dec 15",
    events: ["Annual Tech Summit", "Cultural Fest 2024", "Innovation Week"],
    research: ["AI & Machine Learning", "Biotechnology", "Quantum Computing"],
    sports: ["Basketball Champions", "Olympic Training", "Swimming Excellence"],
    heroImages: [
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=1200",
    ],
    researchProjects: 1250,
    admissionProcess: {
      steps: [
        "Complete online application form",
        "Submit academic transcripts",
        "Provide letters of recommendation",
        "Write personal statement essay",
        "Submit standardized test scores",
        "Attend interview (if selected)",
      ],
      deadlines: "Early Action: Nov 1 | Regular Decision: Dec 15",
      documents: [
        "High school transcripts",
        "SAT/ACT scores",
        "2 recommendation letters",
        "Personal essay",
        "Application fee or waiver",
      ],
    },
    eventsDetails: [
      {
        name: "Annual Tech Summit 2024",
        date: "March 15-17, 2024",
        description:
          "Join industry leaders and innovators for three days of cutting-edge technology discussions, workshops, and networking opportunities.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
      },
      {
        name: "Cultural Fest 2024",
        date: "April 10-12, 2024",
        description:
          "Celebrate diversity with performances, exhibitions, and food from around the world. A vibrant showcase of student talent.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600",
      },
    ],
    researchWorks: [
      {
        title: "Advancing Neural Network Architecture for Climate Prediction",
        description:
          "Groundbreaking research using deep learning to improve climate forecasting accuracy by 40%.",
        link: "#",
      },
      {
        title: "Quantum Computing Applications in Drug Discovery",
        description:
          "Pioneering work that reduces drug development time using quantum algorithms.",
        link: "#",
      },
    ],
    sportsDetails: [
      {
        name: "Basketball",
        achievements: "NCAA Champions 2023, 15 Conference Titles",
        icon: "🏀",
      },
      {
        name: "Swimming",
        achievements: "Olympic Gold Medalists, 25 National Records",
        icon: "🏊",
      },
    ],
  },
  {
    id: "mit",
    name: "MIT Boston",
    rating: 4.8,
    image: mitImg.src,
    location: "Cambridge, Massachusetts, USA",
    admissionDates: "Early Action: Nov 1 - Jan 15",
    events: ["Innovation Week", "Startup Bootcamp", "Hackathon 2024"],
    research: ["Robotics", "Quantum Computing", "Clean Energy"],
    sports: ["Rowing Team", "Track & Field Excellence", "Sailing Champions"],
    heroImages: [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200",
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1200",
    ],
    researchProjects: 1480,
    admissionProcess: {
      steps: [
        "Submit MIT application",
        "Complete maker portfolio",
        "Provide academic records",
        "Submit test scores",
        "Interview with alumni",
        "Financial aid application",
      ],
      deadlines: "Early Action: Nov 1 | Regular Decision: Jan 15",
      documents: [
        "Academic transcripts",
        "Standardized test scores",
        "Maker portfolio",
        "Essays and short answers",
        "2 teacher evaluations",
      ],
    },
    eventsDetails: [
      {
        name: "Innovation Week 2024",
        date: "February 20-24, 2024",
        description:
          "A week dedicated to breakthrough innovations, featuring guest speakers from leading tech companies and research presentations.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
      },
      {
        name: "Startup Bootcamp",
        date: "March 15-16, 2024",
        description:
          "Intensive program for aspiring entrepreneurs with mentorship from successful founders and VC firms.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
      },
    ],
    researchWorks: [
      {
        title: "Advanced Robotics for Space Exploration",
        description:
          "Developing autonomous robots capable of operating in extreme environments on Mars.",
        link: "#",
      },
      {
        title: "Clean Energy Storage Solutions",
        description:
          "Revolutionary battery technology that increases energy density by 300%.",
        link: "#",
      },
    ],
    sportsDetails: [
      {
        name: "Rowing",
        achievements: "Head of the Charles Winners, 20 Regional Titles",
        icon: "🚣",
      },
      {
        name: "Sailing",
        achievements: "National Champions, International Regattas",
        icon: "⛵",
      },
    ],
  },
  {
    id: "harvard",
    name: "Harvard College",
    rating: 4.9,
    image: harvardImg.src,
    location: "Cambridge, Massachusetts, USA",
    admissionDates: "Regular Decision: Dec 1 - Jan 31",
    events: ["Leadership Summit", "Global Conference", "Arts Festival"],
    research: ["Law & Policy", "Medical Research", "Economics"],
    sports: ["Football Legacy", "Swimming Champions", "Crew Excellence"],
    heroImages: [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=1200",
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200",
    ],
    researchProjects: 1650,
    admissionProcess: {
      steps: [
        "Complete Common Application",
        "Submit Harvard supplement",
        "Academic transcripts",
        "Standardized testing",
        "Optional alumni interview",
        "Financial aid forms",
      ],
      deadlines: "Early Action: Nov 1 | Regular Decision: Jan 31",
      documents: [
        "High school transcripts",
        "Test scores (optional)",
        "3 letters of recommendation",
        "Personal essays",
        "School report",
      ],
    },
    eventsDetails: [
      {
        name: "Leadership Summit 2024",
        date: "April 5-7, 2024",
        description:
          "Bringing together world leaders, policymakers, and students to discuss global challenges and leadership.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600",
      },
    ],
    researchWorks: [
      {
        title: "Healthcare Policy Reform Analysis",
        description:
          "Comprehensive study on healthcare systems worldwide and policy recommendations.",
        link: "#",
      },
    ],
    sportsDetails: [
      {
        name: "Football",
        achievements: "Ivy League Champions, Historic Rivalry Wins",
        icon: "🏈",
      },
    ],
  },



  {
    id: "yale",
    name: "Yale University",
    rating: 4.8,
    image: yaleImg.src,
    location: "New Haven, Connecticut, USA",
    admissionDates: "Applications open: Aug 1 - Jan 2",
    events: ["Global Scholars Conference", "Art Week", "Debate Championship"],
    research: ["Political Science", "Medical Research", "Climate Policy"],
    sports: ["Ice Hockey", "Soccer", "Rowing"],
    heroImages: [
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=1200",
      "https://images.unsplash.com/photo-1573496529574-be85d6a60704?w=1200",
    ],
    researchProjects: 1400,
    admissionProcess: {
      steps: [
        "Submit Coalition or Common Application",
        "Provide school transcripts",
        "Teacher evaluations",
        "Personal essay",
        "Financial aid documents",
      ],
      deadlines: "Single Choice Early Action: Nov 1 | Regular Decision: Jan 2",
      documents: [
        "High school transcripts",
        "Recommendation letters",
        "Personal statement",
        "Test scores (optional)",
      ],
    },
    eventsDetails: [
      {
        name: "Global Scholars Conference",
        date: "June 10-12, 2024",
        description:
          "Brings together international students to discuss solutions for global sustainability and education challenges.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
      },
    ],
    researchWorks: [
      {
        title: "Sustainable Energy Systems",
        description:
          "Yale researchers developing efficient solar power grids for developing nations.",
        link: "#",
      },
    ],
    sportsDetails: [
      {
        name: "Rowing",
        achievements: "National Champions 2023, Ivy League Winners",
        icon: "🚣",
      },
      {
        name: "Ice Hockey",
        achievements: "4-time Frozen Four Finalists",
        icon: "🏒",
      },
    ],
  },
  {
    id: "princeton",
    name: "Princeton University",
    rating: 4.9,
    image: princetonImg.src,
    location: "Princeton, New Jersey, USA",
    admissionDates: "Applications open: Sept 1 - Jan 1",
    events: ["Innovation Fair", "Global Leadership Forum"],
    research: ["Physics", "Mathematics", "Public Policy"],
    sports: ["Football", "Tennis", "Track & Field"],
    heroImages: [
      "https://images.unsplash.com/photo-1588613259215-48ad0bdbf1f3?w=1200",
      "https://images.unsplash.com/photo-1604079622923-4a5d19b59b67?w=1200",
    ],
    researchProjects: 1320,
    admissionProcess: {
      steps: [
        "Submit Princeton-specific application",
        "Provide essays and graded papers",
        "Submit standardized test scores",
        "Interview (if offered)",
      ],
      deadlines: "Single Choice Early Action: Nov 1 | Regular Decision: Jan 1",
      documents: [
        "High school transcript",
        "School report",
        "2 teacher recommendations",
        "Personal essay",
      ],
    },
    eventsDetails: [
      {
        name: "Innovation Fair 2024",
        date: "March 10, 2024",
        description:
          "Annual fair showcasing student inventions, research, and entrepreneurship.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
      },
    ],
    researchWorks: [
      {
        title: "Quantum Gravity Exploration",
        description:
          "Leading advancements in theoretical physics bridging general relativity and quantum mechanics.",
        link: "#",
      },
    ],
    sportsDetails: [
      {
        name: "Football",
        achievements: "Ivy League Champions 2023",
        icon: "🏈",
      },
      {
        name: "Tennis",
        achievements: "National Collegiate Semi-Finalists",
        icon: "🎾",
      },
    ],
  },
  {
    id: "columbia",
    name: "Columbia University",
    rating: 4.8,
    image: columbiaImg.src,
    location: "New York City, USA",
    admissionDates: "Applications open: Aug 1 - Jan 1",
    events: ["Tech for Good Expo", "Media & Journalism Week", "Cultural Night"],
    research: ["Data Science", "Media Studies", "Climate Change"],
    sports: ["Basketball", "Fencing", "Soccer"],
    heroImages: [
      "https://images.unsplash.com/photo-1542144612-1bf75e6e5dcb?w=1200",
      "https://images.unsplash.com/photo-1581091870622-70ae5ce3e1fd?w=1200",
    ],
    researchProjects: 1550,
    admissionProcess: {
      steps: [
        "Submit Coalition or Common Application",
        "Provide essays and activity list",
        "Submit recommendation letters",
        "Interview (optional)",
      ],
      deadlines: "Early Decision: Nov 1 | Regular Decision: Jan 1",
      documents: [
        "Transcripts",
        "Standardized test scores",
        "2 teacher recommendations",
        "Personal essay",
      ],
    },
    eventsDetails: [
      {
        name: "Tech for Good Expo",
        date: "May 10-12, 2024",
        description:
          "A platform showcasing socially impactful technology startups from students and alumni.",
        image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=600",
      },
    ],
    researchWorks: [
      {
        title: "AI for Journalism",
        description:
          "Exploring the intersection of artificial intelligence and media ethics.",
        link: "#",
      },
    ],
    sportsDetails: [
      {
        name: "Basketball",
        achievements: "Regional Champions, NCAA Top 10",
        icon: "🏀",
      },
      {
        name: "Fencing",
        achievements: "National Champions, 25 Medals",
        icon: "🤺",
      },
    ],
  },
];


export const getCollegeById = (id: string): College | undefined => {
  return colleges.find((college) => college.id === id);
};

