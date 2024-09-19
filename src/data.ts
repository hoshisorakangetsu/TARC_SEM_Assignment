export interface Course {
  title: string;
  overview: string;
  campus: string[];
  intake: { year: string; description: string }[];
  duration: string;
  entryRequirements: string;
  outline: string[];
  progression: string[];
  career: string[];
  fee: string;
}

export const DiplomaCourses: Course[] = [
  {
    title: "Diploma in Computer Science",
    overview: "",
    campus: [],
    duration: "",
    entryRequirements: "",
    outline: [],
    progression: [],
    career: [],
    fee: "",
    intake: [
      {
        year: "Year 1 Intake:",
        description: "February (KL); June (KL, PG); November (KL)",
      },
      {
        year: "Year 2 Intake:",
        description: "June (KL, PG)",
      },
    ],
  },
  {
    title: "Diploma in Information Technology",
    overview: "",
    campus: [],
    duration: "",
    entryRequirements: "",
    outline: [],
    progression: [],
    career: [],
    fee: "",
    intake: [],
  },
  {
    title: "Diploma in Information Technology",
    overview: "",
    campus: [],
    duration: "",
    entryRequirements: "",
    outline: [],
    progression: [],
    career: [],
    fee: "",
    intake: [],
  },
];

export const DegreeCourses: Course[] = [
  {
    title: "Bachelor Degree in Computer Science",
    overview: "",
    campus: [],
    duration: "",
    entryRequirements: "",
    outline: [],
    progression: [],
    career: [],
    fee: "",
    intake: [],
  },
  {
    title: "Bachelor Degree in Information Technology",
    overview: "",
    campus: [],
    duration: "",
    entryRequirements: "",
    outline: [],
    progression: [],
    career: [],
    fee: "",
    intake: [],
  },
  {
    title: "Bachelor Degree in Information Technology",
    overview: "",
    campus: [],
    duration: "",
    entryRequirements: "",
    outline: [],
    progression: [],
    career: [],
    fee: "",
    intake: [],
  },
];
