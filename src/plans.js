export const plans = [
    {
        id: 'simple-plus',
        rank: 2,
        name: {
            ko: '유학생 선호도 1위 넉넉한 데이터 플랜',
            en: 'Student Favorite #1 Data Plan',
            zh: '留학생 首选 充足流量套餐',
            vi: 'Gói dữ liệu số 1 cho du học sinh'
        },
        originalPrice: 61000,
        price: 24750,
        data: '41GB',
        qos: '1Mbps',
        tethering: '41GB',
        calls: 'Unlimited',
        extraCalls: '300m',
        youth: true,
        tags: ['sale'],
        isBest: false
    },
    {
        id: 'data-regular-youth',
        rank: 1,
        name: {
            ko: '고화질 영상 시청용 대용량 데이터 전용',
            en: 'High-Res Video Data Pack',
            zh: '高清视频大容量套餐',
            vi: 'Gói dung lượng cao xem video'
        },
        originalPrice: 63000,
        price: 25500,
        data: '70GB',
        qos: '1Mbps',
        tethering: '45GB',
        calls: 'Unlimited',
        extraCalls: '300m',
        youth: true,
        tags: ['best', 'sale'],
        isBest: true
    },
    {
        id: 'standard-essential-youth',
        rank: 3,
        name: {
            ko: '집에서도 와이파이 없이 무제한급 데이터',
            en: 'Home Data Freedom Pack',
            zh: '居家流量自由 准无限套餐',
            vi: 'Gói dữ liệu tự do tại nhà'
        },
        originalPrice: 70000,
        price: 29500,
        data: '185GB',
        qos: '5Mbps',
        tethering: '60GB',
        calls: 'Unlimited',
        extraCalls: '300m',
        youth: true,
        tags: ['sale'],
        isBest: false
    },
    {
        id: 'standard-youth',
        rank: 4,
        name: {
            ko: '데이터 걱정 없는 유학생 끝판왕 전용',
            en: 'Ultimate Student Freedom Plan',
            zh: '留학생 终极流量王 专用套餐',
            vi: 'Gói cước tối thượng cho du học sinh'
        },
        originalPrice: 75000,
        price: 33250,
        data: '210GB',
        qos: '5Mbps',
        tethering: '65GB',
        calls: 'Unlimited',
        extraCalls: '300m',
        youth: true,
        tags: ['sale'],
        isBest: false
    }
];

export const translations = {
    en: {
        todayDeal: "New Semester Special",
        airportPickup: "Airport Pickup & eSIM Ready",
        arrivalGuide: "Instant activation upon arrival at Korea airport",
        selectLanguage: 'Language',
        youthBadge: 'Youth',
        data: 'Data',
        calls: 'Calls',
        price: 'Price',
        originalPrice: 'Reg.',
        month: '/ mo',
        applyNow: 'Get Notified',
        unlimited: 'Unlimited',
        best: 'BEST',
        sale: 'Special',
        semesterBanner: "🌸 Limited Offer for New Semester Students",
        guarantee: 'Lowest Price for 12 Mo.',
        lowestPriceBadge: "100% Lowest Price Guarantee",
        lowestPriceReason: "If you find a cheaper price for the same spec, we provide a full refund.",
        modalHeader: "Stay tuned for this plan!",
        modalSubtitle: "This plan is currently under preparation.",
        comingSoonDesc: "Leave your email and we will notify you immediately when it's ready for opening.",
        tabs: {
            benefits: "Benefits",
            details: "Plan Specs"
        },
        fields: {
            baseData: "Base Data",
            qos: "QoS Speed",
            tethering: "Tethering",
            calls: "Calls",
            video: "Extra Calls",
            intl: "Intl. Call",
            sms: "SMS"
        },
        spamProtection: "Spam Block",
        applied: "Applied",
        features: {
            f1Title: "Student Exclusive Discount",
            f1Desc: "Save for 1 year with partner benefits",
            f2Title: "Real-time Spam Filter",
            f2Desc: "24/7 protection against phishing",
            f3Title: "Immigration Auto-Link",
            f3Desc: "Automatic contact registration for stay"
        },
        close: "Close",
        successMsg: "✔️ We will notify you as soon as it opens!"
    },
    zh: {
        todayDeal: "开学季特惠",
        airportPickup: "机场领取 & eSIM 即刻开通",
        arrivalGuide: "抵达韩国机场后即可立即开通使用",
        selectLanguage: '语言',
        youthBadge: 'Youth',
        data: '流量',
        calls: '通话',
        price: '价格',
        originalPrice: '标准价',
        month: '/ 月',
        applyNow: '获取开启通知',
        unlimited: '不限量',
        best: '最佳',
        sale: '特惠',
        semesterBanner: "🌸 开学季留学生限定特惠活动",
        guarantee: '12个月内享受此最低价',
        lowestPriceBadge: "100% 全网最低价保证",
        lowestPriceReason: "若发现同等配置价格更低，我们承诺全额退款。",
        modalHeader: "敬请期待此套装！",
        modalSubtitle: "该套装目前正在准备中。",
        comingSoonDesc: "留下您的邮箱，开通时我们将第一时间通知您。",
        tabs: {
            benefits: "专享权益",
            details: "套装详情"
        },
        fields: {
            baseData: "基础流量",
            qos: "限速速度",
            tethering: "热点分享",
            calls: "语音通话",
            video: "附加通话",
            intl: "国际长途",
            sms: "短信息"
        },
        applied: "已启用",
        features: {
            f1Title: "留학생 特惠折扣",
            f1Desc: "享受为期1年的大幅月费减免",
            f2Title: "实时垃圾信息拦截",
            f2Desc: "24小时全天候防范电信诈骗",
            f3Title: "入境自动关联",
            f3Desc: "自动同步联系方式至申报系统"
        },
        close: "关闭",
        successMsg: "✔️ 开启时我们将立即通知您！"
    },
    vi: {
        todayDeal: "Khuyến mãi học kỳ mới",
        airportPickup: "Nhận tại sân bay & eSIM Có sẵn",
        arrivalGuide: "Kích hoạt ngay khi vừa đến sân bay Hàn Quốc",
        selectLanguage: 'Ngôn ngữ',
        youthBadge: 'Youth',
        data: 'Dữ liệu',
        calls: 'Gọi điện',
        price: 'Giá',
        originalPrice: 'Giá gốc',
        month: '/ tháng',
        applyNow: 'Nhận thông báo',
        unlimited: 'Không giới hạn',
        best: 'TỐT NHẤT',
        sale: 'Ưu đãi',
        semesterBanner: "🌸 Chương trình ưu đãi học kỳ mới cho du học sinh",
        guarantee: 'Giá thấp nhất trong 12 tháng',
        lowestPriceBadge: "Cam kết giá thấp nhất 100%",
        lowestPriceReason: "Hoàn tiền toàn bộ nếu tìm thấy giá rẻ hơn cho cùng cấu hình.",
        modalHeader: "Gói cước sắp ra mắt!",
        modalSubtitle: "Gói cước này hiện đang được chuẩn bị.",
        comingSoonDesc: "Hãy để lại email, chúng tôi sẽ thông báo cho bạn ngay khi có thể đăng ký.",
        tabs: {
            benefits: "Ưu đãi",
            details: "Chi tiết gói"
        },
        fields: {
            baseData: "Dữ liệu gốc",
            qos: "Tốc độ QoS",
            tethering: "Chia sẻ mạng",
            calls: "Gọi thoại",
            video: "Cuộc gọi phụ",
            intl: "Gọi quốc tế",
            sms: "Tin nhắn"
        },
        applied: "Đang áp dụng",
        features: {
            f1Title: "Giảm giá học kỳ mới",
            f1Desc: "Ưu đãi giá rẻ trong vòng 1 năm",
            f2Title: "Chặn Spam & Lừa đảo",
            f2Desc: "Bảo vệ thông tin cá nhân 24/7",
            f3Title: "Tự động kết nối nhập cảnh",
            f3Desc: "Tự động đăng ký thông tin liên lạc"
        },
        close: "Đóng",
        successMsg: "✔️ Chúng tôi sẽ thông báo cho bạn ngay khi mở đăng ký!"
    },
    ko: {
        todayDeal: "신학기 특가 핫딜",
        airportPickup: "공항 수령 및 eSIM 즉시 개통",
        arrivalGuide: "입국 전 신청하면 입국하자마자 바로 사용 가능",
        selectLanguage: '언어',
        youthBadge: '유쓰',
        data: '데이터',
        calls: '통화',
        price: '가격',
        originalPrice: '정가',
        month: '/ 월',
        applyNow: '오픈 알림 받기',
        unlimited: '무제한',
        best: 'BEST 인기',
        sale: '특가',
        semesterBanner: "🌸 유학생을 위한 신학기 한정 특가 캠페인",
        guarantee: '12개월 동안 최저가 보장',
        lowestPriceBadge: "100% 최저가 보상제",
        lowestPriceReason: "동일 스펙 기준 최저가가 아닐 경우 무조건 환불해 드립니다.",
        modalHeader: "이 요금제는 곧 준비될 예정이에요!",
        modalSubtitle: "현재 요금제 출시를 준비하고 있습니다.",
        comingSoonDesc: "이메일을 남겨주시면 개통이 가능한 시점에 가장 먼저 알려드릴게요.",
        tabs: {
            benefits: "혜택",
            details: "요금제 상세"
        },
        fields: {
            baseData: "기본 제공 데이터",
            qos: "소진 시 속도",
            tethering: "쉐어링·테더링 데이터",
            calls: "음성 통화",
            video: "영상/부가통화",
            intl: "국제 전화",
            sms: "문자"
        },
        spamProtection: "스팸 차단",
        applied: "적용",
        features: {
            f1Title: "협약대학교 전용 할인",
            f1Desc: "협약대학교 혜택으로 1년간 월 요금 할인",
            f2Title: "보이스피싱 실시간 방지",
            f2Desc: "개인정보 유출 차단으로 24시간 활성화",
            f3Title: "출입국 연락처 자동 연동",
            f3Desc: "출입국에서 오는 연락을 놓치지 않도록 자동 등록"
        },
        close: "닫기",
        successMsg: "✔️ 오픈되는 즉시 메일로 알려드릴게요!"
    }
};
