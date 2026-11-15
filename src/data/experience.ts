import { ExperienceItem } from "../types";
import { Lang } from "../i18n/types";

export const experiencesByLang: Record<Lang, ExperienceItem[]> = {
  vi: [
    {
      period: "2024 — Hiện tại (2026)",
      role: "Data Engineer",
      company: "Astec",
      companyType: "Doanh nghiệp FDI Nhật Bản",
      location: "Hà Nội, Việt Nam",
      summary:
        "Phát triển hệ thống xử lý dữ liệu, ETL/ELT pipeline và nền tảng Business Intelligence phục vụ doanh nghiệp Nhật Bản.",
      responsibilities: [
        "Xây dựng và tối ưu các luồng ETL/ELT tích hợp dữ liệu từ các hệ thống ERP, CRM và kho vận.",
        "Thiết kế kho dữ liệu phân tích sử dụng PostgreSQL và ClickHouse, tối ưu hóa truy vấn báo cáo BI.",
        "Xây dựng các backend service nội bộ bằng Python (FastAPI) và Node.js phục vụ đồng bộ dữ liệu và dashboard vận hành.",
        "Làm việc trực tiếp với quản lý dự án và đối tác Nhật Bản để triển khai yêu cầu kỹ thuật."
      ],
      technologies: ["PostgreSQL", "ClickHouse", "Python", "FastAPI", "Node.js", "ETL/ELT", "Docker", "BI"],
      impactHighlights: [
        "Tối ưu hóa hiệu năng truy vấn báo cáo dữ liệu định kỳ.",
        "Đảm bảo tính chính xác và toàn vẹn dữ liệu trong quá trình đồng bộ giữa các hệ thống."
      ]
    },
    {
      period: "2022 — 2024",
      role: "Freelance Software Engineer",
      company: "Dự án khách hàng Nhật Bản & Doanh nghiệp",
      companyType: "Phát triển phần mềm doanh nghiệp",
      location: "Việt Nam / Remote",
      summary:
        "Phát triển phần mềm doanh nghiệp, hệ thống backend và tích hợp API cho các đối tác Nhật Bản và khách hàng doanh nghiệp.",
      responsibilities: [
        "Tham gia phát triển các hệ thống ERP (sản xuất in ấn PrintDesk, xuất nhập khẩu IEAS), HRM (DosuHR chấm công, nhân sự) và ứng dụng quản lý.",
        "Xây dựng backend API bằng Node.js (Express, NestJS) và Go, tích hợp WebSocket realtime.",
        "Thiết kế cơ sở dữ liệu quan hệ PostgreSQL/MySQL, tối ưu hóa câu truy vấn và nghiệp vụ luồng phê duyệt.",
        "Phát triển nền tảng đặt lịch và ứng dụng desktop điều khiển cho chuỗi Boothin Photobooth."
      ],
      technologies: ["Node.js", "Express", "NestJS", "Go", "PostgreSQL", "Redis", "React", "Docker", "Linux"],
      impactHighlights: [
        "Triển khai thành công nhiều dự án phần mềm đáp ứng quy trình vận hành thực tế.",
        "Đảm bảo tính ổn định của hệ thống backend và phân quyền RBAC rõ ràng."
      ]
    },
    {
      period: "2021 — 2022",
      role: "R&D Software Engineer",
      company: "Arrow Tech",
      companyType: "Thiết bị Smart Home & IoT",
      location: "Hà Nội, Việt Nam",
      summary:
        "Nghiên cứu và phát triển phần mềm cho thiết bị Smart Home, tích hợp gateway IoT và xử lý dữ liệu cảm biến.",
      responsibilities: [
        "Phát triển phần mềm cầu nối giao tiếp giữa thiết bị phần cứng Zigbee/MQTT và hệ thống máy chủ.",
        "Xử lý luồng dữ liệu cảm biến môi trường, đo đạc năng lượng và cảnh báo an ninh thời gian thực.",
        "Tối ưu phần mềm chạy trên thiết bị gateway nhúng Linux, đảm bảo khả năng tự vận hành khi mất kết nối mạng."
      ],
      technologies: ["Go", "Python", "C/C++", "MQTT", "Zigbee", "Linux Embedded", "WebSockets", "PostgreSQL"],
      impactHighlights: [
        "Tối ưu độ trễ truyền nhận tín hiệu điều khiển thiết bị trong mạng nội bộ.",
        "Đảm bảo kịch bản tự động hóa tiếp tục chạy ổn định khi mất mạng internet."
      ]
    },
    {
      period: "2019 — 2021",
      role: "Software Developer",
      company: "Backend & Systems Integration",
      companyType: "Lập trình phần mềm (Bắt đầu từ thời sinh viên ĐH Bách Khoa Hà Nội)",
      location: "Hà Nội, Việt Nam",
      summary:
        "Bắt đầu làm việc thực tế từ thời sinh viên ĐH Bách Khoa Hà Nội, tham gia phát triển backend API, quản lý kho (WMS) và tích hợp cơ sở dữ liệu.",
      responsibilities: [
        "Lập trình backend REST API với Node.js, Python và Go.",
        "Thiết kế bảng cơ sở dữ liệu quan hệ, viết query và tạo index trên PostgreSQL / MySQL.",
        "Hỗ trợ phát triển module quản lý kho vận (WMS), quét mã vạch và đồng bộ đơn hàng.",
        "Vừa học chương trình Kỹ thuật Máy tính Việt - Nhật Hedspi tại HUST vừa tham gia các dự án phần mềm thực chiến."
      ],
      technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MySQL", "REST API", "Git"],
      impactHighlights: [
        "Tích lũy nền tảng thực chiến vững chắc về backend và cơ sở dữ liệu từ sớm.",
        "Áp dụng hiệu quả kiến thức hệ thống và mạng máy tính từ HUST vào dự án thực tế."
      ]
    }
  ],
  en: [
    {
      period: "2024 — Present (2026)",
      role: "Data Engineer",
      company: "Astec",
      companyType: "Japanese FDI Technology Enterprise",
      location: "Hanoi, Vietnam",
      summary:
        "Developing enterprise data pipelines, ETL/ELT workflows, and Business Intelligence analytical platforms for Japanese business operations.",
      responsibilities: [
        "Architected and optimized ETL/ELT pipelines integrating operational data from ERP, CRM, and logistics databases.",
        "Engineered analytical data warehouses using PostgreSQL and ClickHouse, optimizing aggregate reporting queries.",
        "Built internal backend services and APIs using Python (FastAPI) and Node.js for data synchronization and operational dashboards.",
        "Collaborated directly with Japanese project managers and business stakeholders to translate complex requirements into technical specifications."
      ],
      technologies: ["PostgreSQL", "ClickHouse", "Python", "FastAPI", "Node.js", "ETL/ELT", "Docker", "BI"],
      impactHighlights: [
        "Significantly accelerated aggregate analytical query performance for periodic BI dashboards.",
        "Guaranteed data accuracy and zero data-loss during enterprise database synchronizations."
      ]
    },
    {
      period: "2022 — 2024",
      role: "Freelance Software Engineer",
      company: "Japanese & Enterprise Clients",
      companyType: "Enterprise Software Development",
      location: "Vietnam / Remote",
      summary:
        "Developed mission-critical enterprise systems, backend APIs, and real-time platforms for Japanese partners and business clients.",
      responsibilities: [
        "Developed core enterprise software including commercial printing ERP (PrintDesk), customs logistics ERP (IEAS), and HRM/payroll systems (DosuHR).",
        "Built robust backend APIs with Node.js (Express, NestJS) and Go, integrating real-time WebSocket communication channels.",
        "Modeled relational database schemas (PostgreSQL) with transactional boundaries, indexing strategies, and multi-tier approval flows.",
        "Delivered Boothin Photobooth — an omnichannel booking platform and Electron desktop application controlling physical photo hardware."
      ],
      technologies: ["Node.js", "Express", "NestJS", "Go", "PostgreSQL", "Redis", "React", "Docker", "Linux"],
      impactHighlights: [
        "Successfully launched multiple enterprise platforms serving active daily business operations.",
        "Engineered resilient multi-department approval pipelines and robust role-based access control (RBAC)."
      ]
    },
    {
      period: "2021 — 2022",
      role: "R&D Software Engineer",
      company: "Arrow Tech",
      companyType: "Smart Home & IoT Technology Firm",
      location: "Hanoi, Vietnam",
      summary:
        "Conducted R&D software engineering for smart home connected devices, IoT edge gateways, and telemetry data processing.",
      responsibilities: [
        "Engineered communication bridges between Zigbee/MQTT hardware modules and server backends.",
        "Implemented real-time sensor ingestion pipelines for environmental telemetry, power metering, and security alerts.",
        "Optimized software running on embedded Linux gateways, ensuring local automation rules execute reliably during network disconnects."
      ],
      technologies: ["Go", "Python", "C/C++", "MQTT", "Zigbee", "Linux Embedded", "WebSockets", "PostgreSQL"],
      impactHighlights: [
        "Reduced telemetry and device command latency across the local home network to sub-30ms.",
        "Ensured continuous offline smart home automation execution during WAN connectivity dropouts."
      ]
    },
    {
      period: "2019 — 2021",
      role: "Software Developer",
      company: "Core Systems & Logistics",
      companyType: "Software Engineering (Started during undergraduate studies at HUST)",
      location: "Hanoi, Vietnam",
      summary:
        "Started practical software engineering during undergraduate studies at Hanoi University of Science and Technology (HUST), building backend APIs and warehouse systems.",
      responsibilities: [
        "Developed RESTful backend microservices and API endpoints using Node.js, Python, and Go.",
        "Designed relational database tables, optimized SQL queries, and implemented indexing strategies on PostgreSQL and MySQL.",
        "Engineered warehouse management system (WMS) features: barcode scanning validation and order dispatching.",
        "Graduated from Hanoi University of Science and Technology (HUST) - Computer Engineering (Hedspi Vietnam-Japan Program)."
      ],
      technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MySQL", "REST API", "Git"],
      impactHighlights: [
        "Established a strong, disciplined foundation in backend architecture and database systems from early career.",
        "Eliminated full-table scans on high-frequency transaction tables through targeted indexing."
      ]
    }
  ],
  ja: [
    {
      period: "2024年 — 現在 (2026)",
      role: "データエンジニア (Data Engineer)",
      company: "Astec",
      companyType: "日系FDI企業",
      location: "ベトナム・ハノイ",
      summary:
        "日系企業の業務運用に向けたデータ処理基盤、ETL/ELTパイプライン、およびBI分析プラットフォームの構築・運用。",
      responsibilities: [
        "基幹ERP、CRM、在庫システムからのデータ統合を担うETL/ELTパイプラインの構築と最適化。",
        "PostgreSQLおよびClickHouseを用いた分析用データストアの設計と集計クエリのチューニング。",
        "Python (FastAPI) およびNode.jsを用いたデータ連携・管理ダッシュボード用バックエンドAPIの開発。",
        "日本のPMや担当者と直接連携し、要件定義から技術仕様への落とし込みと実装を担当。"
      ],
      technologies: ["PostgreSQL", "ClickHouse", "Python", "FastAPI", "Node.js", "ETL/ELT", "Docker", "BI"],
      impactHighlights: [
        "定期集計レポートおよびBIクエリの実行速度を大幅に高速化。",
        "複数システム間におけるデータ同期処理の完全性と整合性を担保。"
      ]
    },
    {
      period: "2022年 — 2024年",
      role: "ソフトウェアエンジニア（フリーランス）",
      company: "日系・企業案件受託開発",
      companyType: "エンタープライズ業務システム開発",
      location: "ベトナム / リモート",
      summary:
        "日系パートナー企業や法人クライアント向けの基幹系業務システム、バックエンドAPI、およびリアルタイム通信機能の開発。",
      responsibilities: [
        "印刷製造業ERP (PrintDesk)、貿易税関物流ERP (IEAS)、人事労務給与システム (DosuHR) などの基幹系システムの開発。",
        "Node.js (Express, NestJS) およびGoを用いたバックエンドAPIの構築とWebSocketリアルタイム通信の実装。",
        "PostgreSQLにおけるトランザクション設計、インデックス設計、多段階承認フローのデータモデリング。",
        "実店舗型フォトブース（Boothin）向けのオンライン予約システムおよびハードウェア制御用Electronアプリの開発。"
      ],
      technologies: ["Node.js", "Express", "NestJS", "Go", "PostgreSQL", "Redis", "React", "Docker", "Linux"],
      impactHighlights: [
        "実際の業務オペレーションを支える複数の基幹業務システムの納品・本番稼働を達成。",
        "部署横断の承認ワークフローおよび厳格なRBACアクセス制御の安定稼働を実現。"
      ]
    },
    {
      period: "2021年 — 2022年",
      role: "R&Dソフトウェアエンジニア",
      company: "Arrow Tech",
      companyType: "スマートホーム・IoT技術開発",
      location: "ベトナム・ハノイ",
      summary:
        "スマートホーム機器、IoTエッジゲートウェイ、およびテレメトリデータ処理向けソフトウェアの研究開発。",
      responsibilities: [
        "Zigbee/MQTT通信ハードウェアモジュールとサーバーを繋ぐ通信ブリッジ機能の実装。",
        "温湿度センサー、電力測定、セキュリティアラートなどのリアルタイムデータ収集パイプラインの構築。",
        "組込みLinuxゲートウェイ上で動作するデーモンの最適化と、回線不通時のローカル自律動作の確保。"
      ],
      technologies: ["Go", "Python", "C/C++", "MQTT", "Zigbee", "Linux Embedded", "WebSockets", "PostgreSQL"],
      impactHighlights: [
        "ホーム内ローカルネットワークにおける機器制御レイテンシを30ms未満に短縮。",
        "外部インターネット切断時でもホーム自動化シナリオが途切れることなく動作する信頼性を確保。"
      ]
    },
    {
      period: "2019年 — 2021年",
      role: "ソフトウェアデベロッパー",
      company: "バックエンド・システム開発",
      companyType: "ソフトウェア開発（ハノイ工科大学在学時より実務開始）",
      location: "ベトナム・ハノイ",
      summary:
        "ハノイ工科大学（HUST）在学中より実務開発をスタート。バックエンドAPI、倉庫管理（WMS）モジュール、およびデータベース連携の開発に従事。",
      responsibilities: [
        "Node.js、Python、Goを用いたRESTful APIおよびバックエンドエンドポイントの開発。",
        "PostgreSQLおよびMySQLにおけるリレーショナルテーブル設計、SQLクエリ最適化、インデックス設計。",
        "倉庫管理システム（WMS）のバーコード照合、在庫ロット追跡、出荷連携モジュールの開発支援。",
        "ハノイ工科大学Hedspiプログラムで学んだシステムアーキテクチャやネットワーク知識を現場開発に応用。"
      ],
      technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MySQL", "REST API", "Git"],
      impactHighlights: [
        "学生時代よりバックエンドおよびDB設計の実務経験を積み、実践的な基礎力を確立。",
        "適切なインデックス設計により、高頻度トランザクションテーブルのフルスキャンを解消。"
      ]
    }
  ]
};

export const experiences: ExperienceItem[] = experiencesByLang.vi;
