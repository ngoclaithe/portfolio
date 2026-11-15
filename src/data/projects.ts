import { Project, LiveProjectStatus } from "../types";

export const projects: Project[] = [
  {
    id: "ieas-erp",
    slug: "import-export-erp",
    title: "Enterprise Import/Export Customs & Logistics ERP",
    category: "ERP",
    featured: true,
    ndaNotice: "Client names, internal tariff calculation rules, and commercial pricing models sanitized per Non-Disclosure Agreement (NDA).",
    shortDescription:
      "Mission-critical ERP platform digitizing end-to-end international trade workflows, multi-currency ledger reconciliation, customs document validation, and logistics shipment tracking.",
    problem:
      "Cross-border trading enterprises manage thousands of import/export declarations monthly. Disjointed spreadsheets caused costly customs declaration discrepancies, delayed port clearances, and untracked container demurrage fees.",
    solution:
      "Engineered an integrated ERP system that unifies import/export document lifecycles, automated multi-currency accounting entries, real-time customs dossier tracking, and partner freight reconciliation on a single ledger.",
    myRole: [
      "Technical Lead & System Architect responsible for database schema modeling, ACID transaction boundaries, and core backend services.",
      "Designed the multi-currency accounting engine handling fluctuating FX rates and automatic tax debit/credit ledger generation.",
      "Implemented role-based customs document state machine preventing unauthorized modifications once manifests are signed."
    ],
    keyChallenges: [
      "Zero-tolerance data consistency for high-value financial transactions and cross-border currency conversions.",
      "Dynamic document versioning and audit trails meeting international maritime trade compliance.",
      "Complex relational schema joining purchase orders, commercial invoices, packing lists, and bill of lading (B/L) data."
    ],
    architectureHighlights: [
      "Modular monolith backend on Node.js/Express backed by a heavily indexed PostgreSQL cluster.",
      "Atomic transactional boundaries using PostgreSQL savepoints and row-level locks to prevent ledger discrepancies.",
      "Redis caching layer for high-frequency exchange rates, tax lookup tables, and tariff classifications.",
      "Automated PDF generation pipeline for standardized international trade declarations."
    ],
    resultsAndImpact: [
      "Reduced shipment document processing time by 75%, eliminating customs clearance delays.",
      "100% data auditability across all financial transactions, passing rigorous enterprise financial audits.",
      "Streamlined logistics freight expense reconciliation across dozens of maritime shipping lines."
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "TypeScript", "Tailwind CSS", "Docker"],
    liveUrl: "https://ieas.dosutech.site/",
    metrics: [
      { label: "Doc Processing Time", value: "-75%" },
      { label: "Ledger Discrepancy", value: "0%" },
      { label: "Avg Query Latency", value: "<45ms" }
    ]
  },
  {
    id: "printdesk-erp",
    slug: "printdesk-manufacturing-erp",
    title: "Industrial Manufacturing & Production Workflow ERP",
    category: "ERP",
    featured: true,
    ndaNotice: "Factory proprietary manufacturing parameters and client print templates sanitized per NDA.",
    shortDescription:
      "Comprehensive manufacturing ERP orchestrating commercial printing production floors, multi-stage prepress/press/postpress workflows, automated raw material inventory, and dispatch logistics.",
    problem:
      "Printing and packaging plants suffered from bottlenecks between customer order specification, prepress plate-making, printing machine scheduling, and warehouse raw paper inventory stockouts.",
    solution:
      "Architected a real-time production ERP with an interactive Kanban workflow engine, automatic inventory consumption triggers, and dynamic machine load balancing.",
    myRole: [
      "Designed the state-machine workflow engine tracking orders through prepress, printing, laminating, die-cutting, packaging, and dispatch.",
      "Built real-time WebSocket dispatch dashboard displaying operational machine utilization across factory shifts.",
      "Implemented raw material deduction logic triggered atomically as printing jobs advance across production milestones."
    ],
    keyChallenges: [
      "Handling real-time synchronization between factory tablet terminals and the central management dashboard.",
      "Dynamic cost calculations based on complex physical parameters (paper grammage, ink type, plate count, machine run-time).",
      "Preventing race conditions when multiple production operators update machine states concurrently."
    ],
    architectureHighlights: [
      "Event-driven architecture leveraging Redis Pub/Sub and Socket.IO for real-time station updates.",
      "Optimized PostgreSQL schema with strict foreign-key constraints and automated trigger functions for inventory updates.",
      "Responsive React interface optimized for industrial touch tablets and desktop production managers."
    ],
    resultsAndImpact: [
      "Decreased production scheduling conflicts and idle press machine time by 40%.",
      "Eliminated raw material inventory discrepancies, ensuring accurate paper and chemical reorder thresholds.",
      "Real-time visibility enabled same-day order status turnaround for enterprise clients."
    ],
    technologies: ["React", "Express", "Node.js", "PostgreSQL", "Redis", "Socket.IO", "TypeScript", "Nginx"],
    liveUrl: "https://printdesk.bscxau.link/login",
    metrics: [
      { label: "Press Idle Time", value: "-40%" },
      { label: "Inventory Accuracy", value: "99.8%" },
      { label: "Sync Latency", value: "<80ms" }
    ]
  },
  {
    id: "hrops-hrm",
    slug: "enterprise-hrm-payroll",
    title: "Enterprise HR Operations & Automated Payroll Platform",
    category: "HRM",
    featured: true,
    ndaNotice: "Employee personal identifying data (PII) and corporate salary bands sanitized per strict confidentiality and GDPR/labor compliance.",
    shortDescription:
      "Full-lifecycle Human Resource Operations (HROPS) platform managing enterprise personnel directories, multi-shift biometric timekeeping, role-based approval trees, and automated payroll calculation.",
    problem:
      "Multi-branch enterprises struggled with manual attendance reconciliation, disparate shift policies, error-prone overtime calculations, and complex multi-level leave approval hierarchies.",
    solution:
      "Engineered an automated HRM platform that unifies biometric time-clock ingestion, customizable holiday/shift rules, granular RBAC approval workflows, and compliant multi-tier payroll runs.",
    myRole: [
      "Lead Backend Architect for payroll formula engine, timekeeping ingestion pipelines, and organizational hierarchy trees.",
      "Designed dynamic role-based permission system (RBAC) supporting corporate matrices (Director, HR, Department Head, Employee).",
      "Created batch processing jobs calculating complex deductions, social insurance brackets, and progressive personal income tax."
    ],
    keyChallenges: [
      "Modeling recursive departmental hierarchies and dynamic multi-step approval delegation workflows.",
      "High volume attendance raw log parsing from biometric IoT terminals without dropping timestamps.",
      "Stringent security, data encryption at rest for sensitive salary records, and comprehensive access audit logging."
    ],
    architectureHighlights: [
      "PostgreSQL CTEs (Common Table Expressions) and closure tables for sub-millisecond organizational tree traversal.",
      "Isolated payroll computation workers executing inside transaction blocks to ensure atomic end-of-month pay slip generation.",
      "Role-gated REST API endpoints enforced via JWT claims and database row-level security."
    ],
    resultsAndImpact: [
      "Replaced 5 days of manual monthly HR payroll calculation with a single 3-minute automated run.",
      "Eliminated attendance discrepancies across distributed branch offices.",
      "Provided leadership with real-time labor utilization and turnover analytics."
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "JWT", "Docker"],
    liveUrl: "https://hrops.dosutech.site/login",
    metrics: [
      { label: "Payroll Run Time", value: "3 mins" },
      { label: "Timekeeping Ingestion", value: "100k/hr" },
      { label: "Calculation Error", value: "0.00%" }
    ]
  },
  {
    id: "jlearn-lms",
    slug: "jlearn-online-learning-platform",
    title: "High-Concurrency Interactive Learning Platform (JLearn)",
    category: "LMS",
    featured: true,
    ndaNotice: "Curriculum assessment rubrics and institutional grading algorithms sanitized per client agreement.",
    shortDescription:
      "Cloud-native Learning Management System (LMS) powering structured multi-tier curricula, interactive video lecture delivery, real-time proctored examinations, and automated proficiency analytics.",
    problem:
      "Educational institutions faced severe server degradation and lost exam submissions during synchronized high-stakes exam events.",
    solution:
      "Architected a scalable LMS with resilient offline-first test autosave, real-time Socket.IO synchronization, and partitioned database querying for student analytics.",
    myRole: [
      "Full-stack Architecture & Core Backend Engineer.",
      "Engineered the real-time proctoring and autosave mechanism handling intermittent client network drops.",
      "Implemented automated question randomization, grading engine, and comprehensive student progress dashboards."
    ],
    keyChallenges: [
      "Handling thousands of concurrent WebSocket connections submitting answers simultaneously during exam countdowns.",
      "Zero question leakage and tamper-proof server-side countdown verification.",
      "High-performance video streaming integration and student watch-time tracking."
    ],
    architectureHighlights: [
      "Next.js frontend with lightweight state stores for sub-second page transitions.",
      "Node.js microservices with Redis queues managing asynchronous score aggregation and certificate issuance.",
      "Partitioned PostgreSQL tables separating historical submission archives from active testing sessions."
    ],
    resultsAndImpact: [
      "Supported concurrent examinations with zero server dropouts and zero lost answer sheets.",
      "Cut teacher grading workload by 80% through instant algorithmic question assessment.",
      "Empowered students with granular skill gap analytics based on CEFR frameworks."
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Socket.IO", "Redis", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://jlearn.dosutech.site/",
    metrics: [
      { label: "Uptime During Exams", value: "100%" },
      { label: "Autosave Frequency", value: "Every 5s" },
      { label: "Grading Efficiency", value: "+80%" }
    ]
  },
  {
    id: "boothin-photobooth",
    slug: "boothin-photobooth-platform",
    title: "Distributed Multi-Tenant Booking & Smart Photobooth System",
    category: "CRM",
    featured: false,
    ndaNotice: "Hardware device driver firmware and proprietary photo rendering parameters sanitized.",
    shortDescription:
      "End-to-end retail software suite combining a customer online reservation portal, multi-branch admin management, and an Electron desktop app controlling physical in-store photobooths.",
    problem:
      "Photobooth franchise owners struggled with scheduling double-bookings, hardware session synchronization failures, and manual photo delivery to customers.",
    solution:
      "Created a unified software ecosystem: a web booking portal, real-time calendar slot lock engine, and a specialized desktop app communicating with DSLR camera hardware and cloud storage.",
    myRole: [
      "Architected the omnichannel reservation system and WebSocket communication broker between booths and cloud.",
      "Implemented session token validation preventing unauthorized hardware booth activation.",
      "Designed the automated photo ingestion and cloud distribution pipeline delivering branded digital albums to customers."
    ],
    keyChallenges: [
      "Bridging native desktop hardware control (camera tethering, thermal printers) with web cloud APIs.",
      "Handling offline booth operation during venue internet hiccups with automatic queue replay.",
      "Optimizing heavy image upload and CDN caching under strict response time limits."
    ],
    architectureHighlights: [
      "Electron desktop application with local SQLite queuing for offline-first reliability.",
      "WebSocket real-time channel updating booth status (Idle, In Session, Printing, Maintenance) to store operators.",
      "High-speed image compression and secure S3-compatible cloud distribution."
    ],
    resultsAndImpact: [
      "Automated over 95% of in-store session activations without requiring cashier assistance.",
      "Eliminated scheduling overlap conflicts across multiple commercial mall branches.",
      "Instant photo delivery increased customer social sharing by 65%."
    ],
    technologies: ["Next.js", "Node.js", "Electron", "PostgreSQL", "WebSocket", "AWS S3 / MinIO", "Tailwind CSS"],
    liveUrl: "https://boothin.dosutech.site/",
    metrics: [
      { label: "Session Automation", value: "95%" },
      { label: "Photo Delivery", value: "<15s" },
      { label: "Double-Booking", value: "0" }
    ]
  },
  {
    id: "astec-data-platform",
    slug: "enterprise-data-platform",
    title: "Enterprise Analytical Data Platform & BI Engine",
    category: "Data Platform",
    featured: true,
    ndaNotice: "Japanese client names, proprietary manufacturing telemetry, and business forecast weights strictly redacted per NDA.",
    shortDescription:
      "Large-scale analytical data platform unifying disparate enterprise operational databases into columnar OLAP storage (ClickHouse), powering real-time BI dashboards and executive decision systems.",
    problem:
      "Legacy relational databases buckled under complex analytical SQL queries joining millions of rows, causing production ERP slowdowns and delayed business intelligence reports.",
    solution:
      "Designed and deployed a decoupled data engineering platform featuring automated ELT pipelines, columnar data warehousing, and fast aggregated reporting APIs.",
    myRole: [
      "Lead Data Platform Engineer designing ELT synchronization pipelines and ClickHouse dimensional schema.",
      "Implemented incremental data extraction using change-data-capture (CDC) triggers and batch upserts.",
      "Built high-throughput aggregation microservices serving executive dashboards with sub-second response times."
    ],
    keyChallenges: [
      "Guaranteeing transactional consistency while replicating from diverse relational backends to columnar OLAP.",
      "Optimizing data partitioning keys, sorting keys, and materialized views for time-series and aggregate queries.",
      "Ensuring high availability, automated backup, and failover across data nodes."
    ],
    architectureHighlights: [
      "ClickHouse columnar database for orders of magnitude faster aggregation performance.",
      "Python (FastAPI) and Go microservices orchestrating resilient ETL/ELT pipelines with dead-letter queueing.",
      "Automated schema validation preventing upstream transactional schema alterations from breaking analytics."
    ],
    resultsAndImpact: [
      "Reduced executive report generation time from 18 minutes down to 1.2 seconds.",
      "Completely offloaded heavy analytical traffic from core production ERP transactional databases.",
      "Provided real-time business visibility across multi-country operations."
    ],
    technologies: ["ClickHouse", "PostgreSQL", "Python", "FastAPI", "Go", "Docker", "ETL/ELT", "BI Analytics"],
    metrics: [
      { label: "Query Speedup", value: "15x" },
      { label: "Report Run Time", value: "1.2s" },
      { label: "Daily Ingestion", value: "5M+ rows" }
    ]
  },
  {
    id: "arrowtech-iot-gateway",
    slug: "iot-smart-home-telemetry",
    title: "Smart Home IoT Edge Gateway & Telemetry Broker",
    category: "IoT / Embedded",
    featured: false,
    ndaNotice: "Proprietary wireless encryption protocol keys and hardware circuit design sanitized.",
    shortDescription:
      "Distributed IoT edge software and cloud telemetry broker coordinating smart home environmental sensors, Zigbee hardware controllers, and low-latency cloud event streaming.",
    problem:
      "Smart home devices operating over heterogeneous wireless standards (Zigbee, BLE, Wi-Fi) suffered from high latency, packet loss, and severe connection drops during home router restarts.",
    solution:
      "Developed a robust embedded edge gateway service in Go and C/C++ featuring resilient local rule execution and asynchronous MQTT telemetry syncing to cloud backends.",
    myRole: [
      "R&D Software Engineer developing local edge event loops and communication bridges.",
      "Implemented hardware-level serial packet decoders and Zigbee protocol packet handlers.",
      "Engineered cloud ingestion API capable of absorbing bursts of telemetry updates during mass power restorations."
    ],
    keyChallenges: [
      "Constrained memory and CPU budget on embedded Linux micro-gateways.",
      "Local autonomy: ensuring smart home automation scenes (lights, locks, thermostats) execute without active internet.",
      "Securing device-to-cloud payload encryption with minimal compute overhead."
    ],
    architectureHighlights: [
      "Low-footprint Go daemon with zero external runtime dependencies running on embedded Linux.",
      "MQTT broker with QoS levels matched to telemetry criticality (QoS 0 for continuous temperature, QoS 2 for security alarms).",
      "Local SQLite ring-buffer caching unsent telemetry during internet disconnections."
    ],
    resultsAndImpact: [
      "Reduced local sensor trigger response times to under 30 milliseconds.",
      "Achieved 100% scene execution reliability even during complete WAN connectivity dropouts.",
      "Successfully scaled to thousands of active hardware nodes across domestic and international installations."
    ],
    technologies: ["Go", "C/C++", "MQTT", "Zigbee", "Linux Embedded", "WebSockets", "PostgreSQL"],
    metrics: [
      { label: "Edge Latency", value: "<30ms" },
      { label: "Offline scene reliability", value: "100%" },
      { label: "Memory Footprint", value: "<24MB" }
    ]
  },
  {
    id: "ecommerce-ecosystem",
    slug: "enterprise-ecommerce-ecosystem",
    title: "High-Throughput Digital Commerce Platforms",
    category: "E-Commerce",
    featured: false,
    ndaNotice: "Payment merchant accounts and proprietary marketing conversion pipelines sanitized.",
    shortDescription:
      "Scalable digital commerce platforms engineered for tech electronics, books, and international fashion local brands (DosuTech Store, DosuBook, elSaco), featuring sub-second search and checkout state machines.",
    problem:
      "Traffic spikes during flash sale events overwhelmed monolithic e-commerce platforms, causing checkout race conditions and inventory overselling.",
    solution:
      "Designed modern Next.js/React storefronts backed by PostgreSQL transactional locks and Redis-powered inventory reservation counters.",
    myRole: [
      "Full-stack Technical Lead designing data models, catalog indexing, and checkout state machines.",
      "Implemented atomic stock decrement logic preventing overselling during flash promotions.",
      "Integrated secure payment gateways, automated invoice dispatching, and multi-currency formatting."
    ],
    keyChallenges: [
      "Handling thousands of concurrent shoppers competing for limited promotional stock.",
      "Ensuring rapid initial page load (FCP < 0.8s) for optimal mobile SEO and user retention.",
      "Smooth checkout flow with multi-tier promotional coupon redemption validation."
    ],
    architectureHighlights: [
      "SSR / ISR Next.js architecture with Edge caching for high-speed product catalog delivery.",
      "Redis distributed locks protecting stock decrement operations during checkout.",
      "Normalized PostgreSQL database schema with comprehensive indexing on product attributes."
    ],
    resultsAndImpact: [
      "Sustained 5x traffic surges during flash campaigns with zero inventory overselling.",
      "Sub-second catalog browsing and search response times across mobile and desktop.",
      "Streamlined order fulfillment pipelines directly feeding warehouse packing queues."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Redis", "Docker"],
    liveUrl: "https://dosutechstore.dosutech.site/",
    metrics: [
      { label: "Inventory Overselling", value: "0" },
      { label: "Page Load (FCP)", value: "<0.8s" },
      { label: "Traffic Surge Handling", value: "5x" }
    ]
  }
];

export const liveProjects: LiveProjectStatus[] = [
  {
    name: "IEAS Customs & Logistics ERP",
    category: "Enterprise ERP",
    domain: "ieas.dosutech.site",
    url: "https://ieas.dosutech.site/",
    description: "Import/Export customs clearance, multi-currency accounting & shipment tracking.",
    status: "active",
    stack: ["React", "Node.js", "PostgreSQL", "Express"]
  },
  {
    name: "PrintDesk Manufacturing ERP",
    category: "Industrial ERP",
    domain: "printdesk.bscxau.link",
    url: "https://printdesk.bscxau.link/login",
    description: "Factory production scheduling, raw material management & printing press dispatch.",
    status: "active",
    stack: ["React", "Express", "PostgreSQL", "Redis"]
  },
  {
    name: "DosuHR / HROPS Management",
    category: "Enterprise HRM",
    domain: "hrops.dosutech.site",
    url: "https://hrops.dosutech.site/login",
    description: "Employee lifecycle, multi-tier attendance approval & automated payroll calculation.",
    status: "active",
    stack: ["React", "Node.js", "PostgreSQL", "RBAC"]
  },
  {
    name: "JLearn LMS Platform",
    category: "EdTech LMS",
    domain: "jlearn.dosutech.site",
    url: "https://jlearn.dosutech.site/",
    description: "Online course delivery, real-time exam tracking & assessment analytics.",
    status: "active",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Socket.IO"]
  },
  {
    name: "Boothin Photobooth",
    category: "Retail Operations",
    domain: "boothin.dosutech.site",
    url: "https://boothin.dosutech.site/",
    description: "Omnichannel booking web app integrated with store photobooth desktop software.",
    status: "active",
    stack: ["Next.js", "Electron", "PostgreSQL", "WebSocket"]
  },
  {
    name: "DosuTech Store",
    category: "E-Commerce",
    domain: "dosutechstore.dosutech.site",
    url: "https://dosutechstore.dosutech.site/",
    description: "Digital retail platform for high-end electronics, laptops & gaming gear.",
    status: "active",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  },
  {
    name: "DeutschLab LMS",
    category: "EdTech LMS",
    domain: "deutschlab.dosutech.site",
    url: "https://deutschlab.dosutech.site/",
    description: "Comprehensive German language learning LMS with CEFR-aligned coursework.",
    status: "active",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    name: "elSaco Fashion Shop",
    category: "E-Commerce",
    domain: "elsaco.dosutech.site",
    url: "https://elsaco.dosutech.site/",
    description: "International lifestyle & fashion local brand online shopping platform.",
    status: "active",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "Astec Paints Japan",
    category: "Corporate Platform",
    domain: "astecpaints.jp",
    url: "https://astecpaints.jp/",
    description: "Japanese construction paints manufacturer product catalog & color consultancy.",
    status: "enterprise",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "CMS"]
  },
  {
    name: "DosuBook E-Commerce",
    category: "E-Commerce",
    domain: "dosubook.dosutech.site",
    url: "https://dosubook.dosutech.site/",
    description: "Online bookstore with comprehensive inventory & reader recommendation system.",
    status: "active",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"]
  },
  {
    name: "DosuPhaco GMP-WHO",
    category: "Corporate & Manufacturing",
    domain: "dosuphaco.dosutech.site",
    url: "https://dosuphaco.dosutech.site/vi",
    description: "Pharmaceutical manufacturing corporate platform adhering to GMP-WHO & FDA standards.",
    status: "active",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"]
  },
  {
    name: "Nướng 77 Restaurant & CRM",
    category: "F&B Operations",
    domain: "nuong77.dosutech.site",
    url: "https://nuong77.dosutech.site/",
    description: "Dining reservation web application with internal back-of-house table operations.",
    status: "active",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Admin Portal"]
  }
];
