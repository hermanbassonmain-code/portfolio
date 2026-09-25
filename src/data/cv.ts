export const profile = {
  name: "Herman Basson",
  title: "Senior Software Engineer",
  tagline: "Full-Stack Development & Project Leadership",
  location: "Cape Town, South Africa",
  email: "herman-b@live.com",
  linkedin: "https://www.linkedin.com/in/herman-basson",
  linkedinLabel: "linkedin.com/in/herman-basson",
  cvFile: "/Herman_Basson_CV_2026.pdf",
  summary:
    "Senior Software Engineer with over eight years of full-stack development experience across commercial, telecommunications, gaming, and enterprise sectors. Proven track record leading projects from inception through deployment, mentoring team members, and driving stakeholder alignment in Agile environments. Actively expanding into AI-assisted and agentic development, working with tools such as GitHub Copilot, Kiro/KiroCrew and other developments to build agents and skills. Currently pursuing an MCom in Information Systems at the University of Cape Town, researching AI governance and software engineering practice adaptation, having completed a BCom Honours in Information Systems Management (Cybersecurity). Known for a proactive, self-driven approach to learning and a strong commitment to knowledge-sharing across teams.",
};

export const skillGroups = [
  {
    label: "Full-Stack Development",
    items: ["Front-end & back-end development", "Microservices architecture", "API design"],
  },
  {
    label: "AI & Agentic Development",
    items: ["GitHub Copilot", "Kiro", "KiroCrew", "Agent & skill creation", "Agentic development workflows"],
  },
  {
    label: "Languages",
    items: [".NET", "C#", "Java", "PHP", "TypeScript", "JavaScript"],
  },
  {
    label: "Web Technologies",
    items: ["HTML", "CSS", "React", "Node.js", "jQuery", "Angular"],
  },
  {
    label: "Databases",
    items: ["MS SQL", "Oracle", "MySQL", "DynamoDB (NoSQL)"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Azure/Entra", "AWS fundamentals", "CI/CD", "Docker", "Jenkins", "GitHub Actions"],
  },
  {
    label: "Version Control",
    items: ["GitHub", "Bitbucket", "SVN", "GitFlow"],
  },
  {
    label: "Methodologies",
    items: ["Agile", "Kanban", "Project leadership", "Code review"],
  },
  {
    label: "Operating Systems",
    items: ["Windows", "Linux", "Unix"],
  },
];

export type Job = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Project = {
  title: string;
  org: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "iGaming Platform Integrations",
    org: "Rank Interactive",
    description:
      "Led integration of third-party gaming providers into a digital gaming platform, aligning transaction processing and game-management services consumed by front-end applications, backed by production incident response and hypercare for smooth releases.",
    tags: ["C#", "ASP.NET", "React", "MS SQL", "DynamoDB", "AWS"],
  },
  {
    title: "AI Agent & Agentic Workflow Enablement",
    org: "Rank Interactive",
    description:
      "Investigated and built proof-of-concept AI agents and agentic development workflows for the engineering organisation, evaluating tools such as GitHub Copilot and Kiro/KiroCrew to accelerate delivery and knowledge-sharing across teams.",
    tags: ["GitHub Copilot", "Kiro", "KiroCrew", "TypeScript", ".NET"],
  },
  {
    title: "Fibre ISP Portals & Internal Systems",
    org: "Metrofibre Networx",
    description:
      "Built customer-facing websites, portals, and internal systems for a fibre network operator, from production deployments through to direct stakeholder and client engagement, on a microservices-oriented .NET stack.",
    tags: ["C#", ".NET", "Razor", "SASS", "REST APIs", "MS SQL"],
  },
  {
    title: "National Vehicle & Licensing System",
    org: "Face Technologies — Senegal",
    description:
      "Contributed front- and back-end functionality to a national vehicle registration and driver-licensing platform built for a government client, on a Java and C# MVC stack.",
    tags: ["Java", "C# .NET MVC", "Hibernate", "EJB", "Oracle"],
  },
  {
    title: "Government Public Service Platform",
    org: "Face Technologies — Uganda",
    description:
      "Delivered features for a digital public-service platform for Uganda's Ministry of Public Service, working across a Java and ZK technology stack in a distributed government IT environment.",
    tags: ["Java", "ZK", "C#", "MySQL", "Oracle"],
  },
  {
    title: "Telecom Ticketing, Access Control & CRM",
    org: "Blue Label Telecoms",
    description:
      "Built and maintained a suite of production systems for a telecoms group — including the main ticketing website, access control system, Sugar CRM, and user portal — on a Linux/LAMP stack with automated Ansible deployments.",
    tags: ["PHP", "LAMP", "JavaScript", "MySQL", "Docker", "Ansible"],
  },
];

export const experience: Job[] = [
  {
    role: "Senior Software Engineer",
    company: "Rank Interactive",
    location: "Cape Town",
    start: "Sep 2022",
    end: "Present",
    bullets: [
      "Direct front- and back-end development using Java, C# .NET, React, Material UI, and Tailwind for web/API development and microservices, including ongoing feature development and support for legacy ASP.NET systems.",
      "Lead projects from inception to deployment, providing system support, hypercare, and production incident response to ensure smooth Agile delivery using Jira and Slack.",
      "Drive and align iGaming integrations into the digital business, working closely with external providers on gaming transactions and game-management services consumed by front-end applications, while leading key areas of feature enhancement and incident management.",
      "Design and build AI agents, agentic workflows, and AI-driven integrations for the organisation, including technical investigations and proof-of-concepts (POCs) using tools such as GitHub Copilot and Kiro/KiroCrew.",
      "Mentor and collaborate closely with team members through code reviews, pairing, and project delegation, progressing into a leadership role while engaging stakeholders on development strategy and planning.",
      "Contribute to architectural decisions and new feature development that improve system scalability, performance, and maintainability, translating technical improvements into measurable business value.",
      "Drive inter-team collaboration spanning planning, code sharing, investigations, and cross-system initiatives.",
      "Work across a broad tech stack — C#, ASP.NET, .NET, HTML, CSS, JavaScript, jQuery, TypeScript, MS SQL, NoSQL, Jenkins, Docker, and GitHub Actions — and utilise AWS Console/CLI for serverless architectures including DynamoDB; manage version control with Bitbucket and GitHub.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Metrofibre Networx",
    location: "Centurion",
    start: "Sep 2020",
    end: "Aug 2022",
    bullets: [
      "Developed front- and back-end features using C# .NET, with a focus on microservices architecture.",
      "Managed production Web/API deployments and engaged directly with stakeholders and clients.",
      "Provided system support and conducted code reviews within a DevOps and Agile environment.",
      "Built websites, portals, and internal systems using C#, HTML, CSS, SASS, Razor, JavaScript, jQuery, TypeScript, REST APIs, Event Stores, and MS SQL.",
      "Managed version control with GitHub and GitFlow.",
    ],
  },
  {
    role: "Software Developer",
    company: "Face Technologies",
    location: "Centurion",
    start: "Nov 2019",
    end: "Aug 2020",
    bullets: [
      "Engaged in front- and back-end development using Java, with additional front-end work in C# .NET and Angular.",
      "Applied a diverse technology stack including C#, Angular, Java, HTML, CSS, JavaScript, jQuery, TypeScript, and MySQL.",
      "Managed code with SVN in an Agile environment, ensuring efficient project workflows and delivery.",
    ],
  },
  {
    role: "Software Developer",
    company: "Blue Label Telecoms",
    location: "Sandton",
    start: "Oct 2018",
    end: "Oct 2019",
    bullets: [
      "Developed and maintained front- and back-end features using PHP within a Linux-based production environment.",
      "Built and maintained key systems including the main Ticketing Website, Access Control System, Sugar CRM, and User Portal.",
      "Introduced new technologies to the system through development in Angular and Node.js.",
      "Worked across a comprehensive tech stack: LAMP, JavaScript, jQuery, HTML, CSS, TypeScript, YAML, Bootstrap, Docker, SSH, MySQL, and T-SQL.",
      "Managed version control using Git and Bitbucket, and automated deployments with Ansible scripting.",
    ],
  },
  {
    role: "Software Developer",
    company: "Face Technologies",
    location: "Centurion",
    start: "May 2017",
    end: "Sep 2018",
    bullets: [
      "Developed and maintained front- and back-end systems using C# .NET MVC and Java, including Hibernate, EJB, and ZK.",
      "Contributed to key projects including Senegal's vehicle and licensing system and Uganda's Ministry of Public Service.",
      "Utilised a diverse tech stack including C#, Java, HTML, CSS, JavaScript, jQuery, and databases such as MS SQL, Oracle, and MySQL.",
      "Managed version control using SVN.",
    ],
  },
];

export type Education = {
  title: string;
  school: string;
  period: string;
  detail: string;
};

export const education: Education[] = [
  {
    title: "MCom in Information Systems (in progress)",
    school: "University of Cape Town",
    period: "2026 – Present",
    detail: "Research focus: AI governance and software engineering practice adaptation.",
  },
  {
    title: "BCom Honours, Information Systems Management (Cybersecurity)",
    school: "University of Cape Town",
    period: "2024 – 2025",
    detail: "Specialised in cybersecurity management within information systems.",
  },
  {
    title: "BSc in Computer Science",
    school: "North-West University, Potchefstroom",
    period: "2013 – 2016",
    detail: "Bachelor of Science degree in Computer Science.",
  },
  {
    title: "Certificate in Comprehensive Programming",
    school: "CTI Education Group",
    period: "2012",
    detail: "Fundamentals of programming and algorithms; design and implementation of relational database schemas.",
  },
];
