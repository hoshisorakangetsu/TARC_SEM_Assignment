import DiplomaComSci from "@/assets/diploma_computer_scinece.png"

export interface DiplomaCourse {
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

export type DegreeCourse = Omit<DiplomaCourse, "progression">

export const DiplomaCourses: DiplomaCourse[] = [
  {
    title: "Diploma in Computer Science",
    overview: "The Diploma in Computer Science programme is designed to equip students with both theoretical knowledge and practical skills in the analysis, design, and development of software and applications. Students will take courses such as Fundamentals of Artificial Intelligence, Introduction to Data Structures and Algorithms, and Parallel and Distributed Computing. They will also study foundational topics that include operating systems, computer networks, computer architecture, programming techniques, databases, and discrete mathematics which are essential for a well-rounded education in computer science.  Additionally, the program includes 20 weeks of industrial training, providing students with valuable hands-on experience and exposure to real-world applications in the industry. This practical experience can significantly enhance their qualifications and improve their employment prospects.",
    campus: ["KL - Kuala Lumpur Main Campus", "PG - Penang Branch Campus", "JH - Johor Branch Campus"],
    duration: "2 years",
    entryRequirements: DiplomaComSci,
    outline: ["Problem Solving and Programming", "Computer Architecture", "Systems Analysis and Design", "Ethics in Computing", "Calculus and Algebra", "Database Development and Applications"],
    progression: ["Bachelor of Science (Honours) in Management Mathematics with Computing"],
    career: ["Programmers"],
    fee: "RM19,300 (Malaysian Student), RM36,100 (International Student)",
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

export const DegreeCourses: DegreeCourse[] = [
  {
    title: "Bachelor Degree in Computer Science",
    overview: "",
    campus: [],
    duration: "",
    entryRequirements: "",
    outline: [],
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
    career: [],
    fee: "",
    intake: [],
  },
];
