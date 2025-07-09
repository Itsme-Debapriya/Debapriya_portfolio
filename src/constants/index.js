// contains all constants to be used throughout the project
// dont' remove anything from here if not sure

import Coursera from "../assets/icons/Coursera.svg";
import Guvi from "../assets/icons/Guvi.png";
import ibm from "../assets/icons/ibm.svg";
import Tata from "../assets/icons/Tata.svg";
import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  react,
  sass,
  tailwindcss,
  typescript,
} from "../assets/icons";
import coding from "../assets/icons/coding.svg";
export { coding, Coursera, Guvi, ibm, Tata };

// sidebar links
export const SIDEBAR_LINKS = [
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

// skills
export const SKILLS = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

// site name
export const SITE_NAME = "Debapriya Dey";

// experiences
export const EXPERIENCES = [
  {
    title: "IBM Internship",
    company_name: "Edunet Foundation (IBM)",
    icon: ibm,
    iconBg: "#accbe1",
    date: "July 2024 - August 2024",
    points: [
      "4-week Internship, leveraging SkillsBuild & IBM Cloud Platform in Emerging Technologies (AI & Cloud)",
      "IBM Cloud (Watson Studio) + Data Analytics",
      "Model Building (Algorithm Explanation) Auto AI + Assignment",
      "NLP/GenAI/LLM mode",
    ],
  },
  {
    title: "Data Visualisation",
    company_name: "Forage (TATA) ",
    icon: Tata,
    iconBg: "#fbc3bc",
    date: "December 2024",
    points: [
      "Data Visualisation: Transforming Data into Actionable Insights",
      "Exploring data visualization techniques to present complex data in an understandable format.",
      "Hands-on experience with tools and libraries for effective data visualization.",
    ],
  },
  {
    title: "Generative AI",
    company_name: "GUVI",
    icon: Guvi,
    iconBg: "#b7e4c7",
    date: "september 2024",
    points: [
      "Generative AI: Building Intelligent Systems with Advanced Algorithms",
      "Exploring the capabilities of Generative AI in creating innovative solutions.",
      "Hands-on experience with AI models and their applications in real-world scenarios.",
    ],
  },
  {
    title: "Introduction to Git and GitHub",
    company_name: "Coursera",
    icon: Coursera,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Introduction to Git and GitHub: Mastering Version Control for Collaborative Development",
      "Learning the fundamentals of Git and GitHub for effective version control.",
      "Hands-on experience with branching, merging, and collaboration in software projects.",
    ],
  },
];

// projects
export const PROJECTS = [
  {
    iconUrl: coding,
    theme: "btn-back-red",
    name: "Mutual Funds MERN Stack Web Application",
    description:
      "A comprehensive mutual funds investment platform built with the MERN stack (MongoDB, Express.js, React, Node.js) and Tailwind CSS.",
    link: "https://github.com/Itsme-Debapriya/mutual-funds-app.git",
  },
  {
    iconUrl: coding,
    theme: "btn-back-green",
    name: "Book-Store---App",
    description:
      "A full-stack web application for browsing, buying, and managing books. Built to demonstrate clean architecture, responsive design, and seamless user experiences for both customers and admins.",
    link: "https://github.com/Itsme-Debapriya/Book-Store---App.git",
  },
  {
    iconUrl: coding,
    theme: "btn-back-pink",
    name: "Edu Verse (E-learning Website)",
    description:
      "Our Educational Website would provide all the education related stuffs: Notes, Sample Papers, Online Video Lectures and courses to crack competitiveexams like JEE-Main, JEE-Advanced, GATE, etc. Students can clear their doubts by sending their questions to our website. We have added Quizzes for Students who are willing to solve problems on different topics. We have also added Interview questions for students who are preparing for placements.",
    link: "https://itsme-debapriya.github.io/Eduverse-main/",
  },
  {
    iconUrl: coding,
    theme: "btn-back-black",
    name: "Responsive Landing Page",
    description:
      "A sleek and modern responsive landing page built with HTML, CSS, and JavaScript. Designed for fast performance, cross-device compatibility, and clean UI/UX — perfect for product showcases, startups, or portfolios.",
    link: "https://itsme-debapriya.github.io/Responsive_Landing_Page/",
  },
  {
    iconUrl: coding,
    theme: "btn-back-yellow",

    name: "Theatre ticket booking (Fully Responsive)",
    description:
      "A responsive, interactive web application for selecting and booking theater seats by section with real-time price calculation, theme customization, and persistent user preferences.",
    link: "https://itsme-debapriya.github.io/Sit-Selection-ui/",
  },
];
