import { SkillCategory } from "../types";
import { Lang } from "../i18n/types";

const backendSkills = [
  { name: "Node.js / Express", highlight: true },
  { name: "Go (Golang)", highlight: true },
  { name: "Python / FastAPI", highlight: true },
  { name: "NestJS" },
  { name: "RESTful APIs", highlight: true },
  { name: "WebSockets & Socket.IO", highlight: true },
  { name: "Microservices Architecture" },
  { name: "Role-Based Access Control (RBAC)" },
  { name: "Distributed Rate Limiting" }
];

const dataSkills = [
  { name: "ClickHouse (OLAP)", highlight: true },
  { name: "PostgreSQL Data Modeling", highlight: true },
  { name: "ETL / ELT Pipelines", highlight: true },
  { name: "Data Warehousing", highlight: true },
  { name: "Query Performance Tuning", highlight: true },
  { name: "Data Synchronization & CDC" },
  { name: "Business Intelligence (BI) Pipelines" },
  { name: "Data Partitioning & Indexing" }
];

const dbSkills = [
  { name: "PostgreSQL", highlight: true },
  { name: "Redis (Cache & Pub/Sub)", highlight: true },
  { name: "ClickHouse", highlight: true },
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "Prisma ORM" },
  { name: "Database Migrations" },
  { name: "Connection Pooling" }
];

const iotSkills = [
  { name: "MQTT & Broker Architecture", highlight: true },
  { name: "Zigbee Gateway Integration", highlight: true },
  { name: "Embedded Linux & Edge R&D", highlight: true },
  { name: "C / C++ Embedded" },
  { name: "Serial Protocols & Packet Parsers" },
  { name: "Electron Desktop Hardware Tethering" }
];

const enterpriseSkills = [
  { name: "Enterprise ERP & MRP", highlight: true },
  { name: "HRMS & Automated Payroll", highlight: true },
  { name: "Cross-border Logistics & Customs", highlight: true },
  { name: "LMS & Exam Proctoring Engines" },
  { name: "E-Commerce State Machines" },
  { name: "Japanese FDI Project Delivery" }
];

const devopsSkills = [
  { name: "Linux Server Administration", highlight: true },
  { name: "Docker & Containerization", highlight: true },
  { name: "Nginx Reverse Proxy & SSL", highlight: true },
  { name: "PM2 Process Manager" },
  { name: "CI/CD & Automated Deployment" },
  { name: "Monitoring & Log Rotation" }
];

export const skillsByLang: Record<Lang, SkillCategory[]> = {
  vi: [
    {
      title: "Backend & API phân tán",
      description: "Xây dựng hệ thống backend hiệu năng cao, chịu tải tốt, xử lý giao dịch ACID và phân quyền RBAC chặt chẽ.",
      skills: backendSkills
    },
    {
      title: "Data Engineering & Analytics",
      description: "Thiết kế luồng ETL/ELT, kho dữ liệu phân tích cột (ClickHouse) và hệ thống báo cáo BI thời gian thực.",
      skills: dataSkills
    },
    {
      title: "Cơ sở dữ liệu & Caching",
      description: "Mô hình hóa dữ liệu quan hệ, tối ưu hóa câu truy vấn, indexing chuyên sâu và caching phân tán với Redis.",
      skills: dbSkills
    },
    {
      title: "IoT, Nhúng & Tích hợp thiết bị",
      description: "Cầu nối giao tiếp phần cứng Zigbee/MQTT, gateway Linux nhúng và tích hợp thiết bị ngoại vi qua Electron.",
      skills: iotSkills
    },
    {
      title: "Giải pháp & Nghiệp vụ doanh nghiệp",
      description: "Nghiệp vụ thực chiến chuyên sâu: ERP sản xuất, hải quan xuất nhập khẩu, HRM chấm công lương và EdTech LMS.",
      skills: enterpriseSkills
    },
    {
      title: "DevOps & Vận hành máy chủ",
      description: "Quản trị máy chủ Linux, container Docker, Nginx reverse proxy, chứng chỉ SSL và tự động hóa triển khai.",
      skills: devopsSkills
    }
  ],
  en: [
    {
      title: "Backend & Distributed APIs",
      description: "Architecting high-throughput, low-latency, and resilient server-side systems with ACID guarantees and RBAC.",
      skills: backendSkills
    },
    {
      title: "Data Engineering & Analytics",
      description: "Designing end-to-end ETL/ELT pipelines, columnar data platforms (ClickHouse), and real-time BI analytics engines.",
      skills: dataSkills
    },
    {
      title: "Databases & In-Memory Storage",
      description: "Relational database modeling, query performance tuning, indexing strategies, and distributed Redis caching.",
      skills: dbSkills
    },
    {
      title: "IoT, Embedded & Hardware Integration",
      description: "Bridging physical devices, hardware telemetry, embedded Linux edge gateways, and desktop device tethering.",
      skills: iotSkills
    },
    {
      title: "Enterprise Solutions & Operations",
      description: "Deep domain engineering for manufacturing ERP, customs trade logistics, enterprise HRM payroll, and LMS.",
      skills: enterpriseSkills
    },
    {
      title: "DevOps & Cloud Infrastructure",
      description: "Automating reliable deployments, Linux server administration, Docker containerization, Nginx, and SSL.",
      skills: devopsSkills
    }
  ],
  ja: [
    {
      title: "バックエンド＆分散API開発",
      description: "高スループット・低遅延なサーバーサイドアーキテクチャ、ACIDトランザクション保証、およびRBAC権限管理。",
      skills: backendSkills
    },
    {
      title: "データエンジニアリング＆分析基盤",
      description: "ETL/ELTパイプライン、ClickHouseによるOLAP列指向データ基盤、およびリアルタイムBI集計エンジンの構築。",
      skills: dataSkills
    },
    {
      title: "データベース＆分散キャッシュ",
      description: "リレーショナルDB設計、クエリチューニング、インデックス設計、およびRedisによる分散キャッシュ・Pub/Sub。",
      skills: dbSkills
    },
    {
      title: "IoT・組込み・ハードウェア連携",
      description: "Zigbee/MQTT通信ブリッジ、組込みLinuxエッジゲートウェイ開発、およびElectronによる機器制御連携。",
      skills: iotSkills
    },
    {
      title: "基幹業務システム・ドメイン知見",
      description: "製造業ERP、貿易税関物流、人事労務給与（HRM）、教育LMS、ECコマースにおける現場業務要件の具現化。",
      skills: enterpriseSkills
    },
    {
      title: "DevOps＆インフラ環境構築",
      description: "Linuxサーバー保守運用、Dockerコンテナ化、Nginxリバースプロキシ・SSL設定、CI/CD自動デプロイ運用。",
      skills: devopsSkills
    }
  ]
};

export const skillCategories: SkillCategory[] = skillsByLang.vi;
