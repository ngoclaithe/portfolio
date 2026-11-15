import { Project, LiveProjectStatus } from "../types";
import { Lang } from "../i18n/types";

// Shared technical stack arrays
const ieasTech = ["React", "Node.js", "Express", "PostgreSQL", "Redis", "TypeScript", "Tailwind CSS", "Docker"];
const printdeskTech = ["React", "Express", "Node.js", "PostgreSQL", "Redis", "Socket.IO", "TypeScript", "Nginx"];
const hropsTech = ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "JWT", "Docker"];
const jlearnTech = ["Next.js", "Node.js", "PostgreSQL", "Socket.IO", "Redis", "TypeScript", "Tailwind CSS"];
const boothinTech = ["Electron", "Next.js", "PostgreSQL", "WebSocket", "SQLite", "Tailwind CSS", "Node.js"];
const astecDataTech = ["ClickHouse", "PostgreSQL", "Python", "FastAPI", "Go", "Docker", "ETL/ELT", "BI Analytics"];
const arrowtechTech = ["Go", "C/C++", "MQTT", "Zigbee", "Linux Embedded", "WebSockets", "PostgreSQL"];
const ecommerceTech = ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Redis", "Docker"];

export const projectsByLang: Record<Lang, Project[]> = {
  vi: [
    {
      id: "ieas-erp",
      slug: "import-export-erp",
      title: "Hệ thống ERP Hải quan & Logistics Xuất nhập khẩu",
      category: "ERP",
      featured: true,
      ndaNotice: "Tên doanh nghiệp, công thức tính thuế nội bộ và bảng giá thương mại đã được ẩn danh theo cam kết bảo mật (NDA).",
      shortDescription:
        "Nền tảng ERP trọng yếu số hóa quy trình thương mại quốc tế, đối soát sổ cái đa tiền tệ, thẩm định hồ sơ hải quan và theo dõi hành trình vận tải container.",
      problem:
        "Doanh nghiệp thương mại xuyên biên giới quản lý hàng nghìn tờ khai mỗi tháng. Bảng tính rời rạc gây sai lệch số liệu hải quan, chậm trễ thông quan tại cảng và phát sinh chi phí lưu kho bãi (demurrage).",
      solution:
        "Xây dựng hệ thống ERP tích hợp toàn bộ vòng đời chứng từ xuất nhập khẩu, tự động hạch toán kế toán đa tiền tệ, theo dõi trạng thái hồ sơ hải quan thời gian thực và đối soát cước vận chuyển đối tác.",
      myRole: [
        "Kỹ sư backend phụ trách mô hình hóa schema cơ sở dữ liệu PostgreSQL, đảm bảo tính toàn vẹn giao dịch ACID và xây dựng core backend services.",
        "Thiết kế engine kế toán đa tiền tệ xử lý biến động tỷ giá ngoại hối và tự động phát sinh bút toán nợ/có sổ cái.",
        "Xây dựng state machine phân quyền hồ sơ chứng từ hải quan, ngăn chặn chỉnh sửa trái phép sau khi ký duyệt manifest."
      ],
      keyChallenges: [
        "Đảm bảo tính nhất quán dữ liệu tuyệt đối đối với các giao dịch tài chính giá trị lớn và quy đổi ngoại tệ xuyên biên giới.",
        "Quản lý lịch sử phiên bản tài liệu và audit trail đáp ứng tiêu chuẩn kiểm toán thương mại hàng hải quốc tế.",
        "Schema quan hệ phức tạp kết nối đơn đặt hàng (PO), hóa đơn thương mại, packing list và vận đơn đường biển (B/L)."
      ],
      architectureHighlights: [
        "Backend Node.js/Express dạng modular monolith kết hợp cụm PostgreSQL tối ưu index chuyên sâu.",
        "Giao dịch nguyên tử (atomic transaction) sử dụng savepoint và row-level lock để ngăn ngừa sai lệch số dư sổ cái.",
        "Lớp cache Redis phục vụ tra cứu tỷ giá ngoại tệ, bảng thuế và mã danh mục hải quan tốc độ cao.",
        "Pipeline tự động tạo file PDF biểu mẫu tờ khai chuẩn hóa theo nghiệp vụ ngoại thương."
      ],
      resultsAndImpact: [
        "Giảm 75% thời gian xử lý bộ chứng từ thông quan, loại bỏ tình trạng chậm trễ tại cửa khẩu cảng.",
        "100% dữ liệu tài chính có thể truy xuất nguồn gốc (auditability), vượt qua các kỳ kiểm toán nghiêm ngặt.",
        "Tự động hóa hoàn toàn việc đối soát cước vận chuyển với hàng chục hãng tàu quốc tế."
      ],
      technologies: ieasTech,
      liveUrl: "https://ieas.dosutech.site/",
      metrics: [
        { label: "Thời gian xử lý", value: "-75%" },
        { label: "Sai lệch sổ cái", value: "0%" },
        { label: "Độ trễ query TB", value: "<45ms" }
      ]
    },
    {
      id: "printdesk-erp",
      slug: "printdesk-manufacturing-erp",
      title: "Hệ thống ERP Điều độ Sản xuất & Nhà máy In ấn Công nghiệp",
      category: "ERP",
      featured: true,
      ndaNotice: "Thông số vận hành máy in độc quyền và khuôn mẫu in ấn của khách hàng đã được ẩn danh theo cam kết bảo mật.",
      shortDescription:
        "Hệ thống ERP sản xuất toàn diện quản lý phân xưởng in thương mại, quy trình đa công đoạn (chế bản, in ấn, gia công sau in), tự động khấu trừ vật tư và điều phối máy móc.",
      problem:
        "Nhà máy in bao bì gặp tình trạng nghẽn cổ chai giữa bộ phận tiếp nhận đơn, xuất kẽm chế bản, lịch chạy máy in và kho giấy nguyên liệu dẫn đến nguy cơ thiếu vật tư gián đoạn sản xuất.",
      solution:
        "Xây dựng hệ thống ERP thời gian thực với bảng điều khiển Kanban trực quan, cơ chế tự động trừ kho nguyên vật liệu theo định mức và cân bằng tải lịch chạy máy in.",
      myRole: [
        "Thiết kế engine trạng thái theo dõi đơn hàng xuyên suốt các công đoạn: chế bản, in, cán màng, bế, dán hộp, đóng gói và xuất xưởng.",
        "Xây dựng dashboard điều độ WebSocket thời gian thực hiển thị công suất và trạng thái hoạt động của từng máy in theo ca kíp.",
        "Lập trình logic khấu trừ vật tư tự động và nguyên tử khi đơn hàng hoàn thành từng cột mốc sản xuất."
      ],
      keyChallenges: [
        "Đồng bộ hóa dữ liệu thời gian thực giữa máy tính bảng công nhân dưới xưởng và màn hình điều hành trung tâm.",
        "Tính toán chi phí sản xuất động dựa trên thông số vật lý phức tạp (định lượng giấy, loại mực, số lượng bản kẽm, thời gian chạy máy).",
        "Xử lý xung đột ghi đồng thời (race condition) khi nhiều thợ in cùng cập nhật trạng thái máy trên chuyền."
      ],
      architectureHighlights: [
        "Kiến trúc hướng sự kiện (event-driven) sử dụng Redis Pub/Sub và Socket.IO phục vụ cập nhật realtime phân xưởng.",
        "Schema PostgreSQL tối ưu với ràng buộc khóa ngoại chặt chẽ và hàm trigger tự động trừ kho.",
        "Giao diện React tối ưu cho cả màn hình cảm ứng công nghiệp tại xưởng và máy tính quản lý."
      ],
      resultsAndImpact: [
        "Giảm 40% thời gian máy in nằm chờ và xung đột lịch chạy máy giữa các ca sản xuất.",
        "Loại bỏ triệt để sai lệch tồn kho nguyên vật liệu, cảnh báo ngưỡng tái đặt hàng chính xác.",
        "Giám sát tiến độ realtime giúp phản hồi tiến độ đơn hàng cho khách hàng doanh nghiệp ngay trong ngày."
      ],
      technologies: printdeskTech,
      liveUrl: "https://printdesk.bscxau.link/login",
      metrics: [
        { label: "Thời gian chờ máy", value: "-40%" },
        { label: "Độ chính xác tồn kho", value: "99.8%" },
        { label: "Độ trễ đồng bộ", value: "<80ms" }
      ]
    },
    {
      id: "hrops-hrm",
      slug: "enterprise-hrm-payroll",
      title: "Nền tảng Vận hành Nhân sự & Tự động hóa Tính lương Doanh nghiệp",
      category: "HRM",
      featured: true,
      ndaNotice: "Dữ liệu định danh cá nhân nhân viên (PII) và bậc lương đã được bảo mật tuyệt đối theo chuẩn bảo vệ dữ liệu.",
      shortDescription:
        "Hệ thống quản lý nhân sự toàn diện: hồ sơ nhân sự, dữ liệu máy chấm công vân tay/khuôn mặt, luồng phê duyệt đơn từ nhiều cấp và động cơ tính lương tự động.",
      problem:
        "Doanh nghiệp nhiều chi nhánh gặp khó khăn trong việc đối soát dữ liệu chấm công thủ công, ca kíp phức tạp, tính toán giờ làm thêm dễ sai sót và quy trình duyệt phép nhiều tầng chậm trễ.",
      solution:
        "Xây dựng nền tảng HRM tự động hóa thu thập dữ liệu chấm công từ thiết bị sinh trắc học, linh hoạt cấu hình ca kíp, phân quyền phê duyệt theo sơ đồ tổ chức và tính lương tự động hàng loạt.",
      myRole: [
        "Kỹ sư backend thiết kế động cơ công thức tính lương, pipeline tiếp nhận log chấm công và cây phân cấp sơ đồ tổ chức.",
        "Thiết kế hệ thống phân quyền động (RBAC) theo ma trận chức danh (Ban giám đốc, HR, Trưởng phòng ban, Nhân viên).",
        "Xây dựng batch worker tính toán các khoản giảm trừ, mức đóng bảo hiểm xã hội và thuế thu nhập cá nhân lũy tiến."
      ],
      keyChallenges: [
        "Mô hình hóa cấu trúc cây phòng ban đệ quy và quy trình ủy quyền phê duyệt đa cấp độ linh hoạt.",
        "Xử lý lượng lớn log chấm công thô từ các máy chấm công IoT mà không bị mất mát dấu thời gian.",
        "Bảo mật và mã hóa cơ sở dữ liệu hồ sơ lương, ghi log kiểm toán truy cập toàn diện."
      ],
      architectureHighlights: [
        "Sử dụng PostgreSQL CTE (Common Table Expressions) và closure tables giúp duyệt cây tổ chức dưới 1 phần nghìn giây.",
        "Worker tính toán bảng lương chạy độc lập trong khối transaction đảm bảo tính nguyên tử khi tạo phiếu lương cuối tháng.",
        "Bảo vệ API bằng JWT claims và cơ chế Row-Level Security (RLS) ở tầng cơ sở dữ liệu."
      ],
      resultsAndImpact: [
        "Rút ngắn thời gian tính lương hàng tháng từ 5 ngày thủ công xuống chỉ còn 3 phút tự động hóa.",
        "Loại bỏ hoàn toàn sai lệch dữ liệu chấm công giữa các văn phòng chi nhánh phân tán.",
        "Cung cấp cho ban lãnh đạo dashboard báo cáo biến động nhân sự và chi phí lao động tức thời."
      ],
      technologies: hropsTech,
      liveUrl: "https://hrops.dosutech.site/login",
      metrics: [
        { label: "Thời gian tính lương", value: "3 phút" },
        { label: "Xử lý chấm công", value: "100k/giờ" },
        { label: "Tỷ lệ sai sót", value: "0.00%" }
      ]
    },
    {
      id: "jlearn-lms",
      slug: "jlearn-online-learning-platform",
      title: "Nền tảng Đào tạo Trực tuyến Tương tác & Khảo thí Cao độ (JLearn)",
      category: "LMS",
      featured: true,
      ndaNotice: "Đề thi đánh giá và thuật toán xếp hạng học viên đã được ẩn danh theo thỏa thuận dự án.",
      shortDescription:
        "Hệ thống quản lý học tập (LMS) phục vụ khóa học đa cấp độ, bài giảng video tương tác, tổ chức thi trắc nghiệm trực tuyến đồng thời và báo cáo phân tích năng lực.",
      problem:
        "Tổ chức giáo dục gặp tình trạng nghẽn server và mất bài thi của học viên khi hàng nghìn thí sinh cùng nộp bài trong các kỳ thi chung giờ cao điểm.",
      solution:
        "Thiết kế kiến trúc LMS với cơ chế tự động lưu bài (autosave) offline-first, đồng bộ Socket.IO thời gian thực và phân vùng cơ sở dữ liệu phục vụ báo cáo học tập.",
      myRole: [
        "Kỹ sư Full-stack & Core Backend phụ trách kiến trúc xử lý bài thi và đồng bộ điểm số.",
        "Xây dựng cơ chế giám sát thi trực tuyến và tự động lưu bài định kỳ chống rớt mạng kết nối internet.",
        "Lập trình thuật toán trộn đề thi tự động, chấm điểm trắc nghiệm tức thì và dashboard phân tích tiến độ học tập."
      ],
      keyChallenges: [
        "Chịu tải hàng nghìn kết nối WebSocket gửi bài đồng thời trong những giây cuối cùng của kỳ thi.",
        "Đảm bảo tuyệt đối không lộ đề thi và xác thực thời gian đếm ngược chính xác từ máy chủ backend.",
        "Tích hợp luồng phát video tối ưu băng thông và ghi nhận chính xác thời lượng học tập của học viên."
      ],
      architectureHighlights: [
        "Frontend Next.js với bộ quản lý trạng thái gọn nhẹ giúp chuyển trang bài thi siêu tốc.",
        "Hàng đợi Redis queue xử lý bất đồng bộ việc tổng hợp điểm số và cấp phát chứng chỉ tự động.",
        "Phân vùng bảng PostgreSQL tách biệt lịch sử thi lưu trữ và các phiên làm bài thi đang diễn ra."
      ],
      resultsAndImpact: [
        "Hỗ trợ các kỳ thi tập trung với tỷ lệ uptime 100%, không bị sập máy chủ và không mất bài thi.",
        "Giảm 80% khối lượng chấm thi của giảng viên nhờ cơ chế chấm bài tự động.",
        "Cung cấp cho học viên biểu đồ phân tích kỹ năng theo chuẩn khung năng lực."
      ],
      technologies: jlearnTech,
      liveUrl: "https://jlearn.dosutech.site/",
      metrics: [
        { label: "Uptime khi thi", value: "100%" },
        { label: "Tần suất lưu bài", value: "Mỗi 5s" },
        { label: "Tốc độ chấm bài", value: "+80%" }
      ]
    },
    {
      id: "boothin-photobooth",
      slug: "boothin-photobooth-platform",
      title: "Hệ thống Đặt lịch Đa chi nhánh & Điều khiển Photobooth Tự động",
      category: "CRM",
      featured: false,
      ndaNotice: "Firmware điều khiển phần cứng chụp ảnh và công thức render ảnh đã được bảo mật.",
      shortDescription:
        "Hệ sinh thái phần mềm bán lẻ gồm cổng đặt lịch chụp ảnh online, quản trị đa chi nhánh và ứng dụng desktop Electron giao tiếp trực tiếp với buồng photobooth tại cửa hàng.",
      problem:
        "Chuỗi cửa hàng photobooth gặp rắc rối trùng lịch đặt trước, lỗi mất kết nối giữa phần mềm bán vé và thiết bị chụp ảnh, cùng quy trình gửi ảnh thủ công chậm trễ.",
      solution:
        "Xây dựng hệ sinh thái đồng bộ: portal đặt lịch online có cơ chế khóa khung giờ realtime và ứng dụng desktop kết nối máy ảnh DSLR, máy in nhiệt và lưu trữ đám mây.",
      myRole: [
        "Thiết kế kiến trúc hệ thống đặt lịch đa kênh và broker giao tiếp WebSocket giữa các máy booth và server cloud.",
        "Lập trình cơ chế xác thực token phiên chụp ngăn chặn kích hoạt buồng chụp trái phép.",
        "Thiết kế pipeline nạp ảnh tự động và phân phối album ảnh số cho khách hàng tức thì qua cloud."
      ],
      keyChallenges: [
        "Kết nối ứng dụng desktop với thiết bị phần cứng (máy ảnh DSLR tethering, máy in nhiệt) qua API cloud.",
        "Hỗ trợ máy booth tiếp tục hoạt động offline khi đứt mạng cửa hàng và tự động phát lại hàng đợi (queue replay) khi có mạng.",
        "Tối ưu nén ảnh dung lượng cao và phân phối CDN với độ trễ thấp nhất."
      ],
      architectureHighlights: [
        "Ứng dụng desktop Electron với hàng đợi SQLite nội bộ đảm bảo độ tin cậy offline-first.",
        "Kênh WebSocket realtime cập nhật trạng thái buồng chụp (Rảnh, Đang chụp, Đang in, Bảo trì) về quản trị viên.",
        "Nén ảnh tốc độ cao và lưu trữ phân phối an toàn trên dịch vụ cloud tương thích S3."
      ],
      resultsAndImpact: [
        "Tự động hóa hơn 95% lượt kích hoạt chụp tại cửa hàng mà không cần nhân viên thu ngân thao tác.",
        "Loại bỏ 100% tình trạng trùng lịch đặt phòng giữa các chi nhánh trung tâm thương mại.",
        "Nhận ảnh số tức thì qua mã QR giúp tăng 65% lượt chia sẻ trải nghiệm trên mạng xã hội."
      ],
      technologies: boothinTech,
      liveUrl: "https://boothin.dosutech.site/",
      metrics: [
        { label: "Kích hoạt tự động", value: "95%" },
        { label: "Trùng lặp lịch", value: "0" },
        { label: "Chia sẻ ảnh số", value: "+65%" }
      ]
    },
    {
      id: "astec-data-platform",
      slug: "enterprise-data-warehouse-platform",
      title: "Nền tảng Kho Dữ liệu Phân tích & Báo cáo Real-Time Doanh nghiệp",
      category: "Data Platform",
      featured: false,
      ndaNotice: "Cấu trúc dữ liệu thương mại nội bộ và cấu hình server phân tích đã được ẩn danh theo chuẩn NDA.",
      shortDescription:
        "Nền tảng kỹ thuật dữ liệu doanh nghiệp xử lý trích xuất dữ liệu vận hành từ nhiều cơ sở dữ liệu giao dịch về kho dữ liệu ClickHouse và cung cấp API báo cáo phân tích tốc độ cao.",
      problem:
        "Cơ sở dữ liệu quan hệ giao dịch truyền thống bị quá tải khi chạy các câu lệnh SQL phân tích phức tạp trên hàng triệu dòng, làm chậm hệ thống ERP sản xuất và trễ báo cáo vận hành.",
      solution:
        "Thiết kế và triển khai nền tảng data engineering độc lập gồm các pipeline ELT tự động, kho dữ liệu dạng cột ClickHouse và dịch vụ API phục vụ báo cáo BI tức thì.",
      myRole: [
        "Kỹ sư nền tảng dữ liệu (Data Platform Engineer) thiết kế pipeline đồng bộ ELT và mô hình dữ liệu ClickHouse.",
        "Triển khai cơ chế trích xuất dữ liệu gia tăng (incremental CDC) và batch upsert tối ưu hóa ghi dữ liệu.",
        "Xây dựng các microservice tổng hợp dữ liệu tốc độ cao phục vụ dashboard lãnh đạo với thời gian phản hồi dưới 1 giây."
      ],
      keyChallenges: [
        "Đảm bảo tính nhất quán dữ liệu trong quá trình nhân bản từ nhiều DB quan hệ sang kho dữ liệu OLAP dạng cột.",
        "Tối ưu hóa khóa phân vùng (partition key), khóa sắp xếp (sorting key) và materialized view cho dữ liệu chuỗi thời gian.",
        "Đảm bảo tính sẵn sàng cao, cơ chế sao lưu tự động và phục hồi lỗi giữa các node dữ liệu."
      ],
      architectureHighlights: [
        "Cơ sở dữ liệu dạng cột ClickHouse giúp tăng tốc độ truy vấn tổng hợp lên nhiều lần so với RDBMS.",
        "Microservices Python (FastAPI) và Go điều phối pipeline ETL/ELT kèm dead-letter queue xử lý lỗi.",
        "Cơ chế kiểm định schema tự động ngăn ngừa việc thay đổi cấu trúc bảng nguồn làm gãy luồng phân tích."
      ],
      resultsAndImpact: [
        "Rút ngắn thời gian tạo báo cáo điều hành từ 18 phút xuống chỉ còn 1.2 giây.",
        "Giảm tải hoàn toàn lưu lượng truy vấn phân tích nặng ra khỏi hệ thống ERP giao dịch cốt lõi.",
        "Cung cấp khả năng theo dõi dữ liệu kinh doanh vận hành xuyên suốt theo thời gian thực."
      ],
      technologies: astecDataTech,
      metrics: [
        { label: "Tăng tốc truy vấn", value: "15x" },
        { label: "Thời gian báo cáo", value: "1.2s" },
        { label: "Tải nạp dữ liệu/ngày", value: "5M+ dòng" }
      ]
    },
    {
      id: "arrowtech-iot-gateway",
      slug: "iot-smart-home-telemetry",
      title: "Gateway IoT Edge Smart Home & Broker Thu thập Dữ liệu Telemetry",
      category: "IoT / Embedded",
      featured: false,
      ndaNotice: "Khóa mã hóa giao thức không dây và sơ đồ mạch phần cứng độc quyền đã được ẩn danh.",
      shortDescription:
        "Phần mềm nhúng edge gateway và broker thu thập dữ liệu đám mây điều phối mạng cảm biến nhà thông minh, thiết bị điều khiển phần cứng Zigbee và luồng sự kiện độ trễ thấp.",
      problem:
        "Thiết bị smart home hoạt động trên nhiều chuẩn không dây không đồng nhất (Zigbee, BLE, Wi-Fi) gặp tình trạng độ trễ cao, rớt gói tin và đứt kết nối nghiêm trọng khi router mạng khởi động lại.",
      solution:
        "Phát triển dịch vụ edge gateway nhúng bằng Go và C/C++ có khả năng tự thực thi kịch bản tự động hóa nội bộ (local scenes) và đồng bộ bất đồng bộ dữ liệu cảm biến qua MQTT lên server.",
      myRole: [
        "Kỹ sư R&D phần mềm phát triển event loop tại gateway và cầu nối truyền thông thiết bị.",
        "Lập trình module giải mã gói tin serial cấp phần cứng và bộ xử lý giao thức không dây Zigbee.",
        "Xây dựng API tiếp nhận dữ liệu trên cloud có khả năng chống chịu đột biến dữ liệu khi toàn mạng có điện trở lại."
      ],
      keyChallenges: [
        "Giới hạn tài nguyên bộ nhớ RAM và CPU trên vi thiết bị gateway nhúng Linux.",
        "Đảm bảo khả năng tự chủ: các ngữ cảnh tự động (đèn, khóa, cảm biến nhiệt) bắt buộc phải chạy được ngay cả khi mất internet.",
        "Mã hóa an toàn dữ liệu payload truyền từ thiết bị lên đám mây với mức tiêu hao tài nguyên thấp nhất."
      ],
      architectureHighlights: [
        "Daemon Go biên dịch độc lập, kích thước nhỏ gọn, chạy ổn định trên nền tảng Linux nhúng.",
        "Broker MQTT cấu hình mức QoS tương ứng với độ quan trọng (QoS 0 cho nhiệt độ định kỳ, QoS 2 cho cảnh báo an ninh).",
        "Bộ đệm vòng (ring-buffer) SQLite cục bộ lưu tạm dữ liệu đo đạc trong thời gian rớt mạng internet."
      ],
      resultsAndImpact: [
        "Giảm độ trễ phản hồi kích hoạt cảm biến trong mạng nội bộ xuống dưới 30 mili-giây.",
        "Đạt 100% độ tin cậy thực thi ngữ cảnh tự động hóa ngay cả khi mất hoàn toàn kết nối mạng ra internet.",
        "Triển khai ổn định trên hàng nghìn node phần cứng thực tế tại các công trình nhà thông minh."
      ],
      technologies: arrowtechTech,
      metrics: [
        { label: "Độ trễ điều khiển", value: "<30ms" },
        { label: "Độ tin cậy offline", value: "100%" },
        { label: "Chiếm dụng RAM", value: "<24MB" }
      ]
    },
    {
      id: "ecommerce-ecosystem",
      slug: "enterprise-ecommerce-ecosystem",
      title: "Nền tảng Thương mại Điện tử Chuyên ngành & Xử lý Giao dịch Tải cao",
      category: "E-Commerce",
      featured: false,
      ndaNotice: "Tài khoản đối tác cổng thanh toán và luồng chuyển đổi kinh doanh đã được bảo vệ theo NDA.",
      shortDescription:
        "Nền tảng thương mại điện tử chuyên ngành thiết bị công nghệ, sách và thời trang (DosuTech Store, DosuBook, elSaco), tối ưu hóa tìm kiếm danh mục siêu tốc và máy trạng thái đơn hàng.",
      problem:
        "Lượng truy cập tăng vọt trong các đợt flash sale gây quá tải hệ thống thương mại nguyên khối, dẫn đến tình trạng tranh chấp dữ liệu (race condition) và bán vượt quá số lượng hàng tồn kho.",
      solution:
        "Thiết kế storefront Next.js/React hiện đại kết hợp cơ chế khóa giao dịch PostgreSQL và bộ đếm giữ chỗ tồn kho (reservation counter) phân tán bằng Redis.",
      myRole: [
        "Kỹ sư Full-stack thiết kế mô hình dữ liệu, cơ chế indexing danh mục và state machine đơn hàng.",
        "Lập trình logic trừ tồn kho nguyên tử ngăn chặn triệt để tình trạng bán vượt số lượng tồn trong đợt sale.",
        "Tích hợp cổng thanh toán trực tuyến bảo mật, tự động xuất hóa đơn và xử lý tiền tệ linh hoạt."
      ],
      keyChallenges: [
        "Xử lý hàng nghìn khách hàng cùng tranh mua số lượng hàng khuyến mãi có hạn trong cùng một thời điểm.",
        "Đảm bảo tốc độ tải trang ban đầu (FCP < 0.8s) nhằm tối ưu trải nghiệm người dùng di động và SEO.",
        "Xây dựng luồng thanh toán mượt mà kèm cơ chế thẩm định mã giảm giá đa tầng phức tạp."
      ],
      architectureHighlights: [
        "Kiến trúc Next.js SSR / ISR với Edge cache phân phối danh mục sản phẩm tốc độ cao.",
        "Khóa phân tán Redis distributed lock bảo vệ thao tác trừ tồn kho trong quá trình thanh toán.",
        "Schema cơ sở dữ liệu PostgreSQL chuẩn hóa với đầy đủ chỉ mục trên các thuộc tính tìm kiếm sản phẩm."
      ],
      resultsAndImpact: [
        "Chịu tải ổn định trước lưu lượng tăng gấp 5 lần trong các chiến dịch flash sale mà không bị bán vượt tồn kho.",
        "Tốc độ duyệt danh mục và tìm kiếm sản phẩm đạt dưới 1 giây trên cả mobile và desktop.",
        "Tự động chuyển thông tin đơn hàng thanh toán thành công về hàng đợi đóng gói của kho hàng."
      ],
      technologies: ecommerceTech,
      liveUrl: "https://dosutechstore.dosutech.site/",
      metrics: [
        { label: "Bán vượt tồn kho", value: "0" },
        { label: "Tải trang (FCP)", value: "<0.8s" },
        { label: "Chịu tải flash sale", value: "5x" }
      ]
    }
  ],
  en: [
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
        "Core Backend Engineer responsible for database schema modeling, ACID transaction boundaries, and core backend services.",
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
      technologies: ieasTech,
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
      technologies: printdeskTech,
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
        "Core Backend Engineer for payroll formula engine, timekeeping ingestion pipelines, and organizational hierarchy trees.",
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
      technologies: hropsTech,
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
        "Full-stack Engineer & Core Backend Developer.",
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
      technologies: jlearnTech,
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
      technologies: boothinTech,
      liveUrl: "https://boothin.dosutech.site/",
      metrics: [
        { label: "Auto Activations", value: "95%" },
        { label: "Double-bookings", value: "0" },
        { label: "Social Sharing", value: "+65%" }
      ]
    },
    {
      id: "astec-data-platform",
      slug: "enterprise-data-warehouse-platform",
      title: "Enterprise Operational Data Warehouse & Real-Time Analytics Platform",
      category: "Data Platform",
      featured: false,
      ndaNotice: "Internal operational data structures and analytics server topology sanitized per NDA.",
      shortDescription:
        "Enterprise data platform extracting operational data from multiple disparate transactional backends into a ClickHouse columnar warehouse, powering low-latency business analytics.",
      problem:
        "Legacy relational databases buckled under complex analytical SQL queries joining millions of rows, causing production ERP slowdowns and delayed business intelligence reports.",
      solution:
        "Designed and deployed a decoupled data engineering platform featuring automated ELT pipelines, columnar data warehousing, and fast aggregated reporting APIs.",
      myRole: [
        "Data Platform Engineer designing ELT synchronization pipelines and ClickHouse dimensional schema.",
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
      technologies: astecDataTech,
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
      technologies: arrowtechTech,
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
        "Full-stack Engineer designing data models, catalog indexing, and checkout state machines.",
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
      technologies: ecommerceTech,
      liveUrl: "https://dosutechstore.dosutech.site/",
      metrics: [
        { label: "Inventory Overselling", value: "0" },
        { label: "Page Load (FCP)", value: "<0.8s" },
        { label: "Traffic Surge Handling", value: "5x" }
      ]
    }
  ],
  ja: [
    {
      id: "ieas-erp",
      slug: "import-export-erp",
      title: "貿易税関・国際物流管理ERPシステム",
      category: "ERP",
      featured: true,
      ndaNotice: "顧客企業名、内部関税計算ルール、商用価格モデルはNDAに基づき匿名化・抽象化されています。",
      shortDescription:
        "国際貿易業務の完全デジタル化、多通貨元帳照合、税関書類バリデーション、およびコンテナ物流追跡を担う基幹ERP基盤。",
      problem:
        "毎月数千件の輸出入申告を管理する中で、分散したスプレッドシート運用により税関申告の不一致や通関遅延、コンテナ超過保管料の未把握が発生していました。",
      solution:
        "輸出入書類ライフサイクルの統合、多通貨会計仕訳の自動化、税関書類のリアルタイム追跡、および運送費照合を一元化するERPシステムを構築。",
      myRole: [
        "PostgreSQLスキーマ設計、ACIDトランザクション境界の定義、およびコアバックエンド開発を担当。",
        "為替レート変動に対応した多通貨会計エンジンおよび自動仕訳生成モジュールを設計。",
        "マニフェスト承認後の改ざんを防止する、権限ベースの税関書類ステートマシンを実装。"
      ],
      keyChallenges: [
        "高額金融取引およびクロスボーダー為替換算における完全なデータ整合性の担保。",
        "国際海上貿易コンプライアンスを満たす動的書類バージョニングと監査証跡の保持。",
        "発注書（PO）、商業送り状、パッキングリスト、船荷証券（B/L）を跨ぐ複雑なリレーショナル設計。"
      ],
      architectureHighlights: [
        "徹底的にインデックス設計されたPostgreSQLクラスタとNode.js/Expressモジュラーモノリス構成。",
        "元帳不整合を防止するPostgreSQLセーブポイントおよび行レベルロック（row-level lock）による原子性担保。",
        "高頻度な為替レート、税率テーブル、関税品目コード参照のためのRedisキャッシュ層。",
        "国際貿易標準に準拠した申告書類PDFの自動生成パイプライン。"
      ],
      resultsAndImpact: [
        "通関書類の処理時間を75%短縮し、港湾での通関遅延を解消。",
        "全財務取引における100%の監査追跡可能性を達成し、厳格な企業財務監査に適合。",
        "多数の国際海運会社との物流運賃照合作業を自動化・効率化。"
      ],
      technologies: ieasTech,
      liveUrl: "https://ieas.dosutech.site/",
      metrics: [
        { label: "書類処理時間", value: "-75%" },
        { label: "元帳不整合率", value: "0%" },
        { label: "平均クエリ応答", value: "<45ms" }
      ]
    },
    {
      id: "printdesk-erp",
      slug: "printdesk-manufacturing-erp",
      title: "印刷製造ライン管理・工程スケジューリングERP",
      category: "ERP",
      featured: true,
      ndaNotice: "印刷工場の固有製造パラメーターおよび顧客テンプレート情報はNDAに基づき匿名化されています。",
      shortDescription:
        "商業印刷工場の製造現場、プリプレス・印刷・加工の多段工程、原材料在庫の自動引き落とし、および進捗ディスパッチを統括する製造業ERP。",
      problem:
        "受注仕様の確定、製版（刷版）、印刷機稼働スケジュール、および用紙在庫の間でボトルネックが発生し、資材欠品による生産ライン停止が発生していました。",
      solution:
        "対話型Kanbanワークフロー、原材料の自動消費トリガー、および印刷機の動的負荷分散を備えたリアルタイム製造ERPを構築。",
      myRole: [
        "プリプレス、印刷、ラミネート、型抜き、製本・梱包、出荷に至るオーダー進捗ステートマシンを設計。",
        "工場シフトごとの機械稼働率をリアルタイムに可視化するWebSocketディスパッチダッシュボードを構築。",
        "各製造マイルストーン通過時に連動する原材料の原子的引き落としロジックを実装。"
      ],
      keyChallenges: [
        "工場内タブレット端末と中央管理画面間のリアルタイムデータ同期の維持。",
        "用紙米坪量、インキ種別、刷版枚数、機械稼働時間などの複雑な物理変数に基づく動的原価計算。",
        "複数オペレーターが同時に機械ステータスを更新する際の競合状態（race condition）の防止。"
      ],
      architectureHighlights: [
        "Redis Pub/SubとSocket.IOを活用したイベント駆動型リアルタイム現場通信アーキテクチャ。",
        "厳格な外部キー制約と自動トリガー関数を組み込んだ高信頼性PostgreSQLスキーマ。",
        "工場の産業用タッチパネルとPC管理画面の双方に最適化したReactインターフェース。"
      ],
      resultsAndImpact: [
        "印刷機のアイドル待機時間および工程スケジューリングの競合を40%削減。",
        "原材料在庫の帳簿乖離を解消し、正確な再発注ポイントの自動アラートを実現。",
        "リアルタイム進捗の可視化により、法人顧客に対する即日ステータス回答を可能に。"
      ],
      technologies: printdeskTech,
      liveUrl: "https://printdesk.bscxau.link/login",
      metrics: [
        { label: "機械アイドル時間", value: "-40%" },
        { label: "在庫追従精度", value: "99.8%" },
        { label: "同期レイテンシ", value: "<80ms" }
      ]
    },
    {
      id: "hrops-hrm",
      slug: "enterprise-hrm-payroll",
      title: "人事労務オペレーション＆給与自動計算プラットフォーム",
      category: "HRM",
      featured: true,
      ndaNotice: "社員の個人情報（PII）および給与テーブルは、情報保護法および労務コンプライアンスに基づき厳重に保護されています。",
      shortDescription:
        "人事情報管理、生体認証（指紋/顔認証）打刻連携、多段階承認フロー、および法令準拠の自動給与計算を統合したエンタープライズ人事労務基盤。",
      problem:
        "複数拠点展開企業において、手動での勤怠集計、複雑なシフト勤務形態、残業計算の入力ミス、および階層型承認プロセスの遅延が業務負荷となっていました。",
      solution:
        "生体認証端末からの打刻ログ自動取り込み、柔軟なシフト/休日ルール設定、RBACによる組織階層型承認ワークフロー、および一括自動給与計算を実現するHRM基盤を構築。",
      myRole: [
        "給与計算ロジックエンジン、打刻ログ取込パイプライン、および組織階層ツリー構造のバックエンド設計。",
        "役員、人事部、部門長、一般社員のマトリックスに対応した動的権限管理（RBAC）の実装。",
        "各種社会保険料、各種控除、累進課税所得税を自動処理するバッチ計算ワーカーの構築。"
      ],
      keyChallenges: [
        "再帰的な部門階層構造および柔軟な多段階承認代理委任フローのデータモデリング。",
        "IoT打刻端末から大量に送信される打刻生ログをタイムスタンプ欠損なく確実に取り込むこと。",
        "機密性の高い給与データの暗号化保存および監査ログの網羅的な記録。"
      ],
      architectureHighlights: [
        "PostgreSQLのCTE（共通テーブル式）およびクロージャテーブルを活用した組織ツリーの超高速探索。",
        "月末給与明細生成の原子性を保証する、トランザクション分離環境での計算ワーカー実行。",
        "JWTクレームおよびデータベースRow-Level Security（RLS）によるエンドポイントアクセス制御。"
      ],
      resultsAndImpact: [
        "毎月5営業日を要していた給与計算作業を、わずか3分の自動バッチ処理に短縮。",
        "分散する全拠点間における勤怠打刻の不整合をゼロに解消。",
        "人員稼働率および人件費の推移をリアルタイムに可視化するダッシュボードを提供。"
      ],
      technologies: hropsTech,
      liveUrl: "https://hrops.dosutech.site/login",
      metrics: [
        { label: "給与計算処理時間", value: "3分" },
        { label: "打刻ログ処理能力", value: "10万件/時" },
        { label: "計算誤差率", value: "0.00%" }
      ]
    },
    {
      id: "jlearn-lms",
      slug: "jlearn-online-learning-platform",
      title: "高同時接続インタラクティブ学習・オンライン試験基盤 (JLearn)",
      category: "LMS",
      featured: true,
      ndaNotice: "教育機関の評価基準および採点アルゴリズムはNDAに基づき一般化されています。",
      shortDescription:
        "体系的なコース配信、インタラクティブ動画講義、リアルタイムオンライン試験監督、および習熟度分析を備えたクラウドネイティブLMS。",
      problem:
        "多数の受験者が同時に一斉解答・提出を行う定期試験において、サーバー高負荷による遅延や答案データの消失リスクが生じていました。",
      solution:
        "オフラインファーストの自動答案保存（autosave）、Socket.IOによるリアルタイム同期、および分析クエリ分離設計を備えた高耐障害性LMSを構築。",
      myRole: [
        "フルスタックおよびコアバックエンド担当として、答案処理と採点集計のアーキテクチャを設計。",
        "一時的な回線瞬断時でも答案を失わないオフライン自動保存・同期メカニズムを実装。",
        "ランダム出題生成、選択式問題の即時採点エンジン、および学習進捗分析ダッシュボードを開発。"
      ],
      keyChallenges: [
        "試験カウントダウン終了時に数千件のWebSocket同時提出リクエストが集中するトラフィックの吸収。",
        "問題漏洩防止およびクライアント側改ざんを許さないサーバー主導型タイマー検証。",
        "低帯域環境にも配慮した動画ストリーミング連携と学習視聴ログの正確な記録。"
      ],
      architectureHighlights: [
        "ページ遷移レイテンシを極限まで抑えたNext.jsフロントエンドと軽量ステートストア。",
        "試験スコア集計と修了証発行を非同期に処理するRedisキューワーカー構成。",
        "過去試験履歴と進行中アクティブ試験セッションを物理的に分離したPostgreSQLパーティショニング。"
      ],
      resultsAndImpact: [
        "大規模一斉試験をサーバーダウン率0%、答案消失ゼロで安定稼働完遂。",
        "即時自動採点エンジンにより、講師陣の採点業務負担を80%削減。",
        "CEFR等の基準に基づいた弱点分析レポートを受講者に即時提供。"
      ],
      technologies: jlearnTech,
      liveUrl: "https://jlearn.dosutech.site/",
      metrics: [
        { label: "試験中稼働率", value: "100%" },
        { label: "自動保存頻度", value: "5秒ごと" },
        { label: "採点工数削減", value: "+80%" }
      ]
    },
    {
      id: "boothin-photobooth",
      slug: "boothin-photobooth-platform",
      title: "多店舗型予約・フォトブース機器自動制御システム",
      category: "CRM",
      featured: false,
      ndaNotice: "カメラハードウェア制御ドライバーおよび画像レンダリング設定はNDAにより保護されています。",
      shortDescription:
        "オンライン事前予約ポータル、多店舗一元管理ダッシュボード、および実店舗のフォトブース筐体を直接制御するElectronデスクトップアプリを統合した小売ソリューション。",
      problem:
        "商業施設店舗において、二重予約の発生、予約システムと店頭筐体間の通信トラブル、および顧客への写真データ納品の遅れが課題でした。",
      solution:
        "リアルタイム枠確保エンジンを備えたWeb予約基盤と、DSLR一眼レフカメラおよび昇華型フォトプリンターを制御するデスクトップアプリの統合エコシステムを構築。",
      myRole: [
        "オムニチャネル予約基盤およびクラウド・筐体間をつなぐWebSocket通信ブローカーの設計。",
        "セッショントークン検証によるブース筐体の不正起動防止セキュリティの実装。",
        "撮影写真の自動アップロードとクラウドを通じた顧客向けデジタルアルバム即時配信パイプラインの構築。"
      ],
      keyChallenges: [
        "ネイティブOS機器制御（カメラテザリング撮影、専用プリンター制御）とクラウドAPIのスムーズな連携。",
        "店舗インターネット回線瞬断時でもブース撮影を続行できるオフライン動作と自動再送キュー（queue replay）。",
        "高解像度画像の高速圧縮処理とCDN配信による受取待ち時間の最小化。"
      ],
      architectureHighlights: [
        "ローカルSQLiteキューを内蔵しオフライン時でも信頼性を維持するElectronデスクトップ構成。",
        "ブース稼働状況（待機、撮影中、印刷中、点検中）を店舗管理者に伝えるリアルタイムWebSocket通信。",
        "高効率画像圧縮とS3互換クラウドストレージ連携によるセキュアな配信。"
      ],
      resultsAndImpact: [
        "店頭セッション起動の95%以上を完全自動化し、レジ人員の案内コストを削減。",
        "商業モール複数店舗間における予約枠の重複トラブルをゼロに解消。",
        "QRコードによる即時写真受取により、SNSへのシェア率が65%向上。"
      ],
      technologies: boothinTech,
      liveUrl: "https://boothin.dosutech.site/",
      metrics: [
        { label: "自動起動率", value: "95%" },
        { label: "重複予約エラー", value: "0件" },
        { label: "写真シェア率向上", value: "+65%" }
      ]
    },
    {
      id: "astec-data-platform",
      slug: "enterprise-data-warehouse-platform",
      title: "エンタープライズ分析データ基盤・リアルタイムOLAPウェアハウス",
      category: "Data Platform",
      featured: false,
      ndaNotice: "企業内部の商用データ構造およびサーバー構成情報はNDAに基づき匿名化されています。",
      shortDescription:
        "複数の基幹トランザクションDBから業務データを抽出・統合し、ClickHouse列指向DWHと高速集計APIによりリアルタイムな経営分析を提供するデータプラットフォーム。",
      problem:
        "従来のリレーショナルDB上で数百万件規模のテーブル結合を含む集計SQLを実行すると、基幹ERPの処理速度が低下し、経営レポートの生成に大きな遅延が発生していました。",
      solution:
        "自動ELTパイプライン、ClickHouse列指向DWH、およびダッシュボード向け高速集計マイクロサービスからなる専用データ基盤を設計・導入。",
      myRole: [
        "データ基盤エンジニアとして、ELT同期パイプラインおよびClickHouseデータモデリングを担当。",
        "CDC（変更データキャプチャ）とバッチupsertを用いた差分データ抽出・取込ロジックの実装。",
        "経営ダッシュボード向けに1秒未満で応答する高スループット集計API（Python FastAPI / Go）の開発。"
      ],
      keyChallenges: [
        "異種リレーショナルDBから列指向OLAPへの非同期レプリケーションにおけるデータ整合性の担保。",
        "時系列データおよび集計クエリに最適化したパーティションキー、ソートキー、マテリアライズドビューの設計。",
        "複数データノード間における高可用性、自動バックアップ、およびフェイルオーバー設計。"
      ],
      architectureHighlights: [
        "RDBMSと比較して圧倒的な集計クエリ実行速度を誇るClickHouse列指向データベース。",
        "エラー時のデッドレターキュー（DLQ）を備えたPython (FastAPI) / Goによる耐障害性ELTパイプライン。",
        "ソース側テーブル定義変更によるパイプライン停止を防止する自動スキーマ検証。"
      ],
      resultsAndImpact: [
        "経営分析レポートの抽出生成時間を18分から1.2秒へと劇的に短縮。",
        "基幹ERPのトランザクションDBから重い集計負荷を完全に切り離し、基幹業務の安定化を実現。",
        "複数拠点・海外展開を跨ぐリアルタイムな経営データの可視化を達成。"
      ],
      technologies: astecDataTech,
      metrics: [
        { label: "クエリ高速化", value: "15倍" },
        { label: "レポート生成時間", value: "1.2秒" },
        { label: "日次取込レコード", value: "500万件+" }
      ]
    },
    {
      id: "arrowtech-iot-gateway",
      slug: "iot-smart-home-telemetry",
      title: "スマートホームIoTエッジゲートウェイ＆テレメトリブローカー",
      category: "IoT / Embedded",
      featured: false,
      ndaNotice: "無線暗号化プロトコルキーおよびハードウェア回路設計は機密保持のため匿名化されています。",
      shortDescription:
        "家庭内スマート環境センサー、Zigbee機器コントローラー、および低遅延クラウドイベント配信を統括するIoTエッジ組込みソフトウェアおよびテレメトリブローカー。",
      problem:
        "Zigbee、BLE、Wi-Fiなどの複数無線規格が混在するスマートホーム環境において、ルーター再起動時の通信途絶やパケットロス、高レイテンシが課題となっていました。",
      solution:
        "GoおよびC/C++を用いた軽量エッジゲートウェイサービスを開発し、回線不通時でも宅内自動化（ローカルシーン）を自律実行し、MQTTでクラウドへ非同期同期する構成を実現。",
      myRole: [
        "R&Dソフトウェアエンジニアとして、ゲートウェイ内のイベントループおよび通信ブリッジモジュールを開発。",
        "ハードウェアシリアルパケットデコーダーおよびZigbeeプロトコルパケットハンドラーの実装。",
        "停電復旧時の一斉接続トラフィック急増時にも耐えうるクラウド側取込APIの設計。"
      ],
      keyChallenges: [
        "組込みLinux小型ゲートウェイの限られたメモリおよびCPUフットプリント内での安定稼働。",
        "自律性の確保：外部インターネット回線が切断されても、宅内の照明・鍵・空調の自動化が停止しないこと。",
        "低負荷かつセキュアなデバイス・クラウド間のデータ暗号化通信の実装。"
      ],
      architectureHighlights: [
        "組込みLinux上で依存関係なく動作する軽量かつ高パフォーマンスなGo言語デーモン。",
        "重要度に応じたMQTT QoS制御（環境測定はQoS 0、防犯警報はQoS 2）。",
        "通信切断時の一時データをローカルにバッファリングするSQLiteリングバッファ機構。"
      ],
      resultsAndImpact: [
        "宅内ローカルネットワークにおけるセンサー連動応答時間を30ミリ秒未満に高速化。",
        "外部WAN回線途絶時でも100%のシーン自律実行信頼性を達成。",
        "国内外のスマートホーム住宅設備において数千台規模のハードウェアノードで安定稼働。"
      ],
      technologies: arrowtechTech,
      metrics: [
        { label: "エッジ応答レイテンシ", value: "<30ms" },
        { label: "回線切断時動作率", value: "100%" },
        { label: "メモリフットプリント", value: "<24MB" }
      ]
    },
    {
      id: "ecommerce-ecosystem",
      slug: "enterprise-ecommerce-ecosystem",
      title: "高トラフィック対応ECコマース・注文処理プラットフォーム",
      category: "E-Commerce",
      featured: false,
      ndaNotice: "決済代行会社アカウントおよび顧客プロモーション導線はNDAに基づき保護されています。",
      shortDescription:
        "家電・PC周辺機器、書籍、アパレル向けに設計されたECプラットフォーム群（DosuTech Store、DosuBook、elSaco）。超高速カタログ検索と在庫引き当てステートマシンを搭載。",
      problem:
        "タイムセールやプロモーション時のアクセス集中により旧来のECサイトが過負荷となり、注文競合による在庫オーバーセルや決済エラーが発生していました。",
      solution:
        "Next.js/Reactによる最新ストアフロントに、PostgreSQLトランザクションロックおよびRedis分散在庫キープ機構を組み合わせた高耐障害性基盤を設計。",
      myRole: [
        "フルスタックエンジニアとして、データモデリング、カタログインデックス設計、および注文ステートマシンを担当。",
        "セール時の在庫引き当てを原子的に実行し、在庫オーバーセルを完全に防ぐ排他制御ロジックを実装。",
        "安全なオンライン決済ゲートウェイ連携、自動領収書発行、および多通貨表示に対応。"
      ],
      keyChallenges: [
        "限定セール品に多数のユーザーが同時に注文確定ボタンを押す瞬間のトランザクション処理。",
        "モバイルSEOと離脱防止のための高速な初回表示速度（FCP < 0.8秒）の維持。",
        "複雑な多重クーポン割引計算を矛盾なく即時に検証するチェックアウト導線。"
      ],
      architectureHighlights: [
        "Edgeキャッシュを活用したNext.js SSR / ISRによる超高速商品カタログ配信。",
        "注文確定時の在庫減算処理を確実に保護するRedis分散ロック（distributed lock）。",
        "商品属性検索に最適化されたインデックスを持つ正規化PostgreSQLスキーマ。"
      ],
      resultsAndImpact: [
        "セール時の通常比5倍のトラフィック急増に対しても、在庫オーバーセルゼロを維持。",
        "モバイル・PCを問わず、商品閲覧および検索レスポンス1秒未満を達成。",
        "決済完了から倉庫の梱包出荷キューへの連携を完全自動化。"
      ],
      technologies: ecommerceTech,
      liveUrl: "https://dosutechstore.dosutech.site/",
      metrics: [
        { label: "在庫オーバーセル", value: "0件" },
        { label: "初回描画 (FCP)", value: "<0.8秒" },
        { label: "セール時負荷耐性", value: "5倍" }
      ]
    }
  ]
};

export const liveProjectsByLang: Record<Lang, LiveProjectStatus[]> = {
  vi: [
    {
      name: "IEAS Customs & Logistics ERP",
      category: "ERP Doanh nghiệp",
      domain: "ieas.dosutech.site",
      url: "https://ieas.dosutech.site/",
      description: "Hệ thống quản lý thông quan xuất nhập khẩu, kế toán đa tiền tệ và theo dõi tiến độ container.",
      status: "active",
      stack: ["React", "Node.js", "PostgreSQL", "Express"]
    },
    {
      name: "PrintDesk Manufacturing ERP",
      category: "ERP Sản xuất",
      domain: "printdesk.bscxau.link",
      url: "https://printdesk.bscxau.link/login",
      description: "Hệ thống điều độ sản xuất in ấn công nghiệp, quản lý kho nguyên vật liệu và tiến độ máy in.",
      status: "active",
      stack: ["React", "Express", "PostgreSQL", "Redis"]
    },
    {
      name: "DosuHR / HROPS Management",
      category: "HRM Doanh nghiệp",
      domain: "hrops.dosutech.site",
      url: "https://hrops.dosutech.site/login",
      description: "Quản lý vòng đời nhân sự, phê duyệt chấm công nhiều ca kíp và tính toán bảng lương tự động.",
      status: "active",
      stack: ["React", "Node.js", "PostgreSQL", "RBAC"]
    },
    {
      name: "JLearn LMS Platform",
      category: "Nền tảng EdTech",
      domain: "jlearn.dosutech.site",
      url: "https://jlearn.dosutech.site/",
      description: "Nền tảng đào tạo trực tuyến, tổ chức thi trắc nghiệm thời gian thực và phân tích năng lực học viên.",
      status: "active",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Socket.IO"]
    },
    {
      name: "Boothin Photobooth",
      category: "Vận hành Bán lẻ",
      domain: "boothin.dosutech.site",
      url: "https://boothin.dosutech.site/",
      description: "Hệ thống đặt lịch photobooth đa chi nhánh và ứng dụng desktop điều khiển phần cứng chụp ảnh.",
      status: "active",
      stack: ["Next.js", "Electron", "PostgreSQL", "WebSocket"]
    },
    {
      name: "DosuTech Store",
      category: "Thương mại Điện tử",
      domain: "dosutechstore.dosutech.site",
      url: "https://dosutechstore.dosutech.site/",
      description: "Cửa hàng bán lẻ thiết bị công nghệ, laptop gaming và phụ kiện điện tử chịu tải cao.",
      status: "active",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
    },
    {
      name: "DeutschLab LMS",
      category: "Nền tảng EdTech",
      domain: "deutschlab.dosutech.site",
      url: "https://deutschlab.dosutech.site/",
      description: "Nền tảng học tiếng Đức trực tuyến với lộ trình chuẩn khung tham chiếu Châu Âu (CEFR).",
      status: "active",
      stack: ["Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
      name: "elSaco Fashion Shop",
      category: "Thương mại Điện tử",
      domain: "elsaco.dosutech.site",
      url: "https://elsaco.dosutech.site/",
      description: "Website thương mại điện tử thời trang phong cách quốc tế, tối ưu trải nghiệm di động.",
      status: "active",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "Astec Paints Japan",
      category: "Doanh nghiệp FDI",
      domain: "astecpaints.jp",
      url: "https://astecpaints.jp/",
      description: "Cổng thông tin và danh mục sản phẩm sơn xây dựng cho doanh nghiệp Nhật Bản.",
      status: "enterprise",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "CMS"]
    },
    {
      name: "DosuBook E-Commerce",
      category: "Thương mại Điện tử",
      domain: "dosubook.dosutech.site",
      url: "https://dosubook.dosutech.site/",
      description: "Nhà sách trực tuyến với danh mục phong phú và hệ thống gợi ý đầu sách thông minh.",
      status: "active",
      stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"]
    },
    {
      name: "DosuPhaco GMP-WHO",
      category: "Sản xuất Dược phẩm",
      domain: "dosuphaco.dosutech.site",
      url: "https://dosuphaco.dosutech.site/vi",
      description: "Cổng thông tin sản xuất dược phẩm đạt chuẩn GMP-WHO và định hướng tiêu chuẩn FDA.",
      status: "active",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"]
    },
    {
      name: "Nướng 77 Restaurant & CRM",
      category: "Vận hành F&B",
      domain: "nuong77.dosutech.site",
      url: "https://nuong77.dosutech.site/",
      description: "Hệ thống đặt bàn trực tuyến và quản lý vận hành sơ đồ bàn ăn nhà hàng.",
      status: "active",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Admin Portal"]
    }
  ],
  en: [
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
  ],
  ja: [
    {
      name: "IEAS Customs & Logistics ERP",
      category: "基幹ERP",
      domain: "ieas.dosutech.site",
      url: "https://ieas.dosutech.site/",
      description: "貿易税関手続き、多通貨対応会計、およびコンテナ物流追跡システム。",
      status: "active",
      stack: ["React", "Node.js", "PostgreSQL", "Express"]
    },
    {
      name: "PrintDesk Manufacturing ERP",
      category: "製造業ERP",
      domain: "printdesk.bscxau.link",
      url: "https://printdesk.bscxau.link/login",
      description: "商業印刷工場の工程管理、原材料在庫管理、および印刷機ディスパッチシステム。",
      status: "active",
      stack: ["React", "Express", "PostgreSQL", "Redis"]
    },
    {
      name: "DosuHR / HROPS Management",
      category: "人事労務HRM",
      domain: "hrops.dosutech.site",
      url: "https://hrops.dosutech.site/login",
      description: "人事労務情報管理、多段階シフト承認フロー、および自動給与計算システム。",
      status: "active",
      stack: ["React", "Node.js", "PostgreSQL", "RBAC"]
    },
    {
      name: "JLearn LMS Platform",
      category: "EdTech・教育基盤",
      domain: "jlearn.dosutech.site",
      url: "https://jlearn.dosutech.site/",
      description: "オンライン講座配信、リアルタイム試験監督、および学習習熟度分析。",
      status: "active",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Socket.IO"]
    },
    {
      name: "Boothin Photobooth",
      category: "店舗オペレーション",
      domain: "boothin.dosutech.site",
      url: "https://boothin.dosutech.site/",
      description: "店舗型フォトブース予約Web基盤およびカメラ機器制御デスクトップアプリ。",
      status: "active",
      stack: ["Next.js", "Electron", "PostgreSQL", "WebSocket"]
    },
    {
      name: "DosuTech Store",
      category: "ECコマース",
      domain: "dosutechstore.dosutech.site",
      url: "https://dosutechstore.dosutech.site/",
      description: "高機能PC・ゲーミング機器・電子機器向け高負荷対応ECリテール基盤。",
      status: "active",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
    },
    {
      name: "DeutschLab LMS",
      category: "EdTech・教育基盤",
      domain: "deutschlab.dosutech.site",
      url: "https://deutschlab.dosutech.site/",
      description: "ヨーロッパ言語共通参照枠（CEFR）準拠のドイツ語オンライン学習LMS。",
      status: "active",
      stack: ["Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
      name: "elSaco Fashion Shop",
      category: "ECコマース",
      domain: "elsaco.dosutech.site",
      url: "https://elsaco.dosutech.site/",
      description: "ライフスタイル＆アパレルブランド向けECコマースプラットフォーム。",
      status: "active",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "Astec Paints Japan",
      category: "コーポレート基盤",
      domain: "astecpaints.jp",
      url: "https://astecpaints.jp/",
      description: "建築用塗料メーカーの製品カタログ・カラーコンサルティング基盤。",
      status: "enterprise",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "CMS"]
    },
    {
      name: "DosuBook E-Commerce",
      category: "ECコマース",
      domain: "dosubook.dosutech.site",
      url: "https://dosubook.dosutech.site/",
      description: "豊富な蔵書在庫管理とレコメンド機能を備えたオンライン書店EC。",
      status: "active",
      stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"]
    },
    {
      name: "DosuPhaco GMP-WHO",
      category: "医薬品製造基盤",
      domain: "dosuphaco.dosutech.site",
      url: "https://dosuphaco.dosutech.site/vi",
      description: "GMP-WHOおよびFDA基準に準拠した医薬品製造企業のコーポレート基盤。",
      status: "active",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"]
    },
    {
      name: "Nướng 77 Restaurant & CRM",
      category: "飲食・F&B基盤",
      domain: "nuong77.dosutech.site",
      url: "https://nuong77.dosutech.site/",
      description: "オンライン予約および店舗テーブルオペレーション管理Webシステム。",
      status: "active",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Admin Portal"]
    }
  ]
};

export const projects: Project[] = projectsByLang.vi;
export const liveProjects: LiveProjectStatus[] = liveProjectsByLang.vi;
