import type {
  SkillCategory,
  ExperienceItem,
  ProjectItem,
  AchievementItem,
  TestimonialItem,
  TimelineItem,
} from "../types/portfolio";

export const profile = {
  name: "Shruthi Sagar",
  role: "Full Stack Developer",
  location: "Bengaluru, Karnataka, India",
  email: "shruthisagarbaby@gmail.com",
  linkedin: "https://www.linkedin.com/in/shruthi-sagar-a22a312b4",
  github: "https://github.com/shruthisagzzz",
  githubUsername: "shruthisagzzz", // ← set this to your real GitHub username
  resumeUrl: "/resume.pdf",
};

export const roles: string[] = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "AI Enthusiast",
  "Data Science Student",
  "Software Engineer",
];

export const skillCategories: SkillCategory[] = [
  { id: "lang", label: "Languages", icon: "◈", items: ["Java", "Python", "JavaScript", "SQL"] },
  { id: "frontend", label: "Frontend", icon: "▣", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { id: "backend", label: "Backend", icon: "⌘", items: ["Node.js", "Express.js", "REST APIs"] },
  { id: "db", label: "Databases", icon: "▤", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { id: "ai", label: "AI & Data", icon: "✦", items: ["Machine Learning", "NumPy", "Pandas", "Power BI", "Tableau"] },
  { id: "core", label: "Core CS", icon: "◎", items: ["DSA", "OOP", "DBMS", "OS", "Agile"] },
  { id: "tools", label: "Dev Tools", icon: "⌥", items: ["Git", "GitHub", "VS Code", "Vite", "npm"] },
  { id: "platforms", label: "Platforms", icon: "☁", items: ["Shopify", "WordPress", "WooCommerce"] },
];

export const experience: ExperienceItem[] = [
  {
    date: "NOV 2025 — FEB 2026",
    title: "Full Stack Developer",
    org: "PANDAeCe Pvt Ltd, Bengaluru",
    points: [
      "Developed responsive full-stack web applications using React.js, JavaScript, HTML, CSS, and Node.js.",
      "Built 15+ reusable React components, improving UI consistency and reducing development time across client projects.",
      "Customized Shopify and WordPress stores for client projects, improving responsiveness and load performance.",
    ],
    tags: ["React.js", "Node.js", "Shopify", "WordPress"],
  },
  {
    date: "FEB 2025 — MAY 2025",
    title: "Web Development Intern",
    org: "PANDAeCe Pvt Ltd, Bengaluru",
    points: [
      "Developed 10+ Shopify and WordPress stores using HTML, CSS, and JavaScript.",
      "Assisted in UI development and frontend debugging for e-commerce workflows under senior engineering guidance.",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "WooCommerce"],
  },
];

export const education: TimelineItem[] = [
  {
    year: "2022 — 2026",
    title: "B.E. Computer Science (Data Science)",
    description:
      "Atria Institute of Technology, Bengaluru · CGPA 7.8 · Coursework: DSA, DBMS, Machine Learning, AI, Web Development, Data Visualization.",
  },
  {
    year: "Feb 2025 — May 2025",
    title: "Web Development Intern, PANDAeCe Pvt Ltd",
    description:
      "Built 10+ Shopify & WordPress stores; assisted in UI development and frontend debugging for e-commerce workflows.",
  },
  {
    year: "Nov 2025 — Feb 2026",
    title: "Full Stack Developer, PANDAeCe Pvt Ltd",
    description:
      "Promoted to build full-stack applications end-to-end; delivered 15+ reusable React components and customized client storefronts.",
  },
];

export const projects: ProjectItem[] = [
  {
    num: "01",
    title: "AI-Driven Grant Eligibility Evaluation System",
    tech: ["Python", "Machine Learning", "Pandas"],
    description:
      "A machine-learning system that automates the assessment of grant applications, replacing slow manual review with consistent, data-driven scoring.",
    problem:
      "Reviewing grant proposals manually is slow and inconsistent, making it hard for organizations to fairly prioritize applicants at scale.",
    solution:
      "Built a Python-based ML pipeline that evaluates eligibility criteria and predicts proposal impact, giving reviewers a consistent, data-backed starting point.",
    features:
      "Automated proposal analysis, eligibility scoring, and impact prediction driven by structured applicant data.",
    challenges:
      "Designing feature representations that captured proposal quality objectively, without introducing bias from incomplete applicant data.",
  },
  {
    num: "02",
    title: "SmartGarbage Monitoring System",
    tech: ["ESP32", "Arduino", "KNN"],
    description:
      "An IoT-based waste monitoring system that combines embedded hardware with machine learning to classify and predict garbage levels in real time.",
    problem:
      "Manual garbage collection scheduling wastes resources on bins that aren't full, while others overflow unnoticed.",
    solution:
      "Developed an ESP32 and Arduino-based monitoring system with an integrated camera feed, using a KNN algorithm to classify waste and predict fill levels.",
    features:
      "Real-time sensor readings, camera-based waste classification, and predictive alerts for collection scheduling.",
    challenges:
      "Optimizing the KNN classifier to run reliably on constrained embedded hardware while handling variable camera input conditions.",
  },
    {
    num: "03",
    title: "Website Performance Analyzer",
    description:
      "A full-stack web application that analyzes website performance using Google's PageSpeed Insights API and Lighthouse.",


    tech: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "Chart.js",
      "PageSpeed API",
      "Lighthouse"
    ],

    problem:
      "Developers and website owners need a simple way to understand website performance, SEO, accessibility, and Core Web Vitals.",

    solution:
      "Built a full-stack analyzer that accepts a public website URL and retrieves real-time Lighthouse and PageSpeed Insights data.",

    features:
      "Performance, SEO, and Accessibility scoring; LCP, CLS, and INP analysis; interactive charts; and automated optimization recommendations.",

    challenges:
      "Handling external API responses, processing Lighthouse metrics, categorizing Core Web Vitals, and presenting complex performance data through a responsive interface.",

  },
];

export const achievements: AchievementItem[] = [
  {
    icon: "🏆",
    title: "Database Management System Certification",
    meta: "Infosys · Govt. Recognized · Jul 2024",
  },
  {
    icon: "🥇",
    title: "PostgreSQL — Gold Grade (97%)",
    meta: "IT-ITeS Sector Skills Council · 2023",
  },
  {
    icon: "📜",
    title: "Full Stack Development Internship",
    meta: "Completion Certificate · PANDAeCe Pvt Ltd · 2026",
    description: "Three-month internship (Nov 2025 – Feb 2026) contributing to client web applications.",
  },
  {
    icon: "✉️",
    title: "Letter of Recommendation",
    meta: "Vanitha R, Director — PANDAeCe Pvt Ltd",
    description: "Recognized for technical versatility across React.js and CMS platforms.",
  },
  {
    icon: "💻",
    title: "15+ Production React Components",
    meta: "PANDAeCe Client Projects",
    description: "Reusable component library improving UI consistency and cutting development time.",
  },
  {
    icon: "🛍️",
    title: "10+ E-commerce Storefronts Shipped",
    meta: "Shopify · WordPress · WooCommerce",
    description: "Built and customized live storefronts for real commercial clients.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Shruthi distinguished himself as a technically sound and highly reliable developer who consistently delivered beyond expectations — moving effortlessly between core coding tasks and platform-specific development.",
    name: "Vanitha R",
    role: "Director, PANDAeCe Pvt Ltd",
    initials: "VR",
  },
  {
    quote:
      "A proactive problem-solver with a logical, analytical mindset — his ability to work under pressure while maintaining a high standard of UI/UX design speaks to real professional maturity.",
    name: "Vanitha R",
    role: "Director, PANDAeCe Pvt Ltd",
    initials: "VR",
  },
];

export const resumeSummary: string[] = [
  "Full Stack Developer — React.js, Node.js, Express.js, REST APIs",
  "Data Science undergraduate — Python, ML, NumPy, Pandas, Power BI, Tableau",
  "6+ months professional experience across two roles at PANDAeCe Pvt Ltd",
  "Databases: MySQL, PostgreSQL, MongoDB · Git & GitHub workflow",
  "Certified in DBMS (Infosys) and PostgreSQL (Gold Grade, 97%)",
];
