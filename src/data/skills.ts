import { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Engineering",
    description: "Architecting high-throughput, low-latency, and resilient server-side systems with ACID guarantees.",
    skills: [
      { name: "Node.js / Express", highlight: true },
      { name: "Go (Golang)", highlight: true },
      { name: "Python / FastAPI", highlight: true },
      { name: "NestJS" },
      { name: "RESTful APIs", highlight: true },
      { name: "WebSockets & Socket.IO", highlight: true },
      { name: "Microservices Architecture" },
      { name: "Role-Based Access Control (RBAC)" },
      { name: "Distributed Rate Limiting" }
    ]
  },
  {
    title: "Data Engineering & Analytics",
    description: "Designing end-to-end ETL/ELT pipelines, columnar data platforms, and analytics engines.",
    skills: [
      { name: "ClickHouse (OLAP)", highlight: true },
      { name: "PostgreSQL Data Modeling", highlight: true },
      { name: "ETL / ELT Pipelines", highlight: true },
      { name: "Data Warehousing", highlight: true },
      { name: "Query Performance Tuning", highlight: true },
      { name: "Data Synchronization & CDC" },
      { name: "Business Intelligence (BI) Pipelines" },
      { name: "Data Partitioning & Indexing" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Transactional databases, in-memory caches, and multi-tenant schema partitioning.",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "Redis (Cache & Pub/Sub)", highlight: true },
      { name: "ClickHouse", highlight: true },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Prisma ORM" },
      { name: "Database Migrations" },
      { name: "Connection Pooling" }
    ]
  },
  {
    title: "IoT, Embedded & Hardware Integration",
    description: "Bridging physical devices, hardware telemetry, edge computing, and cloud backends.",
    skills: [
      { name: "MQTT & Broker Architecture", highlight: true },
      { name: "Zigbee Gateway Integration", highlight: true },
      { name: "Embedded Linux & Edge R&D", highlight: true },
      { name: "C / C++ Embedded" },
      { name: "Serial Protocols & Packet Parsers" },
      { name: "Electron Desktop Hardware Tethering" }
    ]
  },
  {
    title: "Enterprise Solutions & Operations",
    description: "Deep domain understanding of mission-critical business processes and operational software.",
    skills: [
      { name: "Enterprise ERP & MRP", highlight: true },
      { name: "HRMS & Automated Payroll", highlight: true },
      { name: "Cross-border Logistics & Customs", highlight: true },
      { name: "LMS & Exam Proctoring Engines" },
      { name: "E-Commerce State Machines" },
      { name: "Japanese FDI Project Delivery" }
    ]
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description: "Automating reliable deployments, server hardening, reverse proxies, and continuous uptime.",
    skills: [
      { name: "Linux Server Administration", highlight: true },
      { name: "Docker & Containerization", highlight: true },
      { name: "Nginx Reverse Proxy & SSL", highlight: true },
      { name: "PM2 Process Manager" },
      { name: "CI/CD & Automated Deployment" },
      { name: "Monitoring & Log Rotation" }
    ]
  }
];
