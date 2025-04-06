import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  java,
  mysql,
  python,
  clang,
  kali,
  unity,
  unreal,
  cpp,
  metasploit,
  portfolio,
  annauniv_aprilfool,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
  {
    title: ["Ethical", "Hacker"],  // Changed to array format for multi-line
    icon: backend,
  },
  {
    title: "Penetration Tester",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C",
    icon: clang,
  },
  {
    name: "kali linux",
    icon: kali,
  },
  {
    name: "Unity Engine",
    icon: unity,
  },
  {
    name: "Unreal Engine",
    icon: unreal,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "CPP",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Metasploit",
    icon: metasploit,
  },
];

const projects = [
  {
    name: "April Fool Prank",
    description:
      "A playful web application that mimics a university examination results portal. Features include student login with validation, authentic-looking interface, captcha verification, and an entertaining reveal animation. Built with responsive design and smooth transitions to create a convincing yet harmless April Fool's Day experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: annauniv_aprilfool,
    hosted_link: "https://anna-university-result-page-8elk7t3sm.vercel.app/",
  },
  {
    name: "Portfolio",
    description:
      "A brief description of your second project. Highlight the key features and technologies used.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    hosted_link: "https://gingka-port-folio.vercel.app/",
  },
];

const personalInfo = {
  name: "Monish",
  fullName: "Monish Balaji",
  email: "sudhasenthilmonish@gmail.com",
  role: "Aspiring Ethical Hacker & Security Specialist",
  about: `I'm a passionate tech enthusiast specializing in Web Development, Full Stack Development, and Game Development, with a strong focus on Cybersecurity and Ethical Hacking. I create secure, efficient, and innovative solutions while maintaining the highest standards of web security and user experience. My expertise in Penetration Testing helps me build robust applications with security at their core. Always eager to take on new challenges and contribute to meaningful projects.`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
  background: "I began my journey in technology at a young age, driven by an insatiable curiosity for how things work in the digital world. Through years of dedicated learning and hands-on experience, I've developed a comprehensive understanding of both front-end and back-end technologies. My educational pursuit in Computer Science has further strengthened my foundation, allowing me to create robust and efficient solutions while staying current with emerging technologies.",
  goals: "Inspired by the remarkable journey of Sundar Pichai, I aspire to reach the pinnacle of technological leadership and ultimately become the CEO of Google. My vision extends beyond personal success – I aim to drive innovation that positively impacts global communities. Through continuous learning and practical application of cutting-edge technologies, I'm working towards becoming a transformative leader who can shape the future of technology while maintaining the highest standards of excellence and innovation. Following in Pichai's footsteps, I am dedicated to leading Google's next generation of groundbreaking innovations.",
};

const publicUrls = {
  
  socialProfiles: {
   
    github: {
      title: "github",
      link: "https://github.com/GINGKA-HAGANE-1",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
