import { Article } from "../types";

export const articles: Article[] = [
  {
    title: "Architecting Columnar Storage: Migrating Heavy Analytical Queries to ClickHouse",
    slug: "migrating-heavy-queries-to-clickhouse",
    date: "2026",
    readTime: "7 min read",
    tags: ["Data Engineering", "ClickHouse", "PostgreSQL", "OLAP"],
    summary:
      "A deep dive into how migrating transactional enterprise reporting workloads to a column-oriented ClickHouse datastore reduced query response times from tens of minutes to sub-second execution.",
    status: "Published"
  },
  {
    title: "Designing Fail-Safe State Machines for Manufacturing and Industrial ERPs",
    slug: "fail-safe-state-machines-manufacturing-erp",
    date: "2025",
    readTime: "9 min read",
    tags: ["Backend", "PostgreSQL", "ERP", "System Design"],
    summary:
      "Patterns for managing multi-stage assembly lines with distributed touchpoints, atomic inventory deduction, and race condition prevention using PostgreSQL row-level locks and transactional savepoints.",
    status: "Published"
  },
  {
    title: "Resilient Biometric Attendance Ingestion at Scale: Lessons from Enterprise HRM",
    slug: "resilient-attendance-ingestion-enterprise-hrm",
    date: "2024",
    readTime: "6 min read",
    tags: ["HRM", "IoT", "Node.js", "Redis"],
    summary:
      "Handling thousands of concurrent biometric terminal clock-in events during rush hours without dropped records using message queues, idempotency keys, and asynchronous batch insertion.",
    status: "Published"
  },
  {
    title: "Edge-to-Cloud Telemetry: Balancing Low-Latency MQTT with Network Unreliability",
    slug: "edge-to-cloud-telemetry-mqtt",
    date: "2023",
    readTime: "8 min read",
    tags: ["IoT", "Go", "MQTT", "Embedded"],
    summary:
      "Architectural trade-offs of edge gateway ring-buffers, local scene execution engines, and backpressure handling when streaming smart home sensor data across flaky WAN connections.",
    status: "Published"
  }
];
