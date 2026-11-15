import { ExperienceItem } from "../types";

export const experiences: ExperienceItem[] = [
  {
    period: "2024 — Present (2026)",
    role: "Senior Data Engineer & Data Platform Engineer",
    company: "Astec",
    companyType: "Japanese FDI Technology Enterprise",
    location: "Hanoi, Vietnam",
    summary:
      "Leading data engineering initiatives, enterprise data pipelines, and analytical data platform architecture for Japanese business operations.",
    responsibilities: [
      "Architected and deployed end-to-end ETL/ELT pipelines ingesting operational data from disparate ERP, CRM, and inventory databases.",
      "Engineered analytical data warehouses using ClickHouse and PostgreSQL, reducing complex aggregate analytical query latencies by over 60%.",
      "Designed robust data quality validation frameworks, schema migration strategies, and automated reconciliation jobs.",
      "Collaborated directly with Japanese project managers and business stakeholders to translate complex reporting requirements into production BI models.",
      "Built internal backend services and APIs using Python (FastAPI) and Node.js for data synchronization and operational dashboards."
    ],
    technologies: ["ClickHouse", "PostgreSQL", "Python", "FastAPI", "Go", "Docker", "ETL/ELT", "Data Modeling", "BI"],
    impactHighlights: [
      "Modernized legacy analytical infrastructure into an automated, near-real-time data platform.",
      "Optimized query performance and reduced server footprint through partitioning and column-oriented indexing.",
      "Ensured zero data-loss during large-scale enterprise database synchronizations."
    ]
  },
  {
    period: "2022 — 2024",
    role: "Technical Lead & Solutions Architect",
    company: "Enterprise Systems & Consulting",
    companyType: "Independent Enterprise Consulting & Global Clients",
    location: "Vietnam / Remote",
    summary:
      "Led end-to-end architecture and backend implementation for mission-critical enterprise systems across manufacturing, logistics, human resources, and high-traffic retail.",
    responsibilities: [
      "Spearheaded technical architecture for major enterprise systems including IEAS (Import/Export Customs & Logistics ERP), PrintDesk (Commercial Printing Workflow ERP), and DosuHR/HROPS (Enterprise HRM & Payroll).",
      "Designed and implemented high-concurrency Node.js and Go microservices, WebSocket event brokers, and Redis distributed caching layers.",
      "Modeled relational database schemas (PostgreSQL) with strict transactional boundaries, ACID compliance, and role-based access control (RBAC).",
      "Delivered Boothin Photobooth — an omnichannel retail platform pairing an Electron desktop application running in physical stores with cloud booking APIs.",
      "Enforced code quality, automated CI/CD deployments on Linux VPS infrastructure, and established NDA-safe architecture protocols."
    ],
    technologies: ["Node.js", "Express", "NestJS", "Go", "PostgreSQL", "Redis", "Socket.IO", "React", "Docker", "Linux"],
    impactHighlights: [
      "Successfully launched 5+ large enterprise platforms serving thousands of daily operational workflows.",
      "Engineered resilient multi-department approval pipelines and automated payroll engines handling complex labor law edge cases.",
      "Achieved 99.9% uptime across production Linux VPS clusters with automated monitoring."
    ]
  },
  {
    period: "2021 — 2022",
    role: "Senior R&D Software Engineer",
    company: "Arrow Tech",
    companyType: "Smart Home & IoT Technology Firm",
    location: "Hanoi, Vietnam",
    summary:
      "Conducted research and software development for connected smart home devices, IoT edge gateways, and low-latency device telemetry.",
    responsibilities: [
      "Engineered communication bridges between Zigbee/MQTT hardware modules and cloud telemetry backends.",
      "Implemented low-latency event ingestion pipelines processing continuous sensor streams (temperature, power metering, door state, security).",
      "Developed edge software running on embedded Linux systems, ensuring resilience against intermittent network outages.",
      "Coordinated firmware-to-backend API contract specifications and automated hardware stress test suites."
    ],
    technologies: ["Go", "Python", "C/C++", "MQTT", "Zigbee", "WebSockets", "IoT Edge", "Linux Kernel", "PostgreSQL"],
    impactHighlights: [
      "Reduced telemetry ingestion latency from edge to cloud down to sub-100ms.",
      "Built resilient local caching on edge gateways to prevent data loss during network disruptions.",
      "Delivered production-grade firmware telemetry modules for next-generation smart home appliances."
    ]
  },
  {
    period: "2019 — 2021",
    role: "Software Engineer — Backend & Systems Integration",
    company: "Core Systems & Logistics",
    companyType: "Software Engineering & Enterprise Solutions",
    location: "Hanoi, Vietnam",
    summary:
      "Developed core backend APIs, warehouse management modules (WMS), and database integrations for enterprise logistics and business workflows.",
    responsibilities: [
      "Built RESTful microservices and backend endpoints using Node.js, Go, and Python.",
      "Designed relational database tables, optimized SQL queries, and implemented indexing strategies on PostgreSQL and MySQL.",
      "Engineered warehouse management system (WMS) features: barcode scanning validation, inventory batch tracking, and order dispatching.",
      "Graduated from Hanoi University of Science and Technology (HUST) - Computer Engineering (Hedspi Vietnam-Japan Program)."
    ],
    technologies: ["Node.js", "Go", "PostgreSQL", "MySQL", "REST API", "WMS", "Docker", "Git"],
    impactHighlights: [
      "Accelerated warehouse dispatch speed by automating barcode verification and bin location mapping.",
      "Refactored legacy database queries, eliminating full-table scans on high-volume transaction tables."
    ]
  }
];
