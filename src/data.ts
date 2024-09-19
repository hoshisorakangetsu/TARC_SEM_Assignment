//Diploma's entryRequirements
import DiplomaComSci from "@/assets/diploma_computer_scinece.png"
import DiplomaInfoSys from "@/assets/diploma_information_system.png"
import DiplomaInfoTech from "@/assets/diploma_information_technology.png"
import DiplomaSoftwareEng from "@/assets/diploma_software_engineering.png"

//Degree's entryRequirements
import BachelorManagementMathComputing from "@/assets/bachelor_science_management_mathematics_with_computing.png"
import BachelorInteractiveSoftwareTech from "@/assets/bachelor_computer_science_interactive_software_technology.png"
import BachelorDataScience from "@/assets/bachelor_computer_science_data_science.png"
import BachelorEnterpriseInfoSystems from "@/assets/bachelor_information_systems_enterprise_information_systems.png"
import BachelorInformationSecurity from "@/assets/bachelor_information_technology_information_security.png"
import BachelorSoftwareSystemsDevelopment from "@/assets/bachelor_information_technology_software_systems_development.png"
import BachelorSoftwareEngineering from "@/assets/bachelor_software_engineering.png"
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
    outline: ["Problem Solving and Programming", "Computer Architecture", "Systems Analysis and Design", "Ethics in Computing", "Calculus and Algebra", "Database Development and Applications", "Software Development Fundamentals", "Probability and Statistics", "Fundamentals of Computer Networks", "Discrete Mathematics", "Introduction to Interface Design", "Object-Oriented Programming Techniques", "Operating Systems", "Fundamentals of Artificial Intelligence", "Introduction to Data Structures and Algorithms", "Systems and Programming Concepts", "Mobile Application Development", "Mini Project", "Parallel and Distributed Computing", "Introduction to Cybersecurity", "Industrial Training (20 weeks)"],
    progression: ["Bachelor of Science (Honours) in Management Mathematics with Computing", "Bachelor of Software Engineering (Honours)", "Bachelor of Computer Science (Honours) in Interactive Software Technology", "Bachelor of Computer Science (Honours) in Data Science", "Bachelor of Information Systems (Honours) in Enterprise Information Systems", "Bachelor of Information Technology (Honours) in Information Security", "Bachelor of Information Technology (Honours) in Software Systems Development"],
    career: ["Programmers", "Systems Analysts", "Mobile Application Developers", "Software Developers", "Database Administrator"],
    fee: "RM19,300 (Malaysian Student), RM36,100 (International Student)",
    intake: [
      {
        year: "Year 1 Intake: June",
        description: "",
      }
    ],
  },
  {
    title: "Diploma in Information Systems",
    overview: "This programme majors in business information systems. It aims to produce graduates with fundamental knowledge in information technology and its business related applications. It covers the theoretical and practical aspects of developing information systems, management, costing, accounting, electronic commerce, and mathematics. This programme is supported by case studies and computer laboratory assignments. In addition, students are exposed to part of the SAP curriculum like logistics and enterprise resource planning. Students will acquire practical skills in the C Language, HTML5, JavaScript, VB.NET, Microsoft Expression Web, Oracle Database, accounting software packages and be guided through the process of developing an information system.",
    campus: ["KL - Kuala Lumpur Main Campus", "PG - Penang Branch Campus", "PK - Perak Branch Campus"],
    duration: "2 years",
    entryRequirements: DiplomaInfoSys,
    outline: [
      "Introduction to Information Technology",
      "Programming Concepts and Design I",
      "Programming Concepts and Design II",
      "Principles of Information Systems",
      "Web Design and Development",
      "Web Systems and Technologies",
      "Systems Analysis and Design",
      "Database Development and Applications",
      "Managing Information Systems",
      "Computer Systems Architecture",
      "Electronic Commerce",
      "Enterprise Resource Planning",
      "Operating Systems",
      "Fundamentals of Computer Networks",
      "Introductory Statistics",
      "Discrete Mathematics",
      "Principles of Accounting",
      "Industrial Training",
      "Elective 1 (Choose 1): Introduction to Logistics Operations, Mobile Commerce and Marketing",
      "Elective 2 (Choose 1): Cost Accounting, Introduction to Data Science",
      "Elective 3 (Choose 1): Cloud Computing for Business, Accounting Software Packages"
    ],
    progression: [
      "Bachelor of Information Systems (Honours) in Enterprise Information Systems"
    ],
    career: [
      "Junior Programmers",
      "Junior Systems Analysts",
      "Junior SAP Support Consultants",
      "Junior IT Support Executives",
      "Junior IT Executives"
    ],
    fee: "RM17,800 (Malaysian Student), RM33,600 (International Student)",
    intake: [
      {
        year: "Year 1 Intake: June",
        description: ""
      }
    ]
  },
  {
    title: "Diploma in Information Technology",
    overview: "The Diploma in Information Technology programme is designed to equip students with the technical knowledge and skills in using technologies relevant to information systems development. Courses like Web and Mobile Systems, Web-Based Integrated Systems, Object-Oriented Programming, Introduction to Cybersecurity, Introduction to Interface Design, Information Management, Cloud Computing for Business and Fundamentals of Computer Networks are offered in addition to the foundation of computer science (problems solving and programming, computer architecture, database, systems analysis and design and operating systems) courses. Students will also have the opportunity to experience 20 weeks of industrial training in related industries. Graduates of this discipline should be able to work effectively at planning, implementing, configuring and maintaining an organisation’s computing infrastructure. They are to be prepared to succeed in roles involving planning and managing technology infrastructure.",
    campus: [
      "KL - Kuala Lumpur Main Campus",
      "PG - Penang Branch Campus",
      "PK - Perak Branch Campus",
      "JH - Johor Branch Campus",
      "PH - Pahang Branch",
      "SB - Sabah Branch"
    ],
    duration: "2 years",
    entryRequirements: DiplomaInfoTech,
    outline: [
      "Problem Solving and Programming",
      "Introduction to Interface Design",
      "Information Technology and Systems",
      "Web-Based Integrated Systems",
      "Ethics in Computing",
      "Web and Mobile Systems",
      "Cloud Computing and Business",
      "Systems Analysis and Design",
      "Object-Oriented Programming Techniques",
      "Operating Systems",
      "Computer Architecture",
      "Fundamentals of Computer Networks",
      "Information Management",
      "Database Development and Applications",
      "Introduction to Cybersecurity",
      "Calculus and Algebra",
      "Probability and Statistics",
      "Discrete Mathematics",
      "Discrete Mathematical Structures",
      "Industrial Training (20 weeks)"
    ],
    progression: [
      "Bachelor of Information Technology (Honours) in Software Systems Development",
      "Bachelor of Information Technology (Honours) in Information Security",
      "Bachelor of Information Systems (Honours) in Enterprise Information Systems",
      "Bachelor of Software Engineering (Honours)"
    ],
    career: [
      "Programmers",
      "Systems Analysts",
      "Network Support Officers",
      "IT Support Executives",
      "IT Executives",
      "Web and Mobile Developers"
    ],
    fee: "RM19,300 (Malaysian Student), RM36,100 (International Student)",
    intake: [
      {
        year: "Year 1 Intake: June",
        description: ""
      }
    ]
  },
  {
    title: "Diploma in Software Engineering",
    overview: "This programme equips students with the fundamental knowledge of software engineering with practical and analytical thinking skills in software development. It also provides students with basic managerial skills and innovation in creating business opportunities in the area of software engineering, as well as educational experience that motivates them to pursue higher level of study and life-long learning.",
    campus: ["SB - Sabah Branch"],
    duration: "2 years",
    entryRequirements: DiplomaSoftwareEng,
    outline: [
      "Problem Solving and Programming",
      "Software Engineering",
      "Calculus and Algebra",
      "Software Requirement and Design",
      "Web Design and Development",
      "Object-Oriented Programming Techniques",
      "Software Testing and Quality",
      "Database Development and Applications",
      "Computer Systems Architecture",
      "Software Maintenance",
      "Operating Systems",
      "Mini Project",
      "Introduction to Data Structures and Algorithms",
      "Discrete Mathematics",
      "Mobile Application Development",
      "Fundamentals of Computer Networks",
      "Industrial Training (20 weeks)",
      "Electives (Choose 2): Introduction to Artificial Intelligence, Introduction to Cloud Computing, Introduction to Data Science, Electronic Commerce"
    ],
    progression: [
      "Bachelor of Software Engineering (Honours)"
    ],
    career: [
      "Junior Software Engineers",
      "Junior Software Developers",
      "Junior Software Testers",
      "Junior Web Developers",
      "Junior Database Administrators",
      "Junior Systems Analysts"
    ],
    fee: "RM19,100 (Malaysian Student)",
    intake: [
      {
        year: "Year 1 Intake: June",
        description: ""
      }
    ]
  }
  
];

export const DegreeCourses: DegreeCourse[] = [
  {
    title: "Bachelor of Science (Honours) in Management Mathematics with Computing",
    overview: "Management mathematics with computing is a programme with Management Mathematics as the major, and Computing as the minor. Management Mathematics covers mathematical techniques for business management, including resource allocation and planning, optimisation, project management, quantitative decision, applied statistics, quality control and financial mathematics as well as equipping students with strong pure mathematical knowledge. Computing courses prepare students for software design and development, including skills on programming and information management. This programme also prepares graduates to branch into other disciplines for further academic pursuit such as Master in business management, statistics, and information technology. It also lays the foundation for graduates to achieve further professional qualifications in actuary, financial planning, and financial analysis.",
    campus: ["KL - Kuala Lumpur Main Campus"],
    duration: "3 years",
    entryRequirements: BachelorManagementMathComputing,
    outline: [
      "Discrete Mathematics",
      "Calculus I",
      "Calculus II",
      "Algebra",
      "Probability and Statistics",
      "Linear Algebra",
      "Advanced Calculus",
      "Numerical Methods",
      "Mathematical and Statistical Software",
      "Problem Solving and Programming",
      "Database Management",
      "Computer Organisation and Architecture",
      "Object-Oriented Programming",
      "Operating Systems",
      "IT Fundamentals",
      "Visual Programming",
      "Industrial Training (10 weeks)",
      "Project",
      "Mathematical Statistics",
      "Applied Statistics",
      "Operations Research I",
      "Operations Research II",
      "Financial Mathematics",
      "Quality Control",
      "Group Electives: Microeconomics, Macroeconomics OR Accounting Methods I, Accounting Methods II",
      "Electives (Choose 1): Further Applied Statistics, Cryptography, Advanced Financial Mathematics",
      "Electives (Choose 1): Data Science, Business Intelligence, Cloud Computing, Machine Learning"
    ],
    career: [
      "Officers in financial institutions such as banks, insurance firms, and investment houses",
      "Quantitative Analysts",
      "Quality Managers",
      "Research Officers",
      "Investment Analysts",
      "Financial Analysts",
      "Management Consultants",
      "Financial Planners and Advisors",
      "Pricing Analysts",
      "Market Risk Managers",
      "Credit Risk Managers",
      "Asset/Liability Managers",
      "IT Managers",
      "Programmers"
    ],
    fee: "RM37,200 (Malaysian Student), RM64,700 (International Student)",
    intake: [
      {
        year: "Year 1 Intake: June",
        description: ""
      },
      {
        year: "Year 2 Intake: June",
        description: ""
      }
    ]
  },
  {
    title: "Bachelor of Computer Science (Honours) in Interactive Software Technology",
    overview: "Graduates of this programme will be equipped with the technical knowledge and skills in computer science, and a further focus on the design and development of interactive software. The widespread use of interactive multimedia across all digital platforms ensure that the skill sets developed during the course of study of this programme are highly sought after upon graduation. These highly adaptable skills can be utilised for the development of mobile applications, video games, simulators, data visualisation, VR/AR/MR experiences, educational and training materials, as well as other interactive multimedia applications. Students will study courses related to game development and programming, as well as game design and graphics programming. Students will also develop a strong foundation in computer science fields like artificial intelligence and human computer interaction. Students will have an opportunity to work with the industry through their 6 months industrial training and carry out real-life projects on interactive software development. All such training will add value to their employment opportunities and career development.",
    campus: ["KL - Kuala Lumpur Main Campus"],
    duration: "3 years",
    entryRequirements: BachelorInteractiveSoftwareTech,
    outline: [
      "Problem Solving and Programming",
      "Computer Game Studies",
      "Database Management",
      "Computer Organisation and Architecture",
      "Object-Oriented Programming",
      "Object-Oriented Analysis and Design",
      "Operating Systems",
      "Data Structures and Algorithms",
      "Software Engineering",
      "Graphics Programming",
      "Computer Game Programming",
      "Social and Professional Issues",
      "Artificial Intelligence",
      "Fundamentals of Computer Networks",
      "Human Computer Interaction",
      "Discrete Mathematics",
      "Probability and Statistics",
      "Mathematics for Games Technology",
      "Systems Analysis and Design",
      "3D Game Development",
      "Virtual Reality",
      "Computer Games Technology",
      "Computer Game Design",
      "Software Development Fundamentals",
      "Mobile Application Development",
      "Parallel and Distributed Computing",
      "Information Assurance and Security",
      "Project I",
      "Project II",
      "Industrial Training (6 months)"
    ],
    career: [
      "Games Designers",
      "Games Programmers",
      "Games Software Engineers",
      "Games Producers",
      "Games Testers",
      "Technical Lead",
      "Web Designers",
      "Multimedia Developers",
      "Software Developers",
      "Mobile Application Developers",
      "Systems Analysts"
    ],
    fee: "RM38,400 (Malaysian Student), RM66,600 (International Student)",
    intake: [
      {
        year: "Year 1 Intake: June",
        description: ""
      },
      {
        year: "Year 2 Intake: June",
        description: ""
      }
    ]
  },
  {
    title: "Bachelor of Computer Science (Honours) in Data Science",
    overview: "This programme is designed to train students in both computer science and data science, which prepares them well for data professionals or data scientist career pathway. Graduates of this programme are highly demanded in the increasingly data-driven world where their main role is to make sense of big data to improve business processes, optimise resources, increase profits, increase customer satisfaction, personalised experience, automation, and so on. Artificial Intelligence, Machine Learning, Data Science, Data Visualisation, Data Engineering, Data Warehouse Technology and Statistics for Data Science are some of the specialisation courses covered in this programme in addition to the core computing courses such as Programming, Database Management and Computer Networks. Students will have an opportunity to work with the industry through their 6 months industrial training and carry out real-life projects on data science and computer science. All such training will add value to their qualification and increase their employment opportunities. Upon completion of this program, the students will also obtain SAS Joint Certificate specialised in Data Science and Machine Learning.",
    campus: ["KL - Kuala Lumpur Main Campus", "PG - Penang Branch Campus"],
    duration: "3 years",
    entryRequirements: BachelorDataScience,
    outline: [
      "Problem Solving and Programming",
      "Database Management",
      "Introduction to Computer Security",
      "Probability and Statistics",
      "System Analysis and Design",
      "Discrete Mathematics",
      "Fundamentals of Computer Networks",
      "Computer Organisation and Architecture",
      "Object-Oriented Programming",
      "Operating Systems",
      "Statistics for Data Science",
      "Software Engineering",
      "Data Science",
      "Data Visualisation",
      "Data Engineering",
      "Machine Learning",
      "Data Structures and Algorithms",
      "Artificial Intelligence",
      "Project I",
      "Project II",
      "Data Warehouse Technology",
      "Industrial Training (24 weeks)",
      "Elective 1 (Choose 1): Algebra and Calculus, Advanced Discrete Mathematics",
      "Elective 2 (Choose 1): Natural Language Processing, Web-Based Integrated Systems",
      "Elective 3 (Choose 1): Internet of Things, Graphics Programming",
      "Elective 4 (Choose 1): Image Processing, Blockchain Application Development",
      "Elective 5 (Choose 1): Advanced Database Management, Mobile Application Development",
      "Elective 6 (Choose 1): Cloud Computing, Distributed Systems and Parallel Computing",
      "Free Electives (Choose 1): Japanese Language I, French Language I, Korean Language I"
    ],
    career: [
      "Data Scientists",
      "Data Engineers",
      "Data Analysts",
      "Data Modelling Engineers",
      "Software Developers",
      "Mobile Application Developers",
      "Computer Science Researchers",
      "Machine Learning Engineers"
    ],
    fee: "RM37,500 (Malaysian Student), RM65,200 (International Student)",
    intake: [
      {
        year: "Year 1 Intake:",
        description: "February (KL); June (KL, PG); November (KL)"
      },
      {
        year: "Year 2 Intake:",
        description: "June (KL, PG)"
      }
    ]
  },
  {
    title: "Bachelor of Information Systems (Honours) in Enterprise Information Systems",
    overview: "Information systems are the heart of many organisations that support their daily business processes and in turn promote business growth. As the size and demand of information systems has grown tremendously, many of the business functions like sales & marketing, finance & accounting, manufacturing & processes, human resources, supply chain management, customer relationship management, knowledge management and many other business functions are integrated into enterprise information systems to further improve organisational performance. This programme is designed to equip students with the ability to solve practical problems in the implementation of enterprise information systems in business organisations. In addition to fundamentals of computing, the programme covers Business and Information Systems, Systems Analysis and Design, Enterprise Systems, Enterprise Resource Planning, Data Warehouse Technology, Business Intelligence, Business Process Management and Information Systems Implementation. Students will have an opportunity to work with the industry through their 6 months industrial training and to carry out real-life projects on software development, implementation of enterprise information systems and data analysis. All such training will add value to their qualification and later to their employment opportunities.",
    campus: ["KL - Kuala Lumpur Main Campus"],
    duration: "3 years",
    entryRequirements: BachelorEnterpriseInfoSystems,
    outline: [
      "Problem Solving and Programming",
      "Database Management",
      "Business and Information Systems",
      "Introduction to Computer Security",
      "Systems Analysis and Design",
      "Fundamentals of Computer Networks",
      "Operating Systems",
      "Computer Organisation and Architecture",
      "Object-Oriented Programming",
      "Information Technology Infrastructure",
      "Business Process Management",
      "Social and Professional Issues",
      "Advanced Database Management",
      "Web Programming",
      "Information Systems Implementation",
      "IS Strategy and Management",
      "Database Administration",
      "Software Project Management",
      "Project I",
      "Project II",
      "Industrial Training (6 months)",
      "Specialisation: IT Fundamentals, Web Design and Development, Enterprise Systems, Object-Oriented Analysis and Design, Artificial Intelligence, Enterprise Resource Planning, Data Warehouse Technology, Business Intelligence",
      "Free Electives (Choose 1): Music Appreciation, Principles of Accounting, Business Organisation and Management"
    ],
    career: [
      "ERP Consultants",
      "Business and Systems Analysts",
      "Business Process Consultants",
      "Business Intelligence Specialists",
      "Data Warehouse Developers",
      "IT Consultants",
      "IT Managers",
      "Programmers",
      "Web Designers",
      "Database Administrators"
    ],
    fee: "RM37,500 (Malaysian Student), RM65,200 (International Student)",
    intake: [
      {
        year: "Year 1 Intake: June",
        description: ""
      },
      {
        year: "Year 2 Intake: June",
        description: ""
      }
    ]
  },
  {
    title: "Bachelor of Information Technology (Honours) in Information Security",
    overview: "This programme is designed to equip students with technical abilities and knowledge of the information security in the areas of network and Internet Security, Information Assurance and Governance, Systems Administration and secure software development besides giving students the opportunity to learn and explore various penetration testing, vulnerability assessment, forensics tools and techniques. Students will learn how to prevent, detect and defend organisations’ assets from internal and external threats. Students will also have an opportunity to work with information security related industry through their 6 months industrial training and to carry out real-life projects which are relevant to information security domains. Such training will add value to their qualification and later to their employment opportunities and career development.",
    campus: ["KL - Kuala Lumpur Main Campus"],
    duration: "3 years",
    entryRequirements: BachelorInformationSecurity,
    outline: [
      "Problem Solving and Programming",
      "Database Management",
      "Computer Organisation and Architecture",
      "IT Fundamentals",
      "Systems Analysis and Design",
      "Discrete Structures",
      "Fundamentals of Computer Networks",
      "Operating Systems",
      "Object-Oriented Programming",
      "Human Computer Interaction",
      "Object-Oriented Analysis and Design",
      "Switching and Routing Technologies",
      "Information Technology Infrastructure",
      "Web and Mobile Systems",
      "Introduction to Internet Security",
      "Advanced Database Management",
      "Integrative Programming",
      "Cloud Computing",
      "Software Project Management",
      "Project I",
      "Project II",
      "Industrial Training (6 months)",
      "Web Design and Development",
      "Artificial Intelligence",
      "Information Assurance and Security",
      "Enterprise Networking",
      "Software Security",
      "Digital Forensics",
      "Vulnerability Assessment and Penetration Testing",
      "Free Electives (Choose 1): Japanese Language I, French Language I, Korean Language I"
    ],
    career: [
      "Information Security Analysts",
      "Information Security Consultants",
      "Information Security Managers",
      "Information Security Engineers",
      "Information Security Administrators",
      "Information Security Auditors",
      "Forensics Analysts",
      "Forensics Investigators",
      "Security Software Developers",
      "Mobile Application Developers",
      "Network Security Engineers"
    ],
    fee: "RM37,800 (Malaysian Student), RM65,700 (International Student)",
    intake: [
      {
        year: "Year 1 Intake: June, November",
        description: ""
      },
      {
        year: "Year 2 Intake: June, November",
        description: ""
      }
    ]
  },
  {
    title: "Bachelor of Information Technology (Honours) in Software Systems Development",
    overview: "The aim of this programme is to produce and equip graduates with in-depth knowledge and skills that are essential to work as professionals in the software systems development and computer networking sectors. Students graduating from this programme will be capable of developing software systems in various platforms to fulfill the needs and requirements from organisations using appropriate software development methodologies and software project management techniques. In addition, the students will also be capable to design, configure and maintain computer networks in organisations. Students will have an opportunity to work with the industry through their 6 months industrial training and to carry out real-life projects in software systems development, network communications or database management. All such training will add value to their qualification and later to their employment opportunities.",
    campus: [
      "KL - Kuala Lumpur Main Campus",
      "PG - Penang Branch Campus",
      "PK - Perak Branch Campus",
      "JH - Johor Branch Campus",
      "PH - Pahang Branch",
      "SB - Sabah Branch"
    ],
    duration: "3 years",
    entryRequirements: BachelorSoftwareSystemsDevelopment,
    outline: [
      "IT Fundamentals",
      "Systems Analysis and Design",
      "Integrative Programming",
      "Fundamentals of Computer Networks",
      "Human Computer Interaction",
      "Cloud Computing",
      "Problem Solving and Programming",
      "Database Management",
      "Object-Oriented Programming",
      "Object-Oriented Analysis and Design",
      "Data Structures and Algorithms",
      "Mobile Application Development",
      "Switching and Routing Technologies",
      "Enterprise Networking",
      "Software Engineering",
      "Artificial Intelligence",
      "Internet of Things",
      "Advanced Database Management",
      "Software Project Management",
      "Computer Organisation and Architecture",
      "Discrete Structures",
      "Operating Systems",
      "Web-Based Integrated Systems",
      "Information Technology Infrastructure",
      "Web and Mobile Systems",
      "Introduction to Internet Security",
      "Software Quality Assurance and Testing",
      "Project I",
      "Project II",
      "Industrial Training (6 months)"
    ],
    career: [
      "Programmers",
      "Web Developers",
      "Multimedia Developers",
      "Mobile Application Developers",
      "Systems Analysts",
      "Software Engineers",
      "Database Administrators",
      "Network Engineers",
      "IT Consultants",
      "IT Managers",
      "IoT Developers"
    ],
    fee: "RM37,800 (Malaysian Student), RM65,700 (International Student)",
    intake: [
      {
        year: "Year 1 Intake:",
        description: "February (KL); June (KL, PG, PK, JH, PH, SB); November (KL, PG, PK, PH)"
      },
      {
        year: "Year 2 Intake:",
        description: "June (KL, PG, PK, JH, PH, SB); November (KL, PG)"
      }
    ]
  },
  {
    title: "Bachelor of Software Engineering (Honours)",
    overview: "Graduates of this programme will be able to develop, manage and maintain high quality software in a systematic, controlled and efficient manner through software engineering methodology inclusive of software requirements engineering, software design, software testing, software quality, software project management, software security & safety, software maintenance, and software engineering ethics & professionalism. In addition, graduates of this programme have in-depth knowledge and skills in formal methods in software engineering, human computer interaction, mobile application development, web-based integrated systems, blockchain application development, advanced database management, agile software development, data science, image processing, cloud computing, internet security, advanced discrete mathematics as part of their elective choices. Graduates of this programme will also have powerful skills of technical, process, communication, and teamwork to be instantaneously productive in the software engineering industry.",
    campus: ["KL - Kuala Lumpur Main Campus", "PG - Penang Branch Campus"],
    duration: "3 years",
    entryRequirements: BachelorSoftwareEngineering,
    outline: [
      "Problem Solving and Programming",
      "Database Management",
      "Software Engineering",
      "Computer Organisation and Architecture",
      "Systems Analysis and Design",
      "Operating Systems",
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "Fundamentals of Computer Networks",
      "Artificial Intelligence",
      "Software Testing",
      "Software Quality and Measurement",
      "Software Requirements Engineering",
      "Software Design and Architecture",
      "Software Engineering Ethics and Professionalism",
      "Software Security and Safety",
      "Software Project Management",
      "Software Maintenance",
      "Collaborative Development",
      "Probability and Statistics",
      "Discrete Mathematics",
      "Project I",
      "Project II",
      "Industrial Training (6 months)",
      "Electives (Choose 6): Formal Methods for Software Engineering, Human Computer Interaction, Introduction to Internet Security, Web-Based Integrated Systems, Advanced Discrete Mathematics, Advanced Database Management, Mobile Application Development, Data Science, Cloud Computing, Agile Software Development, Blockchain Application Development, Image Processing"
    ],
    career: [
      "Software Engineers",
      "Software Testers",
      "Software Quality Assurance Engineers",
      "Software Developers",
      "Software Architects",
      "Systems Analysts",
      "Web Developers",
      "Mobile Application Developers",
      "IT Consultants",
      "IT and Project Managers",
      "Programmers"
    ],
    fee: "RM37,800 (Malaysian Student), RM65,700 (International Student)",
    intake: [
      {
        year: "Year 1 Intake:",
        description: "February (KL); June (KL, PG); November (KL)"
      },
      {
        year: "Year 2 Intake:",
        description: "June (KL, PG)"
      }
    ]
  }    
];
