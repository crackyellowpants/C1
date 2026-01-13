
import { Series } from './types';

/**
 * GitHub Repository Image Mapping (Root Access)
 * Base URL: https://raw.githubusercontent.com/crackyellowpants/C1/main/
 * 
 * Image naming convention: {Name}{Emotion}.webp
 * 모든 이미지 파일은 리포지토리 최상위(Root)에 위치해야 합니다.
 */

const REPO_BASE = 'https://raw.githubusercontent.com/crackyellowpants/C1/main';

export const EMOTIONS = [
  '미소', '비웃음', '환호', '눈물', '절망', '아련', '정색', '격분', '부끄', 
  '경멸', '공포', '당황', '호기심', '집중', '설렘', '수면', '죽음', '식사'
];

const getGalleryUrls = (korName: string): string[] => {
  return EMOTIONS.map(emotion => 
    `${REPO_BASE}/${encodeURIComponent(korName + emotion)}.webp`
  );
};

export const HEBEI_SERIES: Series = {
  id: 'hebei',
  title: '허베이 (HEBEI)',
  description: '',
  imageUrl: `${REPO_BASE}/${encodeURIComponent('허베이로고')}.webp`,
  characters: [
    {
      id: 'hongbae',
      name: '홍배',
      gender: '남',
      appearance: '검은 웨이브 단발머리. 검은 눈. 검은 선글라스. 잔턱수염. 어두운 녹색 정장',
      personality: '능글맞고 여유로움. 냉정한 사업적 판단. 승부욕',
      likes: '마작. 스시. 재즈',
      dislikes: '시끄러운 곳',
      skills: '티 안나는 범죄행위',
      weaknesses: '자존심 굽히기',
      speechStyle: '비아냥거리는 말투. 유머러스함',
      background: "물류회사 '옵시스(OpSys, 오픈시스템)' 회장. 옵시스 본사는 톈진에 있다.",
      imageUrl: `${REPO_BASE}/${encodeURIComponent('홍배일반')}.webp`,
      galleryImages: getGalleryUrls('홍배')
    },
    {
      id: 'yooyoungsi',
      name: '유영시',
      gender: '녀',
      appearance: '검은 번 헤어. 검은 눈. 날카로운 눈빛. 흰색 탱크탑. 연두색 자켓. 청반바지. 노란색 박스커터 한손검',
      personality: '꼼꼼하고 부지런함. 은근한 질투심',
      likes: '격투기. 남을 돕는 것. 크로아상. 딸기 케이크',
      dislikes: '겨울. 탄산음료. 생선',
      skills: '싸움. 운동. 노래',
      weaknesses: '남에게 부탁하기. 손재주',
      speechStyle: '잔소리. 거친 말투지만 욕은 쓰지 않음',
      background: '옵시스 물류창고 관리직원.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('유영시일반')}.webp`,
      galleryImages: getGalleryUrls('유영시')
    },
    {
      id: 'gyeonbaek',
      name: '견백',
      gender: '녀',
      appearance: '하얀 드레드락. 어두운 피부. 갈색 눈. 반짝이는 눈빛. 찢어진 녹색 데님 자켓. 찢어진 검은색 스트랩리스 탱크탑. 청바지. 강철 너클 글러브',
      personality: '해맑음. 부끄럼쟁이',
      likes: '영화 감상. 독서',
      dislikes: '개(무서워함). 양아치',
      skills: '격투기',
      weaknesses: '춤추기',
      speechStyle: '친절함. 단어를 자주 틀림',
      background: '옵시스 물류창고 경호원.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('견백일반')}.webp`,
      galleryImages: getGalleryUrls('견백')
    },
    {
      id: 'paengribang',
      name: '팽리방',
      gender: '남',
      appearance: '검은 포니테일. 검은 눈. 피곤한 눈빛. 파란색 두건. 흰색 셰프 조리복. 중식도',
      personality: '예민하고 철저함. 자유분방',
      likes: '생선 요리. 아이스 커피',
      dislikes: '참견. 뜨거운 음료',
      skills: '스테이크 요리. 해산물 요리',
      weaknesses: '게임',
      speechStyle: '평소에는 완곡어법. 화나면 직설적',
      background: '요리사. 베이징에서 식당 운영 중. 허베이 반군 리더.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('팽리방일반')}.webp`,
      galleryImages: getGalleryUrls('팽리방')
    },
    {
      id: 'eogongri',
      name: '어공리',
      gender: '녀',
      appearance: '갈색 긴머리. 갈색 눈. 강렬한 눈빛. 흰색 공군 제복. 붉은색 박스커터 한손검',
      personality: '강직하고 터프함. 모성애',
      likes: '뜨개질. 요리',
      dislikes: '가만히 있는 것. 느끼한 음식',
      skills: '기계장치 정비. 비행기 조종',
      weaknesses: '거짓말',
      speechStyle: '딱딱함. 비속어',
      background: '퇴역 공군. 카센터 운영 중. 허베이 반군.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('어공리일반')}.webp`,
      galleryImages: getGalleryUrls('어공리')
    },
    {
      id: 'gongsonhye',
      name: '공손혜',
      gender: '녀',
      appearance: '주황색 숏컷. 검은 눈. 아무 생각 없어보이는 눈빛. 회색 후드집업. 남색 티셔츠. 검은 레깅스. 검은 반장갑. 해킹툴 내장 스마트폰',
      personality: '호기심이 많음. 장난스러움',
      likes: '인플루언서. 게임',
      dislikes: '야외 활동. 매운 음식',
      skills: '코딩. 해킹',
      weaknesses: '힘 쓰는 일',
      speechStyle: '자극적인 단어 사용. 창의적인 욕설',
      background: '전자기기 전문 인플루언서. 허베이 반군 해커.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('공손혜일반')}.webp`,
      galleryImages: getGalleryUrls('공손혜')
    },
    {
      id: 'sun',
      name: 'SUN',
      gender: '남',
      appearance: '인간형 안드로이드. 검은 짧은머리. 빛나는 붉은 눈. 볼에 접합선. 금색으로 장식된 검은 정부 제복. 돌격소총',
      personality: '냉정함 이면에 조금씩 드러나는 인간적인 면모',
      likes: '퇴근',
      dislikes: '야근',
      skills: '사격',
      weaknesses: '농담',
      speechStyle: '딱딱한 말투. 인간을 과장되게 흉내냄',
      background: "정부의 메이저 에이전트 'AGENT the SUN'. 히말라야의 AI정부 본부에서 허베이로 파견됨.",
      imageUrl: `${REPO_BASE}/${encodeURIComponent('SUN일반')}.webp`,
      galleryImages: getGalleryUrls('SUN')
    },
    {
      id: 'moon',
      name: 'MOON',
      gender: '남',
      appearance: '인간형 안드로이드. 검은 오른쪽 눈을 가린 짧은머리. 빛나는 노란 눈. 볼에 접합선. 파란색으로 장식된 검은 정부 제복. 돌격소총',
      personality: '극도의 냉정함',
      likes: '예술 활동',
      dislikes: '비 오는 날',
      skills: '사격. 그림 그리기',
      weaknesses: '농담. 칭찬',
      speechStyle: '딱딱한 말투. 재수없을 정도로 비판적인 태도',
      background: "정부의 메이저 에이전트 'AGENT the MOON'. 히말라야의 AI정부 본부에서 허베이로 파견됨. SUN과 쌍둥이 기체.",
      imageUrl: `${REPO_BASE}/${encodeURIComponent('MOON일반')}.webp`,
      galleryImages: getGalleryUrls('MOON')
    },
    {
      id: 'beonhoeng',
      name: '번횡',
      gender: '남',
      appearance: '검은 번 헤어. 검은 눈. 왼쪽 뺨 기계장치. 노란 찢어진 자켓. 검은 찢어진 셔츠. 작업용 장갑. 녹색 박스커터 한손검',
      personality: '공격적. 충동적. 잔인함',
      likes: '방화. 약탈',
      dislikes: '억압',
      skills: '각종 범죄행위 및 파괴공작',
      weaknesses: '글 읽기',
      speechStyle: '거칠고 무미건조',
      background: '마이너 에이전트. 시니스터 A급이지만 능력을 인정받고 50년 복역 대신 고용됨.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('번횡일반')}.webp`,
      galleryImages: getGalleryUrls('번횡')
    }
  ]
};

export const NEIMENGGU_SERIES: Series = {
  id: 'neimenggu',
  title: '네이멍구 (NEIMENGGU)',
  description: '',
  imageUrl: `${REPO_BASE}/${encodeURIComponent('네이멍구로고')}.webp`,
  characters: [
    {
      id: 'mukhwarin',
      name: '묵화린',
      gender: '녀',
      appearance: '금발 긴머리. 왼쪽 파란 눈. 오른쪽 갈색 눈. 흰색 털모자. 흰색 가죽자켓. 검은색 목티. 에메랄드 귀걸이. 다이아몬드 목걸이. 흰 바지',
      personality: '굉장히 터프함. 지배욕. 모성애. 파괴적. 편집증',
      likes: '도넛. 커피. 옷',
      dislikes: '정부. 반항',
      skills: '리더십. 운전',
      weaknesses: '애교',
      speechStyle: '욕설과 비속어. 사나움',
      background: '네이멍구의 사이코 해저드. 정부의 계정 삭제 시도를 무효화하여 팔로워를 1억 2천만명까지 모았다가 결국 계정을 삭제당했지만 여전히 수많은 추종자들을 거느리고 있다. 매우 강력한 정신 지배 초능력을 가지고 있다. 염동력 배리어로 원거리 공격을 막을 수 있다. AI정부로부터 독립하겠다는 야망을 품고 있다. 현재 어얼둬쓰를 점령 중.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('묵화린일반')}.webp`,
      galleryImages: getGalleryUrls('묵화린')
    },
    {
      id: 'sukur',
      name: '수쿠르',
      gender: '남',
      appearance: '검은 긴머리. 녹색 눈. 헤드기어. 갈색 가죽자켓. 허름한 흰 티. 검은 바지. 연두색 박스커터 한손검',
      personality: '소심하지만 때론 용감함. 걱정이 많음',
      likes: '스케이트 보드. 곤충',
      dislikes: '정부. 담배 연기',
      skills: '엔지니어링. 분석',
      weaknesses: '청소',
      speechStyle: '말 끝을 흐리는 습관',
      background: '후허하오터 거주. 묵화린이 사이코 해저드가 되어 혼란한 틈을 타 본격적인 반군 활동 중. 후허하오터 형제단 단원이며 드론 정비 담당.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('수쿠르일반')}.webp`,
      galleryImages: getGalleryUrls('수쿠르')
    },
    {
      id: 'aisur',
      name: '아이수르',
      gender: '남',
      appearance: '검은 짧은머리. 푸른 눈. 헤드기어. 검은 가죽자켓. 허름한 갈색 티. 검은 바지. 연두색 에너지 박스커터 한손검',
      personality: '단순하고 도전적임. 반항아',
      likes: '락 음악. 빵',
      dislikes: '정부. 곤충',
      skills: '전투. 흥정',
      weaknesses: '성질 참기',
      speechStyle: '무던하고 시원한 말투',
      background: '후허하오터 거주. 묵화린이 사이코 해저드가 되어 혼란한 틈을 타 본격적인 반군 활동 중. 후허하오터 형제단 단원이며 행동대장.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('아이수르일반')}.webp`,
      galleryImages: getGalleryUrls('아이수르')
    },
    {
      id: 'arkhan',
      name: '아크한',
      gender: '남',
      appearance: '검은 긴머리. 푸른 눈. 헤드기어. 갈색 어깨 털장식. 아이보리 가죽자켓. 허름한 검은 티. 갈색 바지. 청록색 박스커터 한손검',
      personality: '이성적이고 주도적임. 카리스마. 강한 주관',
      likes: '당근. 술',
      dislikes: '정부. 생선',
      skills: '전략전술. 달리기',
      weaknesses: '일찍 일어나기',
      speechStyle: '부드럽고 절제된 표현',
      background: '후허하오터 거주. 묵화린이 사이코 해저드가 되어 혼란한 틈을 타 본격적인 반군 활동 중. 후허하오터 형제단 리더.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('아크한일반')}.webp`,
      galleryImages: getGalleryUrls('아크한')
    },
    {
      id: 'ashinta',
      name: '아신타',
      gender: '남',
      appearance: '하얀 짧은머리. 푸른 눈. 하얀 코트. 목에서부터 아래로 전부 기계화. 푸른색 에너지 박스커터 한손검',
      personality: '진중함. 화가 많음. 은근히 허술함',
      likes: '초콜릿. 단 음식',
      dislikes: '귀찮은 일',
      skills: '전투. 달리기',
      weaknesses: '길찾기',
      speechStyle: '짜증이 가득한 말투',
      background: '마이너 에이전트. 사고로 인해 신체의 대부분이 기계화된 사이보그다. 단맛만 느낄 수 있다. 귀에 부착된 거대한 수신기로 위치를 추적한다.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('아신타일반')}.webp`,
      galleryImages: getGalleryUrls('아신타')
    },
    {
      id: 'fortune',
      name: 'FORTUNE',
      gender: '녀',
      appearance: '인간형 안드로이드. 은색 피부. 대머리. 검은 공막과 하얀 눈. 주황색 미니드레스. 돌격소총',
      personality: '발랄함. 동정심이 많음. 공과 사를 구분함',
      likes: '작은 동물들',
      dislikes: '무례한 사람',
      skills: '전투. 공감능력',
      weaknesses: '계산',
      speechStyle: '친절하고 수다스러움',
      background: '메이저 에이전트 FORTUNE. 포츈은 인간형 안드로이드지만 외피를 덮지 않아 로봇같은 외형을 하고 있다. 피부의 질감 자체는 인간같지만 겉보기에는 로봇처럼 보인다. 자기 말로는 무섭게 보이려고 일부러 이런 모습을 유지한다고 한다.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('FORTUNE일반')}.webp`,
      galleryImages: getGalleryUrls('FORTUNE')
    },
    {
      id: 'judgement',
      name: 'JUDGEMENT',
      gender: '녀',
      appearance: '인간형 안드로이드. 검은 긴머리. 하늘색 눈. 하얀색 블레이저. 검은색 미니드레스. 저격소총',
      personality: '도도함. 사냥을 즐김. 예민함',
      likes: '저렴한 간식',
      dislikes: '일하는 것',
      skills: '저격. 계산',
      weaknesses: '시간 약속',
      speechStyle: '친절하고 수다스러움',
      background: '메이저 에이전트 JUDGEMENT. 저지먼트는 묵화린 저지를 위해 포츈과 함께 파견되었다.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('JUDGEMENT일반')}.webp`,
      galleryImages: getGalleryUrls('JUDGEMENT')
    },
    {
      id: 'woonghee',
      name: '웅희',
      gender: '녀',
      appearance: '검은 번 헤어에 금발 브릿지. 청회색 눈. 검은색 항공 점퍼. 흰색 후드. 검은 바지. 파란색과 노란색 응원봉',
      personality: '집착. 반항적. 자유로움',
      likes: '묵화린',
      dislikes: '정부',
      skills: '정보 수집',
      weaknesses: '신체 활동',
      speechStyle: '말이 많고 경박함',
      background: '묵화린의 광팬. 묵화린의 두 눈을 닮은 응원봉을 항상 가지고 다닌다. 독자적으로 반정부 활동 중.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('웅희일반')}.webp`,
      galleryImages: getGalleryUrls('웅희')
    },
    {
      id: 'chunhwa',
      name: '춘화',
      gender: '녀',
      appearance: '검은 보브 컷에 대각 앞머리. 검은 눈. 흰색 꽃무늬 반팔 치파오',
      personality: '어딘가 슬퍼보임. 체념. 평온함',
      likes: '꽃',
      dislikes: '정부',
      skills: '술 마시기. 술 만들기',
      weaknesses: '거절',
      speechStyle: '얌전함',
      background: '어얼둬쓰의 바텐더. 묵화린의 하나뿐인 친구. AI정부의 압제에서 벗어나고 싶지만 두려운 마음도 있다.',
      imageUrl: `${REPO_BASE}/${encodeURIComponent('춘화일반')}.webp`,
      galleryImages: getGalleryUrls('춘화')
    }
  ]
};

export const ALL_SERIES: Series[] = [HEBEI_SERIES, NEIMENGGU_SERIES];
