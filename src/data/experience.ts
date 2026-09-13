export const experience = [
  {
    role: "Software Engineer– UI",
    company: "Company 2",
    companyLogo: "/images/companies/company2.svg",
    location: "Bengaluru, India",
    startDate: "May 2025",
    endDate: "Present",
    highlights: [
      "Developed and shipped product features across enterprise mortgage-processing applications (MPS, MCAI, IDP) using Next.js and Angular 12/14.",
      "Engineered a large-scale document rendering module handling 4,000+ dynamic fields, reducing page load time and improving UI responsiveness.",
      "Delivered scalable, compliance-aligned frontend solutions in an Agile cross-regional team using RxJS and Angular Material to build reactive data pipelines.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Company 1",
    companyLogo: "/images/companies/company1.svg",
    location: "Bengaluru, India",
    startDate: "Mar 2024",
    endDate: "Feb 2025",
    highlights: [
      "Reliance Hospital Platform: Built a healthcare web application with real-time appointment tracking, interactive doctor-patient dashboards, and role-based authentication.",
      "Bare Kaab– School Management System: Reduced page load time by 5% by minimizing HTTP requests; implemented Redux Toolkit and D3.js/Chart.js for analytics.",
      "Built a WebSocket-powered timetable module with automated conflict detection, PDF export, and real-time synchronization.",
      "Developed syllabus management features enabling structured tracking of grade-level curriculum across the platform.",
    ],
  },
] as const;
