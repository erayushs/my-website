export const data = {
  name: "Ayush Singh",
  title: "Frontend Developer",
  location: "Noida, India",
  email: "iamayushvs@gmail.com",
  phone: "+91 8874617344",
  github: "https://github.com/erayushs",
  linkedin: "https://linkedin.com/in/erayushsingh",
  summary:
    "I craft fast, accessible, and beautiful web experiences. At Virtual Intelligence, I pushed mobile Lighthouse scores from 11 to 70 — and I'm always looking for the next performance mountain to climb.",

  stats: [
    { value: "11→70", label: "Lighthouse Score", sub: "Mobile performance jump" },
    { value: "200+", label: "Extension Users", sub: "E-Stamp Quick Fill" },
    { value: "2+", label: "Years Building", sub: "React ecosystem" },
    { value: "48+", label: "GitHub Repos", sub: "Open source work" },
  ],

  experience: [
    {
      role: "Frontend Developer",
      company: "Virtual Intelligence",
      type: "Intern → Full-Time",
      period: "Sep 2025 – Present",
      current: true,
      highlights: [
        "Pushed mobile Lighthouse score from 11 to 70 via React optimization, bundle reduction, and CSS cleanup.",
        "Migrated app from CRA to Vite — dramatically improved DX and HMR performance.",
        "Standardized UI with Tailwind CSS + shadcn/ui, stripping redundant CSS libraries.",
        "Integrated APIs via Axios & React Query; built large dynamic forms with React Hook Form.",
        "Implemented mobile-first responsive design with device-appropriate UI patterns.",
        "Worked on BMA — a React business management platform for leads, projects, and sales.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Xampus",
      type: "Internship",
      period: "Sep 2024 – Mar 2025",
      current: false,
      highlights: [
        "Built and optimized responsive static and dynamic web pages improving engagement.",
        "Streamlined resume builder UX with interactive creation flow and progress tracking.",
        "Designed a React Native course page with a visually polished layout.",
        "Integrated APIs with URL parameter handling for dynamic, user-specific data rendering.",
      ],
    },
  ],

  projects: [
    {
      name: "E-Stamp Quick Fill",
      desc: "Chrome extension automating repetitive e-stamp form filling. One-click retrieval of saved data, instant autofill for frequent entries — built for real users who had a real pain.",
      tags: ["Chrome Extension", "JavaScript", "Storage API"],
      github: "https://github.com/erayushs",
      demo: null,
      badge: "200+ Users",
      featured: true,
    },
    {
      name: "Medify",
      desc: "Responsive React app for discovering and booking medical appointments across the USA. State/city filters, live API results, calendar booking flow, and a personalized dashboard.",
      tags: ["React", "REST API", "Calendar UI", "Responsive"],
      github: "https://github.com/erayushs",
      demo: null,
      featured: true,
    },
    {
      name: "Expense Tracker",
      desc: "Single-page React expense tracker with real-time wallet management, dynamic pie & bar chart visualizations, and local storage persistence across sessions.",
      tags: ["React", "Charts", "LocalStorage"],
      github: "https://github.com/erayushs",
      demo: null,
    },
    {
      name: "Netflix Clone AI",
      desc: "AI-enhanced Netflix clone in TypeScript with TMDB API integration, personalized recommendations, and a polished streaming platform UI.",
      tags: ["TypeScript", "React", "AI", "TMDB API"],
      github: "https://github.com/erayushs/netflix-cloneAI",
      demo: null,
    },
    {
      name: "NextJS Financial Dashboard",
      desc: "Full-featured financial dashboard with Next.js and TypeScript — data viz, authentication flow, and server-side rendering for real-time financial data.",
      tags: ["Next.js", "TypeScript", "SSR", "Dashboard"],
      github: "https://github.com/erayushs/NextJS-Financial-Dashboard",
      demo: null,
    },
    {
      name: "Swiggy Clone",
      desc: "Faithful Swiggy clone with live restaurant data via Swiggy API, cart management, Redux state, and a smooth end-to-end ordering flow.",
      tags: ["React", "Redux", "Live API"],
      github: "https://github.com/erayushs/Swiggy-clone",
      demo: null,
    },
  ],

  skills: {
    "Frontend Core": ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    "Styling & UI": ["Tailwind CSS", "shadcn/ui", "Bootstrap", "Material UI"],
    "State & Data": ["Redux", "React Query", "Axios", "React Hook Form"],
    "Tooling": ["Vite", "Git & GitHub", "Chrome DevTools", "Lighthouse"],
    "Performance": ["Bundle Optimization", "React.memo", "useMemo/useCallback", "Code Splitting", "Mobile-first"],
  },

  education: [
    {
      degree: "B.Tech in Civil Engineering",
      school: "BBAU",
      location: "Lucknow",
      period: "2017 – 2021",
    },
  ],
};
