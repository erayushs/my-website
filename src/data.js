export const data = {
  name: "Ayush Singh",
  title: "Frontend Developer",
  location: "Noida, India",
  email: "iamayushvs@gmail.com",
  phone: "+91 8874617344",
  github: "https://github.com/erayushs",
  linkedin: "https://www.linkedin.com/in/ayushvs/",
  summary:
    "Frontend developer who shipped a 536% mobile performance jump on a live production app — then kept going. I build fast, scalable React interfaces that are as clean under the hood as they look on screen.",

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
        "Took Invest Mango mobile Lighthouse score from 11 to 70 — a 536% improvement — by eliminating render-blocking resources, lazy-loading routes, and localizing state to reduce re-render cascades across the app.",
        "Architected BMA's frontend from the ground up: a multi-module React platform handling leads, projects, teams, and sales pipelines — all in a single cohesive codebase.",
        "Killed CRA and moved BMA to Vite — cold start dropped from ~40s to under 2s, HMR became instant, and the team's dev experience transformed overnight.",
        "Replaced a patchwork of 4 conflicting CSS libraries with a unified Tailwind CSS + shadcn/ui system, cutting stylesheet size and making every new component consistent by default.",
        "Built complex, multi-step dynamic forms with React Hook Form and Zod validation — handling lead intake, project creation, and team management workflows with zero UX friction.",
        "Integrated React Query for all server-state — eliminated redundant API calls, added background refetching, and gave BMA's data layer predictable loading and error states throughout.",
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
      github: "https://github.com/erayushs/E-Stamp-Quick-Fill",
      demo: "https://chromewebstore.google.com/detail/e-stamp-quick-fill/fgbdlbfhkkmnefioeebllkibbdfjblkk",
      badge: "200+ Users",
      featured: true,
    },
    {
      name: "Medify",
      desc: "Responsive React app for discovering and booking medical appointments across the USA. State/city filters, live API results, calendar booking flow, and a personalized dashboard.",
      tags: ["React", "REST API", "Calendar UI", "Responsive"],
      github: "https://github.com/erayushs/Medify",
      demo: "https://medify-five-chi.vercel.app",
      featured: true,
    },
    {
      name: "Expense Tracker",
      desc: "Single-page React expense tracker with real-time wallet management, dynamic pie & bar chart visualizations, and local storage persistence across sessions.",
      tags: ["React", "Charts", "LocalStorage"],
      github: "https://github.com/erayushs/Expense-Tracker",
      demo: "https://expense-tracker-one-inky.vercel.app",
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
