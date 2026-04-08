import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nausea,
  leadership,
  academic,
  software_dev,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Cybersecurity Expert",
    icon: backend,
  },
  {
    title: "Machine Learning (ML)",
    icon: mobile,
  },
  {
    title: "Deep Learning (DL)",
    icon: web,
  },
  {
    title: "Project Management",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Cybersecurity",
    icon: git,
  },
  {
    name: "Python",
    icon: nodejs,
  },
  {
    name: "C++",
    icon: typescript,
  },
  {
    name: "OOP",
    icon: threejs,
  },
  {
    name: "AI / ML",
    icon: mongodb,
  },
  {
    name: "Deep Learning",
    icon: reactjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Project Lead (Car Wheels Platform)",
    companyName: "Self-Project",
    icon: leadership,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Leading the development of a car marketplace application similar to PakWheels.",
      "Implementing modular architecture to handle dealership listings and user inquiries.",
      "Managing the dealership logic and ensuring seamless software dealership integration.",
      "Focusing on the management side to oversee project timelines and technical execution.",
    ],
  },
  {
    title: "Project Management System Developer",
    companyName: "Academic Project",
    icon: academic,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Built a robust management system tailored for organizational efficiency.",
      "Implemented complex logic to handle task assignment and progress tracking.",
      "Applied management principles to the software design phase for better user experience.",
    ],
  },
  {
    title: "Python Game Developer",
    companyName: "Self-Project",
    icon: software_dev,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Developed a suite of interactive games using Python and advanced OOP techniques.",
      "Focused on logic optimization and creative game mechanics.",
      "Demonstrated proficiency in Pythonic patterns and software architecture.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Muaz's leadership on the Car Wheels project was instrumental in bringing a professional dealership feel to the software.",
    name: "Project Associate",
    designation: "Peer",
    company: "CS Department",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "His deep understanding of OOP and Python allowed us to build highly scalable game logic very quickly.",
    name: "Collaborator",
    designation: "Developer",
    company: "Open Source",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "AI Nausea Prediction",
    description:
      "An advanced AI system using machine learning algorithms to predict nausea symptoms based on physiological and environmental data points.",
    tags: [
      {
        name: "machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: nausea,
    sourceCodeLink: "https://github.com/muaz-ahmad",
  },
  {
    name: "Cinema Management",
    description:
      "A comprehensive management system developed in Semester 1 to handle movie scheduling, ticket sales, and administrative oversight.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "logic",
        color: "green-text-gradient",
      },
      {
        name: "management",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/muaz-ahmad",
  },
  {
    name: "Network Security Audit",
    description:
      "A professional security assessment project using Nmap to identify vulnerabilities, open ports, and potential threats in network environments.",
    tags: [
      {
        name: "nmap",
        color: "blue-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "green-text-gradient",
      },
      {
        name: "security-audit",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/muaz-ahmad",
  },
  {
    name: "Car Bidding System",
    description:
      "An innovative online platform allowing users to participate in real-time car auctions with secure bidding and dealership integration.",
    tags: [
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "real-time",
        color: "green-text-gradient",
      },
      {
        name: "web-app",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/muaz-ahmad",
  },
];

export { services, technologies, experiences, testimonials, projects };
