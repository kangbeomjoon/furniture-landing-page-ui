export type Language = 'en' | 'ko';

const translations: Record<Language, Record<string, string>> = {
  en: {
    // TopBar
    'topBar.title': 'Show in Korean',
    'topBar.confirm': 'Confirm',
    'topBar.shippingNotice':
      'Please note that we do not ship directly to private customers online. Orders are handled with your local store.',

    // Header Nav
    'nav.furniture': 'Furniture',
    'nav.lighting': 'Lighting',
    'nav.accessories': 'Accessories',
    'nav.spareParts': 'Spare Parts',
    'nav.inspiration': 'Inspiration',

    // Hero
    'hero.title': 'PURE FORM',
    'hero.description':
      'Embrace the warmth of nature. BASE WOOD defines a new standard of living where minimalist design meets the honest texture of solid wood, creating spaces of serenity and enduring beauty.',
    'hero.cta': 'Discover',

    // Intro
    'intro.text':
      'BASE WOOD is founded on a deep respect for nature and craftsmanship. We believe in the power of natural materials to transform spaces, creating furniture that is not just functional, but a celebration of the unique character found in every grain of wood.',

    // Grid
    'grid.cta': 'EXPLORE COLLECTION',

    // Products
    'products.heading': 'Explore Products',
    'product.1.name': 'Nordic Oak Chair',
    'product.1.price': 'From €359',
    'product.1.category': 'Dining Chair',
    'product.2.name': 'Curved Ash Chair',
    'product.2.price': 'From €439',
    'product.2.category': 'Dining Chair',
    'product.3.name': 'Solid Walnut Table',
    'product.3.price': 'From €1,899',
    'product.3.category': 'Dining Table',
    'product.4.name': 'Lounge Chair 01',
    'product.4.price': 'From €6,599',
    'product.4.category': 'Lounge Chair',

    // Feature
    'feature.heading': 'The Oak Collection',
    'feature.description1':
      'Celebrated for its durability and beautiful grain, our sustainable oak collection brings the outdoors in. Designed to age gracefully, these pieces become the heart of your home.',
    'feature.description2': 'Experience the warmth of hand-finished solid wood.',
    'feature.cta': 'VIEW COLLECTION',

    // Rooms
    'room.livingRoom': 'Living Room',
    'room.diningRoom': 'Dining Room',
    'room.homeOffice': 'Home Office',
    'room.hallway': 'Hallway',
    'room.outdoor': 'Outdoor',

    // Stories
    'stories.heading': 'Stories From Base Wood',
    'stories.subtitle':
      'INSPIRATION FROM NATURE, CRAFTSMANSHIP JOURNALS, AND THE ART OF SLOW LIVING.',
    'story.1.title': 'THE ART OF CARPENTRY: STUDIO VISIT',
    'story.2.title': 'SUSTAINABLE LIVING: A FOREST TALE',
    'story.3.title': "ARCHITECT'S RETREAT IN KYOTO",
    'story.4.title': 'MORNING LIGHT & NATURAL WOOD',
    'stories.readMore': 'READ MORE',

    // Footer
    'footer.newsletter': 'Newsletter',
    'footer.signUp': 'SIGN UP',
    'footer.followUs': 'Follow Us',
    'footer.contactUs': 'Contact Us',
    'footer.storeLocator': 'Store Locator',
    'footer.findStore': 'Find Store',
    'footer.legal': 'Legal',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.cookiePolicy': 'Cookie Policy',
    'footer.fightingCounterfeit': 'Fighting Counterfeit',
    'footer.company': 'Company',
    'footer.ourStory': 'Our Story',
    'footer.career': 'Career',
    'footer.press': 'Press',
    'footer.customerCare': 'Customer Care',
    'footer.faq': 'FAQ',
    'footer.productWarranty': 'Product Warranty',
    'footer.careMaintenance': 'Care & Maintenance',
  },

  // TODO(human): Review Korean marketing copy — especially hero.description,
  // intro.text, feature.description1, and stories.subtitle.
  // These are the brand voice pieces where tone matters most.
  // Consider: formal vs conversational, poetic vs practical.
  ko: {
    // TopBar
    'topBar.title': '한국어로 보기',
    'topBar.confirm': '확인',
    'topBar.shippingNotice':
      '온라인으로 개인 고객에게 직접 배송하지 않습니다. 주문은 가까운 매장을 통해 처리됩니다.',

    // Header Nav
    'nav.furniture': '가구',
    'nav.lighting': '조명',
    'nav.accessories': '액세서리',
    'nav.spareParts': '부품',
    'nav.inspiration': '인스피레이션',

    // Hero
    'hero.title': '순수한 형태',
    'hero.description':
      '자연의 온기를 품다. BASE WOOD는 미니멀 디자인과 원목의 진솔한 질감이 만나는 새로운 라이프스타일을 제안합니다. 고요함과 변치 않는 아름다움이 깃든 공간을 만들어갑니다.',
    'hero.cta': '컬렉션 보기',

    // Intro
    'intro.text':
      'BASE WOOD는 자연과 장인 정신에 대한 깊은 존경을 바탕으로 합니다. 천연 소재가 공간을 변화시키는 힘을 믿으며, 단순히 기능적인 것을 넘어 나뭇결 하나하나에 담긴 고유한 아름다움을 기념하는 가구를 만듭니다.',

    // Grid
    'grid.cta': '컬렉션 둘러보기',

    // Products
    'products.heading': '제품 탐색',
    'product.1.name': '노르딕 오크 체어',
    'product.1.price': '€359부터',
    'product.1.category': '다이닝 체어',
    'product.2.name': '커브드 애쉬 체어',
    'product.2.price': '€439부터',
    'product.2.category': '다이닝 체어',
    'product.3.name': '솔리드 월넛 테이블',
    'product.3.price': '€1,899부터',
    'product.3.category': '다이닝 테이블',
    'product.4.name': '라운지 체어 01',
    'product.4.price': '€6,599부터',
    'product.4.category': '라운지 체어',

    // Feature
    'feature.heading': '오크 컬렉션',
    'feature.description1':
      '내구성과 아름다운 나뭇결로 사랑받는 지속 가능한 오크 컬렉션은 자연을 실내로 들여옵니다. 세월과 함께 우아하게 변화하도록 설계된 이 가구들은 당신의 집의 중심이 됩니다.',
    'feature.description2': '수작업으로 마감한 원목의 따뜻함을 경험하세요.',
    'feature.cta': '컬렉션 보기',

    // Rooms
    'room.livingRoom': '거실',
    'room.diningRoom': '다이닝 룸',
    'room.homeOffice': '홈 오피스',
    'room.hallway': '현관',
    'room.outdoor': '아웃도어',

    // Stories
    'stories.heading': 'Base Wood 이야기',
    'stories.subtitle':
      '자연에서 온 영감, 장인 정신의 기록, 그리고 느린 삶의 예술.',
    'story.1.title': '목공의 예술: 스튜디오 방문기',
    'story.2.title': '지속 가능한 삶: 숲의 이야기',
    'story.3.title': '건축가의 교토 은신처',
    'story.4.title': '아침 햇살과 내추럴 우드',
    'stories.readMore': '더 읽기',

    // Footer
    'footer.newsletter': '뉴스레터',
    'footer.signUp': '구독하기',
    'footer.followUs': '팔로우',
    'footer.contactUs': '연락처',
    'footer.storeLocator': '매장 찾기',
    'footer.findStore': '매장 검색',
    'footer.legal': '법적 고지',
    'footer.privacyPolicy': '개인정보 처리방침',
    'footer.cookiePolicy': '쿠키 정책',
    'footer.fightingCounterfeit': '위조품 방지',
    'footer.company': '회사 소개',
    'footer.ourStory': '브랜드 스토리',
    'footer.career': '채용',
    'footer.press': '보도자료',
    'footer.customerCare': '고객 지원',
    'footer.faq': '자주 묻는 질문',
    'footer.productWarranty': '제품 보증',
    'footer.careMaintenance': '관리 및 유지보수',
  },
};

export function createTranslator(lang: Language) {
  const dict = translations[lang];
  return (key: string): string => dict[key] ?? key;
}
