
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

export const ALL_SERIES: Series[] = [HEBEI_SERIES];
