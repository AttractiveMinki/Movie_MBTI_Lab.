import Vue from 'vue'
import Vuex from 'vuex'
import Vuesax from 'vuesax'

import SERVER from '@/api/drf.js'
import router from '@/router/index.js'
import axios from 'axios'
import jwt_decode from "jwt-decode"
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css'


// const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY

Vue.use(Vuex)
Vue.use(Vuesax, {
  
})

export default new Vuex.Store({
  state: {
    username: 'annonymous_User',
    userid: null, 
    selectedUser: '',

    authToken: localStorage.getItem('jwt'), // 로그인시 필요한 토큰
    decoded: '',
    isStaff: 0,

    // 영화 선택
    // 리뷰 선택
    inputValue: '', // 검색어(검색시), SearchValue
    selectedVideo: '', // 유튜브 예고편, movieReview
    movies: [], // movies
    myMBTIMovies: [],
    

    inputReview: '',
    selectedReview: '', // 선택한 리뷰
    reviews: [], // 리뷰 모음
    selectedReviewComment: '',

    adminData: '',

    // Movie
    selectedMovie: '',
    moviePreview: '',
    avgRank: '',
    selectedMovieReview: '',


    // Admin
    userInformations: '',
    userInformationselect: '',
    movieInformations: '',
    movieInformationselect: '',

    //MBTI
    endPoint: 12,
    select: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    qnaIdx: 0,
    mbtiResult: 0,

    qnaList: [
      {
        q: '1. 사람들이 많을 때 나는',
        a: [
          { answer: '"아니 그래서 어떻게 됐냐면..." 주로 대화를 이끌어 나간다.', type: [8, 9, 10, 11, 12, 13, 14, 15] },  // E
          { answer: '"그래서 어떻게 됐어?" 주로 상대방의 이야기를 듣는다.', type: [0, 1, 2, 3, 4, 5, 6, 7] },     // I
        ]
      },
      {
        q: '2. 내가 더 중요하게 생각하는 것은?',
        a: [
          { answer: '현재가 없으면 미래도 없다.', type: [0, 1, 4, 5, 8, 9, 12, 13] },             // S
          { answer: '미래를 생각하지 않으면 발전이 없다.', type: [2, 3, 6, 7, 10, 11, 14, 15] },  // N
        ]
      },
      {
        q: '3. 거절해야 하는 상황이 오면 나는?',
        a: [
          { answer: '강력하게 할 수 없다고 말한다.', type: [0, 3, 4, 7, 8, 11, 12, 15] },   // T
          { answer: '고민하다가 대부분 들어주는 편이다.', type: [1, 2, 5, 6, 9, 10, 13, 14] },  // F
        ]
      },
      {
        q: '4. 바빠보이는 팀장님이 급하게 지시한 업무, 사소한 부분이지만 이해가 가지 않는다. 나의 행동은?',
        a: [
          { answer: '팀장님께 이해가 가지 않는 부분을 직접 물어본 후 진행한다.', type: [0, 1, 2, 3, 12, 13, 14, 15] },    // J
          { answer: '우선 내가 이해한 대로 빠르게 업무를 완료하여 보고한다.', type: [4, 5, 6, 7, 8, 9, 10, 11] },  // P
        ]
      },
      {
        q: '5. 상사로부터 꾸지람을 들었을 때 나는?',
        a: [
          { answer: '이런 결과밖에 못 낸 자신에게 화가 난다.', type: [0, 3, 4, 7, 8, 11, 12, 15] },   // T
          { answer: '주변 사람들이 나를 어떻게 생각할까 걱정한다.', type: [1, 2, 5, 6, 9, 10, 13, 14] },  // F
        ]
      },

      {
        q: '6. 일할 때 나는?',
        a: [
          { answer: '남들이 하는 대로 따라 가는 것이 좋다.', type: [0, 1, 4, 5, 8, 9, 12, 13] },     // S
          { answer: '스스로 나만의 방법을 만드는 게 좋다.', type: [2, 3, 6, 7, 10, 11, 14, 15] },    // N
        ]
      },
      {
        q: '7. 과일이 먹고 싶어진 나는',
        a: [
          { answer: '"밖에 나가고 싶어!" 바람도 쐴 겸 직접 과일을 사러 간다.', type: [8, 9, 10, 11, 12, 13, 14, 15] },    // E
          { answer: '"나가기 귀찮아..." 집에서 인터넷으로 주문한다.', type: [0, 1, 2, 3, 4, 5, 6, 7] },   // I
        ]
      },
      {
        q: '8. 지금 이 테스트를 하면서 나는?',
        a: [
          { answer: '별 생각없이 참여한다.', type: [4, 5, 6, 7, 8, 9, 10, 11] },  // P
          { answer: '이 테스트의 원리는 무엇일까 생각해본다.', type: [0, 1, 2, 3, 12, 13, 14, 15] },    // J
        ]
      },
      {
        q: '9. 친구들과 놀 때 나는?',
        a: [
          { answer: '소수의 친구들과 소소하게 대화하는 것을 좋아한다.', type: [0, 1, 2, 3, 4, 5, 6, 7] },   // I
          { answer: '왁자지껄한 신나는 분위기를 좋아한다.', type: [8, 9, 10, 11, 12, 13, 14, 15] },    // E
        ]
      },
      {
        q: '10. 배가고파 밥을 먹으려고 한다. 나의 식당 선택 방법은?',
        a: [
          { answer: '"이 주변에 ㅇㅇ이 맛있다던데..." 기억해둔 맛집을 찾아간다.', type: [0, 1, 2, 3, 12, 13, 14, 15] },    // J
          { answer: '"가까운 식당 중 평점 높은곳이..." 주변의 평점 좋은 식당을 찾아간다.', type: [4, 5, 6, 7, 8, 9, 10, 11] },  // P
        ]
      },
      {
        q: '11. 주변 사람들이 나에게 하는 말은?',
        a: [
          { answer: '꾸준하고 참을성이 있다는 말을 자주한다.', type: [0, 1, 4, 5, 8, 9, 12, 13] },     // S
          { answer: '창의적이고 독창적이라는 말을 자주한다.', type: [2, 3, 6, 7, 10, 11, 14, 15] },    // N
        ]
      },
      {
        q: '12. 새로운 후임이 들어왔을 때, 당신의 업무 지시 스타일은?',
        a: [
          { answer: '한 번에 이해되도록, 논리적이고 구체적으로 설명한다.', type: [0, 3, 4, 7, 8, 11, 12, 15] },   // T
          { answer: '그때그때 상황에 맞춰 친절히 알려준다.', type: [1, 2, 5, 6, 9, 10, 13, 14] },  // F
        ]
      }
    ],
    infoList: [
      {
        type1: "I",
        type2: "S",
        type3: "T",
        type4: "J",
        name: '청렴결백한 논리주의자, 세상의 소금형 <ISTJ>',
        desc: [
          '당신은 <인터스텔라> 속 과학적이고 이성적인 것을 중시하는 "쿠퍼"와 닮았습니다.', 
          '한 번 시작한 일은 끝까지 해내는 경향이 있으며 약속을 매우 중시하는 사람입니다.', 
          '안정성을 추구하고 간섭받는 것을 싫어합니다.', 
          '또한 다방면에 재능이 많아 주변에 당신을 믿고 의지하는 사람이 많을 것 같네요.',
        ],
        recommend_name: '세상의 소금같은 ISTJ를 위한 짠내 폭발 영화 추천',
        recommend_desc: [
          '유형 비율 1위! 한국 인구의 약 15%를 차지한다는 청렴결백한 논리주의자 유형, ISTJ!',
          ' 내향적이고 현실적이며, 증명된 사실에 의한 판단을 하며, 계획과 절차를 중요하게 생각하는 ISTJ는 보수적인 마이웨이형으로,', 
          '세상의 소금 같은 존재라고 하는데요. 한 주 동안 주어진 임무를 완수하느라 그리고 원칙에서 벗어나지 않으려 노력하느라 고생한 ISTJ인들을 위해,', 
          '그리고 주말 동안 집에서 다음 주를 살아갈 힘을 채워갈 내향인들을 위해! 추천영화를 찾아왔습니다!'
        ],
        movie: [
          '가타카',
          '스타워즈 에피소드 5: 제국의 역습',
          '악마는 프라다를 입는다',
        ],
      },
      {
        type1: "I",
        type2: "S",
        type3: "F",
        type4: "J",
        name: '용감한 수호자, 임금 뒷편의 권력형 <ISFJ>',
        desc: [
          'ISFJ 유형 성격의 소유자들은 조용하고 차분하며 온정적이고 친근합니다.', 
          '책임감과 인내력 또한 매우 강합니다.', 
          '본인이 존경하거나 좋아하는 사람에 대해서는 충성심과 애정이 가득합니다.', 
          '이들은 언제나 진솔하려 노력하고 가볍지 않기 때문에 관계를 맺기에 가장 믿음직스러운 유형입니다.'
        ],
        recommend_name: '다정하고 성실한 ISFJ를 위한 영화 추천',
        recommend_desc: [
          '"I can do this all day"',
          'ISFJ인 당신은 <어벤져스>의 캡틴 아메리카와 닮았습니다.',
          '법과 규칙을 준수하고 의무와 헌신으로 똘똘 뭉쳐 있습니다.',
          '책임감이 강하고 온정적이며 헌신적이죠.',
          '경험을 통해 자신이 생각한 것이 틀렸다고 인정하기 전까지, 어떤 난관이 있어도 꾸준히 밀고 나갑니다.',
          'ISFJ들을 위해 계획적으로 흘러가는 하루하루를 보여주는 영화들을 추천합니다!'
        ],
        movie: [
          '인셉션',
          '월터의 상상은 현실이 된다',
          '메이즈 러너',
        ],
      },
      {
        type1: "I",
        type2: "N",
        type3: "F",
        type4: "J",
        name: '선의의 옹호자, 예언자형 <INFJ>',
        desc: [
          '인내심이 많고 통찰력과 직관력이 뛰어나며 화합을 추구합니다.', 
          '창의력이 좋으며, 성숙한 경우엔 강한 직관력으로 타인에게 말없이 영향력을 끼칩니다.', 
          '독창성과 내적 독립심이 강하며, 확고한 신념과 열정으로 자신의 영감을 구현시켜 나가는 정신적 지도자들이 많습니다.', 
          '나무보다 숲을 봅니다. 한곳에 몰두하는 경향으로 목적 달성에 필요한 주변적인 조건들을 경시하기 쉽고, 자기 내부의 갈등이 많고 복잡합니다.', 
          '이들은 풍부하고 감성적인 내적인 생활을 소유하고 있습니다.'
        ],
        recommend_name: '선의의 옹호자, INFJ를 위한 영화 추천',
        recommend_desc: [
          '"가장 어두운 시간에도 행복은 존재하는 법이란다. 불을 켜는 것을 잊지 않는다면 말이지."',
          'INFJ인 당신은 <해리포터>속 모든 질문의 해답을 지니고 있는 "덤블도어"와 닮았습니다.',
          '얕고 넓은 관계보단 깊은 소수의 관계를 중시하는 당신은 특정 무리에 속하기 보단 독립적으로 행동하는 성향이 있습니다.',
          '직설적이기보단 비유적인 소통을 좋아하며 이상적이고 통찰력과 관찰력이 뛰어납니다.',
          '당신에게 조언과 고민상담을 받고 싶은 사람들이 많을 것 같네요!',
          '관계를 중요시하는 INFJ들을 위한 영화를 추천합니다!'
        ],
        movie: [
          '미 비포 유',
          '타이타닉',
          '다만, 널 사랑하고 있어',
        ],
      },
      {
        type1: "I",
        type2: "N",
        type3: "T",
        type4: "J",
        name: '용의주도한 전략가, 과학자형 <INTJ>',
        desc: [
          '내향적이고 자기탐구적인 성향이 강합니다.',
          '사람들과 만나면 피곤하고, 특히 수다떠는 장소에 가면 시간만 아까울 뿐입니다.',
          '같이 이론적인 대화를 나눌 수 있는 지적이거나 아주 감성적으로 매력적인 사람에게 마음이 끌립니다.',
          '아마도 심심하다며 친구에게 먼저 만나자고 전화하는 일은 별로 없을 것 같네요.',
        ],
        recommend_name: '가장 독립적인 INTJ를 위한 서스펜스 영화 추천',
        recommend_desc: [
          '"That is all."',
          '당신은 <악마는 프라다를 입는다>의 완벽한 커리어우먼인 미란다 편집장과 닮았습니다.',
          '넓은 시야와 사고로 먼저 비전을 제시하며 이성적이고 냉철하게 판단합니다.',
          '혼자 있는 시간을 즐기며 혼자만의 공간, 자신이 좋아하는 책이나 그림에서 행복감과 안도감을 느낍니다.',
          '에너지가 UP 되는 것은 타인을 통해서가 아니라 스스로가 만족할 만한 어떤 활동을 하고 있을 때!',
          '그것도 단독으로. 한마디로 혼자여도 외롭지 않다는 스타일의 INTJ!',
          'INTJ는 단순히 즐기기위한 영화보다는 생각하게 하는 영화를 좋아한다고 하네요.',
          'INTJ를 위한 서스펜스 영화 추천!'
        ],
        movie: [
          '인셉션',
          '쇼생크 탈출',
          '다크 나이트',
        ],
      },
      {
        type1: "I",
        type2: "S",
        type3: "T",
        type4: "P",
        name: '만능 재주꾼, 백과사전형 <ISTP>',
        desc: [
          '과묵하며 절제된 호기심으로 인생을 관찰하고, 상황을 파악하는 민감성과 도구를 다루는 뛰어난 능력이 있습니다.', 
          '말이 없으며, 객관적이고 합리적으로 인생을 관찰하는 유형입니다.', 
          '필요 이상으로 자신을 발휘하지 않으며, 일과 관계되지 않는 이상 어떤 상황이나 인간관계에 직접 뛰어들지 않습니다.', 
          '가능한 에너지 소비를 하지 않으려 하며, 사실적 자료를 정리, 조직하기를 좋아하는 경향이 있으며 인과관계나 객관적 원리에 관심이 많습니다.', 
          '눈치가 빠르며, 조용히 자기 일만 하고 있는 것처럼 보이지만 사실 주변 상황파악도 다 하고 있습니다.', 
          '손재주가 있는 전형적인 장인이나 제조 업자 스타일의 성격을 가집니다.',
        ],
        recommend_name: '영화는 혼자 보는게 진리라고 생각하는 ISTP를 위한 액션 영화 추천',
        recommend_desc: [
          '"모킹제이가 되겠어요."',
          '당신은 <헝거게임>속 운명에 맞서 혁명의 도화선이 되는 소녀 "캣니스 에버딘"과 닮았습니다.',
          '독립심이 높은 편으로 어떤 상황에서든 치열한 경쟁력을 가지고 살아남고자 하는 의지가 강합니다.',
          'ISTP는 성격 특성상 인물들의 감정흐름에 초점을 맞추기보단 결말에 집중하는데,', 
          '로맨스물은 특성상 결말이 어느정도 예측 가능하기 때문에 흥미가 떨어지는 듯 합니다.',
          '반면 스토리 전개와 결말이 예측 불가능한 스릴러물같은 궁금증 유발 영화가 딱!',
          '함축적이거나 은유적인 요소 없이 직관적이고 명쾌한 설명으로 스토리 전개에만 집중하는 영화들을 소개합니다!'
        ],
        movie: [
          '라이언 일병 구하기',
          '시카리오:  암살자의 도시',
          '바스터즈: 거친 녀석들',
        ],
      },
      {
        type1: "I",
        type2: "S",
        type3: "F",
        type4: "P",
        name: '호기심 많은 예술가, 성인군자형 <ISFP>',
        desc: [
          '자기 중심성의 양면성이 있습니다. 타인 배려 성향도 다분합니다.',
          '말없이 다정하고 온화하며 사람들에게 친절하고 상대방을 잘 알게 될 때까지 내면의 모습이 잘 보이지 않습니다.', 
          '의견 충돌을 피하고, 인화를 중시합니다. 인간과 관계되는 일을 할 때 자신의 감정과 타인의 감정에 지나치게 민감한 경향이 있습니다.', 
          '이들은 결정력과 추진력을 기를 필요가 있습니다.',
          '사람간의 화합을 중요하게 생각하며 의견 충돌을 회피하는 성향으로 인해 타인과의 갈등이 심화되었을 경우 문제를 해결하려고 하기보다 상대방과의 관계를 끊을 수 있습니다.'
        ],
        recommend_name: '우유젤리같은 ISFP를 위한 영화 추천',
        recommend_desc: [
          '"넌 박살낼 줄만 알지 뭘 만들어내진 못하잖아."',
          '당신은 <싱스트리트> 속 예술적인 감성으로 사람들을 사로잡는 매력적인 코너와 닮았습니다.',
          '둥글둥글하고 순해서 어떤 사람을 만나든 원만하게 잘 지내는 편이에요.',
          '우유젤리처럼 사람들을 편하게 만들어 주고 배려심이 깊죠. 말보다는 행동으로 많이 표현해요.',
          '매사에 여유롭고 낙천적인 편이며, 자유로운 영혼이라는 소리를 많이 듣는 편이에요.',
          '자유로운 영혼, ISFP들을 위한 우유젤리처럼 부드럽게 녹는 영화들을 추천합니다!,'
        ],
        movie: [
          '소울',
          '토이 스토리',
          '라라랜드',
        ],
      },
      {
        type1: "I",
        type2: "N",
        type3: "F",
        type4: "P",
        name: '열정적인 중재자, 잔다르크형 <INFP>',
        desc: [
          '"누군가를 사랑하고자 한다면 네 자신을 먼저 사랑해야 해."',
          '당신은 <미녀와 야수> 속 이상적인 세계를 만들어 나가고자 하는 진취적인 여성 "벨"과 닮았습니다.',
          '현실보단 이상적인 삶에 대해 끊임없이 갈망하고 생각하는 편이며 내면에 깊은 열정을 가지고 있습니다.',
          '한결같은 삶을 지향하며 사랑의 가치를 최우선으로 두는 당신은 꽤 로맨틱한 사람이네요.'
        ],
        recommend_name: '감성적인 INFP를 위한 영화 추천',
        recommend_desc: [
          '본인만의 세계를 꾸리는 걸 좋아하는 타입이지만 동시에 공감 능력이 매우 높은 감정적인 유형, INFP!',
          '영화를 멀찍이 떨어져 하나의 ‘작품’으로 감상하기보다 작품 속 인물의 감정에 이입하거나,', 
          '인물 사이 관계의 틈에 들어가 감상하길 즐기는 INFP형은 특히 상상력이 매우 풍부한 유형이기에', 
          '영화를 ‘본다는 것’으로 끝내지 않고, 더 나아가 머릿속에서 자신만의 영화를 그려나가는 유형입니다.', 
          '주관적이고 감상적이며 공상적이기도 한 INFP형에게 ‘영화’만큼 좋은 탈출구는 없다고 하는데요!', 
          '그래서인지, 상상의 나래를 마음껏 펼칠 수 있는 SF 영화도, 대리 만족을 느낄 수 있는 로맨스 영화도,', 
          '눈물 펑펑 쏟아낼 수 있는 드라마 혹은 다큐멘터리까지 장르 불문하고 다양한 작품을 즐긴다고 합니다.', 
          '이처럼, 안 본 영화 없을 것 같은 INFP형에게아예 안 본 사람은 있어도 한 번만 본 사람은 없을언제 봐도 좋을 영화를 추천해드리려 합니다.'
        ],
        movie: [
          '해리 포터와 마법사의 돌',
          '500일의 썸머',
          '센과 치히로의 행방불명',
        ],
      },
      {
        type1: "I",
        type2: "N",
        type3: "T",
        type4: "P",
        name: '논리적인 사색가, 아이디어 뱅크형 <INTP>',
        desc: [
          '조용하고 과묵하며 논리와 분석으로 문제를 해결하기 좋아합니다.', 
          '먼저 대화를 시작하지 않는 편이나 관심이 있는 분야에 대해서는 말을 많이 합니다.', 
          '이해가 빠르고 직관력으로 통찰하는 능력이 있으며 지적 호기심이 많아, 분석적이고 논리적입니다.', 
          '아이디어와 원리, 인과관계에 관심이 많으며 실체보다는 실체가 안고 있는 가능성에 관심이 많습니다.', 
          '가끔은 매우 추상적이고 비현실적으로 생각하는 경향이 있습니다.', 
          '복잡한 문제를 해결하고 답을 찾는데 집중력을 발휘하지만 막상 그 해결책을 실제 현실에 적용하는 것에는 관심이 없습니다.'
        ],
        recommend_name: '아이디어 뱅크 INTP를 위한 전략가 영화 추천',
        recommend_desc: [
          '"내가 진정한 정의다."',
          "INTP인 당신은 <데스노트>의 엘과 닮았습니다.",
          '매우 객관적인 편으로 개인적인 경험보단 전체적인 상황에 따라 판단을 내리곤 합니다.',
          '편견이 없는 편이며 잘못을 얘기하는 사람에겐 너그럽게 용서해 주네요.',
          '당신의 따끔한 충고가 필요하다고 사람들은 종종 고민상담을 요청할 수도 있겠어요.',
          '논리적인 분석을 좋아하는 INTP들을 위한 사이언스 & 천재 총집합 영화를 추천합니다!'
        ],
        movie: [
          '매트릭스',
          '스타워즈 에피소드 5: 제국의 역습',
          '인터스텔라',
        ],
      },
      {
        type1: "E",
        type2: "S",
        type3: "T",
        type4: "P",
        name: '모험을 즐기는 사업가, 수완좋은 활동가형 <ESTP>',
        desc: [
          '사실적이고 관대하며 개방적이고 사람이나 사물에 대한 선입견이 별로 없습니다.', 
          '강한 현실 감각으로 타협책을 모색하고 문제를 해결하는 능력이 뛰어납니다. 센스 있고 유머러스합니다.', 
          '어디서든 적응을 잘 하고 친구와 어울리기를 좋아합니다.',
          '긴 설명을 싫어하고 운동, 음식 등 주로 오감으로 보고 듣고 만질 수 있는 삶의 모든 것을 즐기는 유형입니다.', 
          '순발력이 뛰어나며 많은 사실들을 쉽게 기억하고, 예술적인 멋과 판단력을 갖고 있으며, 연장이나 재료들을 다루는 데 능숙합니다.', 
          '논리, 분석적으로 일을 처리하는 데 반해, 추상적인 아이디어나 개념에 대해서는 별로 흥미가 없습니다.', 
          '즉, 현실적이고 실용적인 면에서 분석적인 자세를 보입니다.'
        ],
        recommend_name: '모험을 즐기는 ESTP를 위한 스릴있는 영화 추천',
        recommend_desc: [
          '"때로는 거짓말을 믿고 사는 게 더 편해."',
          '당신은 <캐치 미 이프 유 캔> 속 재치있는 언행으로 인생을 즐기면서 사는 "프랭크"와 닮았습니다.',
          '쾌활하고 활동적인 성격으로 어떤 일이든 즐기면서 하려는 마음가짐을 가지고 있습니다.',
          '재미있는 것을 좋아하며 자신을 정당화하려는 성향이 강합니다.',
          '눈치가 빠르고 영리한 당신은 사람들 사이에서 곁에 있으면 언제나 즐거운 사람으로 통하겠네요!',
          '자유분방하고 개방적이며 모험과 스릴을 즐기는 ESTP에게 찰떡인 영화를 추천합니다!',
        ],
        movie: [
          '나우 유 씨 미: 마술사기단',
          '캐치 미 이프 유 캔',
          '모아나',
        ],
      },
      {
        type1: "E",
        type2: "S",
        type3: "F",
        type4: "P",
        name: '자유로운 영혼의 연예인, 사교적인 유형 <ESFP>',
        desc: [
          '사교적이고 활동적이며 수용력이 강하고 친절하며 낙천적입니다.', 
          '어떤 상황이든 잘 적응하며 현실적이고 실제적입니다.', 
          '주위의 사람이나 일어나는 일에 대하여 관심이 많으며 사람이나 사물을 다루는 사실적인 상식이 풍부합니다.', 
          '때로는 조금 수다스럽고, 진지함이 결여되거나 마무리를 등한시하는 경향이 있으나, 어떤 조직체나 공동체에서 밝고 재미있는 분위기 조성 역할을 잘 합니다.',
          '센스와 유머, 사교성이 매우 빼어나지만 더욱 감정적인 성격답게 충동이 더 많고 무엇이든 골치아프게 너무 깊이 생각하지 않고 쉽게 넘어가려는 성격이 더욱 강합니다.'
        ],
        recommend_name: '자유로운 영혼! ESFP를 위한 영화 추천',
        recommend_desc: [
          '"키스라는 건 말이야~ 자 봐봐."',
          '당신은 <건축학개론> 속 빼놓을 수 없는 분위기 메이커 "납득이"와 닮았습니다.',
          '모임과 무리에서 존재감을 발산하는 당신은 사교적이고 집단 생활을 즐기는 편입니다',
          '인생을 즐기면서 살고 싶은 마음이 강한 당신은 의리를 중요하게 생각하고 누구를 만나든 편견 없이 열린 마인드로 대해줍니다.',
          '당신과 마주하는 상대방은 언제나 환영받는 기분이 들 거에요.',
          '자유로운 당신을 위한, 자유로움을 찾아 떠나는 영화를 추천합니다!'
        ],
        movie: [
          '세 얼간이',
          '맘마 미아!',
          '벼랑 위의 포뇨',
        ],
      },
      {
        type1: "E",
        type2: "N",
        type3: "F",
        type4: "P",
        name: '재기발랄한 활동가, 스파크형 <ENFP>',
        desc: [
          '따뜻하고 정열적이고 활기가 넘치며 재능이 많고 상상력이 풍부합니다.', 
          '온정적이고 창의적이며 항상 새로운 가능성을 찾고 시도하는 유형입니다.', 
          '문제 해결에 재빠르고 관심이 있는 일은 무엇이든지 수행해내는 능력과 열성이 있습니다.', 
          '다른 사람들에게 관심을 쏟으며 사람들을 잘 다루고 뛰어난 통찰력으로 도움을 줍니다.', 
          '반복되는 일상적인 일을 참지 못하고 열성이 나지 않습니다.', 
          '또한 한 가지 일을 끝내기도 전에 몇 가지 다른 일을 또 벌이는 경향을 가지고 있습니다.', 
        ],
        recommend_name: '재기발랄한 ENFP를 위한 매력있는 영화 추천',
        recommend_desc: [
          '"그 검은 상자를 저와 함께 열어 보시겠어요, 어머니?"',
          '당신은 <기생충> 속 카리스마와 뛰어난 임기응변으로 상황을 유리하게 만드는 기정과 닮았습니다.',
          '다방면에서 다재다능한 당신은 상황 판단이 빠르며 대처 능력이 우수합니다.',
          '눈치가 빠른 만큼 섬세하고 민감해 감수성이 높으며 겉으론 카리스마있어 보이지만 속으론 상처를 잘 받는 여린 마음을 가지고 있습니다.',
          '이런 반전 있는 모습들이 당신을 더욱 매력적으로 보이게 만들 것 같네요.',
          '당신처럼 매력있는 영화들을 추천합니다!'
        ],
        movie: [
          '레옹',
          '사운드 오브 뮤직',
          '기생충',
        ],
      },
      {
        type1: "E",
        type2: "N",
        type3: "T",
        type4: "P",
        name: '뜨거운 논쟁을 즐기는 변론가, 발명가형 <ENTP>',
        desc: [
          '박식하고 독창적이며 창의력이 풍부합니다.', 
          '안목이 넓고 다방면에 관심과 재능이 많습니다.', 
          '풍부한 상상력과 새로운 일을 시도하는 솔선력이 강하며 논리적입니다.', 
          '새로운 문제나 복잡한 문제에 해결 능력이 뛰어나며 사람들의 동향에 대해 기민하고 박식합니다.', 
          '그러나 일상적이고 세부적인 일을 경시하고 태만하기 쉽습니다.', 
          '즉, 관심을 갖고 있는 분야에서는 대단한 수행 능력을 가지고 있지만 새로운 도전이 없는 일에는 흥미를 가지지 못합니다.'
        ],
        recommend_name: '논쟁을 즐기는 ENTP를 위한 영화 추천',
        recommend_desc: [
          '"세상의 끝에서 누굴 만나야 해서 말이야"',
          '당신은 <캐리비안 해적>의 낙천적이고 개성있는 "잭 스패로우" 선장과 닮았습니다.',
          '언제나 새로움을 추구하고 행동력이 강하며 "논쟁을 즐기는 변론가"로 불리기도 할 만큼 논리적인 유형입니다.',
          'ENTP를 위한 찰떡 영화를 추천합니다!'
        ],
        movie: [
          '캐치 미 이프 유 캔',
          '데드풀',
          '위플래쉬',
        ],
      },
      {
        type1: "E",
        type2: "S",
        type3: "T",
        type4: "J",
        name: '엄격한 관리자, 사업가형 <ESTJ>',
        desc: [
          '현실적, 구체적이고 사실적이며 활동을 조직화하고 주도해 나가는 지도력이 있습니다.', 
          '실질적이고 현실 감각이 뛰어나며 일을 조직하고 계획하여 추진시키는 능력이 있습니다.', 
          '기계 분야나 행정 분야에 재능을 지녔으며, 체계적으로 사업체나 조직체를 이끌어 나갑니다.', 
          '타고난 지도자로서 일의 목표를 설정하고, 지시하고 결정하고 이행하는 능력이 있습니다.', 
          '자기 또는 타인의 감정을 고려하는 능력이 매우 부족하여 속단 속결하는 경향과 지나치게 업무 위주로 사람을 대하는 경향이 있으므로 인간 중심의 가치와 타인의 감정을 충분히 고려해야 합니다.', 
          '또 미래의 가능성보다 현재의 사실을 추구하기 때문에 현실적, 실용적인 면이 강합니다.', 
          '불건강할 경우, 무례할 수 있습니다.'
        ],
        recommend_name: '헤르미온느 ESTJ를 위한 영화 추천',
        recommend_desc: [
          '"그럼 다음에는 같이 춤추자고 네가 먼저 신청해!"',
          '당신은 <해리포터> 속 없어서는 안될 똑쟁이 캐릭터 "헤르미온느"와 닮았습니다.',
          '자신의 감정을 잘 표현하고, 때로는 화끈하며 자기 주장이 강한 편입니다.',
          '현실적인 유형답게 영화도 생각해 볼 수 있는, 혹은 현실적인 영화를 좋아한다고 합니다!',
        ],
        movie: [
          '죽은 시인의 사회',
          '나이브스 아웃',
          '어톤먼트',
        ],
      },
      {
        type1: "E",
        type2: "S",
        type3: "F",
        type4: "J",
        name: '사교적인 외교관, 친선도모형 <ESFJ>',
        desc: [
          '동정심이 많고 다른 사람에게 관심을 쏟으며 인화를 중시합니다.', 
          '타고난 협력자로서 동료애가 많고 친절하며 능동적인 구성원입니다.', 
          '이야기 하기를 즐기며 정리정돈을 잘하고, 참을성이 많고 다른 사람들을 잘 도와줍니다.', 
          '사람을 다루고 행동을 요구하는 분야, 예를 들면 교직, 성직, 판매 특히 동정심을 필요로 하는 간호나 의료 분야에 적합합니다.', 
          '일이나 사람 관련 문제에 대하여 냉철한 입장을 취하기 어려워합니다.', 
          '반대 의견에 부딪혔을 때나, 자신의 요구가 거절 당했을 때 마음의 상처를 받습니다.',
        ],
        recommend_name: '사교적인 ESFJ를 위한 잔잔한 영화 추천',
        recommend_desc: [
          '"내가 너를 얼마나 좋아하는데! 니가 세상에서 제일 예쁜데..."',
          '당신은 <써니> 속 친구를 소중히 여기는 상냥하고 친절한 캐릭터 "나미"와 닮았습니다.',
          '이 유형은 전반적으로 큰 스트레스 없는 잔잔한 영화를 선호합니다.',
          '액션 스릴러보다는 로캔스, 휴머니티 장르를 좋아하는 ESFJ를 위해 추천 영화를 준비했습니다!',
        ],
        movie: [
          '라라랜드',
          '클래식',
          '어바웃 타임',
        ],
      },
      {
        type1: "E",
        type2: "N",
        type3: "F",
        type4: "J",
        name: '정의로운 사회운동가, 언변능숙형 <ENFJ>',
        desc: [
          '정의로운 사회운동가형 ENFJ는 사실 전 세계를 대상으로 봐도 15위로 굉장히 낮은 비중을 차지하고 있는데요.', 
          '매우 따뜻한 마음씨를 갖고 있으며 감성적이지만, 동시에 계획적이고 책임감이 강하며 적극적이기도 한 이 유형은', 
          '모두의 행복, 즉 이상을 꿈꾸며 나아가는 유형입니다.', 
          '진실된 ‘관계’를 꾸려나가고자 하는 ENFJ형들을 위해다양한 유형과 형태의 사람에 대한 이야기가 있는 추천 영화와 함께 찾아왔습니다!',
        ],
        recommend_name: '진실된 ENFJ를 위한 따뜻한 영화 추천',
        recommend_desc: [
          '"토끼도 야수가 될 수 있어!"',
          '당신은 <주토피아>의 당차고 밝은 토끼 경찰관 "주디"와 닮았습니다.',
          '다른 사람과 조화롭게 협동하고 어울리는 것에 능숙하며 천성적으로 밝은 성격의 소유자입니다.',
          '재치있고 유머러스한 말과 행동으로 주변 사람들을 즐겁게 만들어 주는 만큼 타인을 배려하고 불편한 상황을 만들지 않도록 노력합니다.',
          '당신의 주변에 있는 사람들은 언제나 당신과 함께 있는 시간을 행복해할 거에요.',
        ],
        movie: [
          '금발이 너무해',
          '엠마',
          '인사이드 아웃',
        ],
      },
      {
        type1: "E",
        type2: "N",
        type3: "T",
        type4: "J",
        name: '대담한 통솔자, 지도자형 <ENTJ>',
        desc: [
          '뒤끝없이 시원시원한 성격을 갖고 있습니다. 적극적이고, 직선적이죠!',
          '완벽주의적인 성향이 있어 뭐든 잘해야 직성이 풀립니다.',
          '상황판단과 문제해결에 뛰어난 능력이 있고, 솔선수범하는 편입니다. 그래서 주로 리더의 성향이 강해요.',
          '하지만 전반적으로 표현이 서투른 편이고 너무 솔직해서 다른 사람들에게 상처를 줄 수도 있어요.',
          '조급하게 판단하는 경향이 있고, 때로는 분위기를 파악 못해 주변을 냉랭하게 만들 때도 있습니다.'
        ],
        recommend_name: '민트캔디같은 ENTJ를 위한 장군형 영화 추천',
        recommend_desc: [
          '"가엾고도 가엾구나. 가짜에게 마음을 빼앗기다니..."',
          '당신은 <아가씨> 속 높은 비전을 가지고 있는 타고난 전략가 숙희와 닮았습니다.',
          '확실한 비전의 지도자같은 ENTJ!',
          '열성이 많고 솔직, 단호하고 지도력과 통솔력이 있는 장군형입니다.',
          '하지만 다른 사람의 의견과, 자신과 타인의 감정에 귀를 기울일 필요가 있다고 합니다.',
          'ENTJ인 당신과 꼭 맞는 영화들을 추천합니다!'
        ],
        movie: [
          '월 스트리트',
          '행운의 반전',
          '패튼 대전차 군단',
        ],
      },
    ],
    genreList:[
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 37,
        "name": "Western"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 878,
        "name": "ScienceFiction"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 10770,
        "name": "TVMovie"
      },
    ],
  },
  getters: {
    isLoggedIn: function (state) {
      // authToken이 있으면 True, 없으면 False
      return state.authToken ? true : false
    },
    isAdmin: function (state) {
      // authToken이 있으면 True, 없으면 False
      return state.authToken ? true : false
    },
    // header에 붙일 정보
    config: function (state) {
      return {
        Authorization: `JWT ${state.authToken}`
      }
    },

    videoURI: function (state) {
      // const videoId = this.video.id.videoId
      if (state.selectedVideo){
        return `https://www.youtube.com/embed/${state.selectedVideo.id.videoID}` // 마지막에 videoId?
      }
    },
    videoTitle: function (state) {
      if (state.selectedVideo){
        return state.selectedVideo.snippet.title
      }
    },
    videoDescription: function (state) {
      if (state.selectedVideo){
        return state.selectedVideo.snippet.description
      }
    },
    movieLength: function (state) {
      if (state.movies) {
        return state.movies.length
      }
    },
    
  },
  mutations: {
    // 토큰 설정
    SET_TOKEN: function (state, token) {
      // 1. JWT를 변경
      state.authToken = token
      // 2. Local storage의 값도 변경
      state.decoded = localStorage.setItem('jwt', token)
    },
    REMOVE_TOKEN: function (state) {
      // 1. JWT 변경
      localStorage.removeItem('jwt')
      // 2. Local Storage에서 JWT 삭제
      state.authToken = ''
      state.decoded = ''
      state.username = ''
    },
    SET_SELECTED_USER: function (state, userInformation) {
      state.selectedUser = userInformation
    },

    // 비디오 설정
    SET_SELECTED_VIDEO: function (state, selectedDetailVideo) {
      state.selectedVideo = selectedDetailVideo
    },
    SET_INPUT_VALUE: function (state, inputValue) {
      state.inputValue = inputValue
    },
    SET_MOVIEPREVIEW: function (state, preview) {
      state.moviePreview = preview
    },
    
    // 리뷰 설정
    SET_SELECTED_REVIEW: function (state, selectedReview) {
      state.selectedReview = selectedReview
    },
    SET_INPUT_Review: function (state, inputReview) {
      state.inputReview = inputReview
    },
    SET_REVIEWS: function (state, reviews) {
      state.reviews = reviews
    },
    GET_REVIEW: function (state, review) {
      state.selectedReview = review
    },
    setIsStaff: function (state, data) {
      state.isStaff = data
    },

    // mbti 설정
    SET_SELECT: function (state, value) {
      console.log(state.select)
      for (let i=0; i < value.length ; i++){
        state.select[value[i]] += 1
      }
      console.log(state.qnaIdx, state.endPoint)
      state.qnaIdx += 1
      console.log(state.qnaIdx)
      if (state.qnaIdx == state.endPoint) {
        console.log('끝')
        // mbtiResult 성격 유형 

        let maxidx = Math.max.apply(null, state.select)
        state.mbtiResult = state.select.indexOf(maxidx)
        console.log(state.mbtiResult, '결과')
        state.qnaIdx = 0
        router.push({ name: 'MBTITestResult' })
      }
    },

    // movie 설정
    GET_MOVIE: function (state, movie) {
      state.selectedMovie = movie
    },
    GET_ADMINMOVIEINFORMATIONS: function (state, movieInformations) {
      state.movieInformations = movieInformations
    },
    SET_ADMINMOVIEINFORMATION: function (state, movieInformation) {
      state.movieInformationselect = movieInformation
    },
    SET_SELECTED_MOVIE_TO_CHANGE_REVIEW: function (state, review) {
      console.log(review)
      state.selectedMovieReview = review
      router.push({ name: 'MovieDetailReviewChange'})
    },
    SET_SELECTED_MOVIE: function (state, review) {
      console.log(review)
      state.selectedMovieReview = review
    },

    // id 설정
    SET_USERNAME: function (state, username) {
      state.username = username
    },

    GET_MOVIES_JSON: function (state, movies) {
      state.movies = movies
    },
    GET_ADMINUSERINFORMATIONS: function (state, userInformations) {
      state.userInformations = userInformations
    },
    SET_ADMINUSERINFORMATION: function (state, userInformation) {
      state.userInformationselect = userInformation
    },

    // token 으로 username 가져오기
    GET_USERNAME: function (state) {
      state.decoded = jwt_decode(state.authToken)
      if (state.authToken) {
        state.username = state.decoded.username
      } else {
        state.decoded = ''
        state.username = 'annonymous_User'
      }
    },
    GET_USERID: function (state) {
      state.decoded = jwt_decode(state.authToken)
      if (state.authToken) {
        state.userid = state.decoded.user_id
      } else {
        state.decoded = ''
        state.userid = null
      }
    },

    CHANGE_REVIEW_COMMENT_GET_COMMENT: function (state, selectedReview) {
      console.log(selectedReview)
      state.selectedReview = selectedReview
      router.push({ name: 'ReviewCommentChange'})
    },
    SET_REVIEW_COMMENT: function (state, comment) {
      state.selectedReviewComment = comment
      console.log(state.selectedReviewComment)
    },
  },
  actions: {
    login: function ({ commit, dispatch }, credentials) {
      event.preventDefault()
      console.log(credentials)
      axios({
        url: SERVER.URL + SERVER.ROUTES.login,
        method: 'post',
        data: credentials,
      })
      .then((res) => {
        console.log('로그인 요청 성공')
        commit('SET_TOKEN', res.data.token)
        commit('GET_USERNAME') // 가서 디코딩하기
        commit('GET_USERID') // 가서 디코딩하기
        dispatch('verifyUser', credentials) // 관리자 권한 검증
        router.push({ name: 'Home' })
      })
      .catch((err) => {
        console.log('로그인 에러 발생')
        console.log(err)
      })
    },
    logout: function ({ commit }) {
      commit('REMOVE_TOKEN')
      this.state.username = 'annonymous_User'
      this.state.isStaff = 0 // 스태프 권한 해지
      router.push({ name: 'Login' })
    },
    signup: function (context, credentials) {
      axios({
        url: SERVER.URL + SERVER.ROUTES.signup,
        method: 'post',
        data: credentials,
      })
      .then(() => {
        router.push({ name: 'Login' })
      })
      .catch((err) => {
        console.log(err)
      })
    },

    verifyUser: function ({ commit, getters }, credentials) {
      event.preventDefault()
      const headers = getters.config
      axios({
        url: SERVER.URL + SERVER.ROUTES.accounts + 'get_is_staff/',
        method: 'post',
        data: credentials,
        headers,
      })
      .then((res) => {
        console.log('유저 검증 요청 성공'),
        commit('setIsStaff', res.data)
      })
      .catch((err) => {
        console.log('유저 검증 요청 실패'),
        console.log(err)
      })
    },

    getReviews: function ({ commit, getters }) {
      const headers = getters.config
      axios({
        url: SERVER.URL + SERVER.ROUTES.community,
        method: 'get',
        headers,
      })
      .then((res) => {
        commit('SET_REVIEWS', res.data)
      })
      .catch((err) => {
        console.err(err)
      })
    },
    deleteReview: function ({ getters }, review) {
      const headers = getters.config
      axios({
        url: `${SERVER.URL}/community/${review.id}/`,
        method: 'delete',
        headers,
      })
      .then(() => {
        console.log('리뷰 삭제 성공!')
        router.push({ name: 'Community'})
      })
      .catch((err) => {
        console.err(err)
      })
    },
    createReview: function ({ getters }, Review) {
      const headers = getters.config

      const reviewItem = {
        Review,
      }
      console.log('0000review내역')
      console.log(reviewItem)
      if (reviewItem.Review){
        axios({
          url: SERVER.URL + SERVER.ROUTES.createreview,
          method: 'post',
          data: reviewItem,
          headers,
        })
        .then(() => {
          console.log('요청 성공')
          router.push({ name: 'Community'})
        })
        .catch((err) => {
          console.error(err)
        })
      }
    },
    editReview: function ({ getters, dispatch }, items) { 
      const headers = getters.config
      let today = new Date()
      items.updated_at = today
      const reviewItem = {
        items, // 수정
      }
      axios({
        url: `${SERVER.URL}/community/${items.id}/`,
        method: 'put',
        data: reviewItem,
        headers,
      })
      .then(() => {
        console.log('댓글 수정 성공')
        dispatch('getReviews')
        router.push({ name: 'Review'})
      })
      .catch((err) => {
        console.log('댓글수정실패')
        console.error(err)
      })
    },
    getReview: function ({ commit, getters }, id) {
      console.log('들어왔쥬')
      const headers = getters.config
      axios({
        url: SERVER.URL + SERVER.ROUTES.community + id + '/',
        method: 'get',
        headers,
      })
      .then((res) => {
        console.log('성공, 요청보내쥬')
        commit('GET_REVIEW', res.data)
        router.push({ name: 'Review'})
      })
      .catch((err) => {
        console.error(err)
      })
    },

    createComment: function ({ getters, dispatch }, Comment) {
      const headers = getters.config
      let reviewId = Comment.reviewId
      const commentItem = {
        Comment,
      }
      console.log('0000comment내역')
      console.log(commentItem)
      if (commentItem.Comment){
        axios({
          url: SERVER.URL + SERVER.ROUTES.community + reviewId + '/comments/',
          method: 'post',
          data: commentItem,
          headers,
        })
        .then(() => {
          dispatch('getReviews')
          console.log('댓글 작성 성공!')
          router.push({ name: 'Community'})
        })
        .catch((err) => {
          console.log('요청 실패')
          console.error(err)
        })
      }
    },
    deleteComment: function ({ getters }, comment) {
      const headers = getters.config
      axios({
        url: `${SERVER.URL}/community/comments/${comment.id}/`,
        method: 'delete',
        headers,
      })
      .then(() => {
        console.log('리뷰 삭제 성공!')
        router.push({ name: 'Community'})
      })
      .catch((err) => {
        console.err(err)
      })
    },

    ChangeReviewComment: function ({ getters, dispatch }, items) {
      const headers = getters.config
      let commentId = this.state.selectedReviewComment.id
      let today = new Date()
      items.updated_at = today
      console.log('ChangeReviewComment')
      console.log(items)
      if (items.content){
        axios({
          url: SERVER.URL + SERVER.ROUTES.community + 'comments/' + commentId + '/',
          method: 'put',
          data: items,
          headers,
        })
        .then(() => {
          dispatch('getReviews')
          console.log('ChangeReviewComment 성공!')
          router.push({ name: 'Community'})
        })
        .catch((err) => {
          console.log('요청 실패')
          console.error(err)
        })
      }
    },

    setReviewComment: function ({ commit }, comment) {    
      commit('SET_REVIEW_COMMENT', comment)
      router.push({ name: 'ReviewCommentChange'})
    },

    fetchVideo: function ({ commit, state }) {
      let USE_YOUTUBE_LINK = state.selectedMovie.youtube_link
      commit('SET_SELECTED_VIDEO', USE_YOUTUBE_LINK)
      const params = {
        key: API_KEY,
        part: 'snippet',
        type: 'video',
      }

      axios({
        // url: API_URL,
        url: USE_YOUTUBE_LINK,
        method: 'get',
        params,
      })
      .then((res) => {
        commit('SET_MOVIEPREVIEW', res.data.items)
      })
      .catch((err) => {
        console.error(err)
      })
    },
    // mbti
    mbtiBegin: function () {
      //let qIdx = 0
      router.push({ name: 'MBTITestQuestions' })
      //this.mbtiGoNext(qIdx)
    },
    mbtiGoNext: function ({ dispatch, }, value) {
      dispatch('mbtiAddAnswer', value)
    },
    mbtiAddAnswer: function ({ commit }, value) {
      // 데이터 접근은 action이 아닌 mutations에서
      commit('SET_SELECT', value)
    },
    // server에서 영화 목록 가져오기 시도
    getMovies: function ({ getters }) {
      const headers = getters.config
      
      axios({
        url: SERVER.URL + SERVER.ROUTES.home,
        method: 'get',
        headers,
      })
      .then((res) => {
        this.state.movies = res.data
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    // 사이트에서 영화 목록 가져오기, 수정 불가
    getMovies2 () {
      let MOVIEURL = 'https://gist.githubusercontent.com/AttractiveMinki/6aa997400effa91e2ac2b4254a7730b3/raw/c9b80c5fb0bdbfaab8253926bae716656914ae33/Newgist.json'
      axios.get(MOVIEURL)
      .then((res) => {
        console.log('통신 성공!')
        console.log(res)
        this.state.movies = res.data
      })
      .catch((err) => {
        console.error(err)
      })
    },
    // movie
    getMovieDetail: function ({ commit, getters }, id) {
      const headers = getters.config
      axios({
        url: SERVER.URL + SERVER.ROUTES.detail + id + '/',
        method: 'get',
        headers,
      })
      .then((res) => {
        console.log('성공, 요청보내쥬')
        commit('GET_MOVIE', res.data)
        router.push({ name: 'MovieDetail'})
      })
      .catch((err) => {
        console.error(err)
      })
    },
    // movies.json
    getMoviesJson: function ({ commit }) {      
      axios.get("../movies.json")
      .then((res) => {
        this.state.movies = res.data
        console.log(res)
        commit('GET_MOVIES_JSON', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },

    getUsername: function ({ commit }) {
      commit('GET_USERNAME')
    },
    getUserId: function ({ commit }) {
      commit('GET_USERID')
    },

    // admin
    goAdmin: function ({ getters }) {
      const headers = getters.config
      
      axios({
        url: SERVER.URL + SERVER.ROUTES.admin,
        method: 'get',
        headers,
      })
      .then((res) => {
        this.state.adminData = res.data
      })
      .catch((err) => {
        console.log(err)
      })
    },

    // admin
    getAdminUserInformations: function ({ commit }) {
      event.preventDefault()

      axios ({
        url: SERVER.URL + SERVER.ROUTES.admin + 'accounts/user/',
        method: 'get',
      })
      .then((res) => {
        commit('GET_ADMINUSERINFORMATIONS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    getAdminUserInformation: function ({ commit }, idx) {
      event.preventDefault()

      axios ({
        url: SERVER.URL + SERVER.ROUTES.admin + 'accounts/user/' + idx + '/',
        method: 'get',
      })
      .then((res) => {
        commit('SET_ADMINUSERINFORMATION', res.data)
        router.push({ name: 'AdminUserDetail'})
      })
      .catch((err) => {
        console.log(err)
      })
    },
    setAdminUserInformation: function ({ getters, commit }, information) {
      event.preventDefault()
      const headers = getters.config

      axios ({
        url: SERVER.URL + SERVER.ROUTES.admin + 'accounts/user/' + information + '/',
        method: 'put',
        data: information,
        headers,
      })
      .then((res) => {
        commit('SET_ADMINUSERINFORMATION', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    // Admin으로 유저 생성
    createAdminUserInformation: function ({ getters, commit }, items) {
      event.preventDefault()
      const headers = getters.config

      axios ({
        url: SERVER.URL + SERVER.ROUTES.signup,
        method: 'post',
        data: items,
        headers,
      })
      .then((res) => {
        commit('SET_ADMINUSERINFORMATION', res.data)
        router.push({ name: 'Home'})
      })
      .catch((err) => {
        console.log(err)
      })
    },
    // Admin으로 유저 삭제
    deleteAdminUserInformation: function ({ getters }, idx) {
      event.preventDefault()
      const headers = getters.config
      console.log(idx)
      axios ({
        // url: SERVER.URL + SERVER.ROUTES.admin + 'accounts/user/'+ idx + '/delete/',
        url: SERVER.URL + SERVER.ROUTES.admin + 'accounts/user/' + idx + '/',
        method: 'delete',
        headers,
      })
      .then(() => {
        console.log('유저 삭제 성공')
        router.push({ name: 'AdminUser'})
      })
      .catch((err) => {
        console.log('유저 삭제 실패ㅜㅜ')
        console.log(err)
      })
    },
    // admin movie list 조회
    getAdminMovieInformations: function ({ commit }) {

      axios ({
        url: SERVER.URL + SERVER.ROUTES.admin + 'movies/movie/',
        method: 'get',
      })
      .then((res) => {
        commit('GET_ADMINMOVIEINFORMATIONS', res.data)
      })
      .catch((err) => {
        console.log('영화정보들 읽어오기 실패ㅜㅜ')
        console.log(err)
      })
    },
    // admin movie 하나 조회
    getAdminMovieInformation: function ({ commit }, idx) {
      axios ({
        url: SERVER.URL + SERVER.ROUTES.admin + 'movies/movie/' + idx + '/',
        method: 'get',
      })
      .then((res) => {
        console.log('영화정보 읽어오기 성공')
        commit('SET_ADMINMOVIEINFORMATION', res.data)
        router.push({ name: 'AdminMovieDetail'})
      })
      .catch((err) => {
        console.log('영화정보 읽어오기 실패ㅜㅜ')
        console.log(err)
      })
    },
    // admin movie 생성
    // movies/movie/에 보내면 400error, movies/movie/add/에 보내면 405error
    // FormData, URLSearchParams, querystring.stringify (part of Node)중 하나의 도움을 받아 data로 넣어주면 된다는 제보가 있음.
    createAdminMovieInformation: function ({ getters, commit }, fields) {
      event.preventDefault()
      const headers = getters.config

      console.log('입력은 다음과 같습니다.')
      console.log(fields)
      console.log('0-----0')
      axios ({
        url: SERVER.URL + SERVER.ROUTES.detail,
        method: 'post',
        data: fields,
        headers,
      })
      .then((res) => {
        console.log('영화 정보 생성 완료')
        commit('SET_ADMINMOVIEINFORMATION', res.data)
        router.push({ name: 'AdminMovie'})
      })
      .catch((err) => {
        console.log('영화 정보 생성 실패ㅜㅜ')
        console.log(err)
      })
    },
    // Admin으로 영화 삭제
    deleteAdminMovieInformation: function ({ getters }, idx) {
      const headers = getters.config

      axios ({
        // url: SERVER.URL + SERVER.ROUTES.admin + 'accounts/user/'+ idx + '/delete/',
        url: SERVER.URL + SERVER.ROUTES.admin + 'movies/movie/' + idx + '/',
        method: 'delete',
        headers,
      })
      .then(() => {
        console.log('영화 삭제 성공')
        router.push({ name: 'AdminMovie'})
      })
      .catch((err) => {
        console.log('영화 삭제 실패ㅜㅜ')
        console.log(err)
      })
    },

    // admin review 단일 정보
    getAdminReviewInformation: function ({ commit, getters }, id) {
      console.log('admin review 단일 정보 가지러가자')
      const headers = getters.config
      axios({
        url: SERVER.URL + SERVER.ROUTES.community + id + '/',
        method: 'get',
        headers,
      })
      .then((res) => {
        console.log('성공, 요청보내쥬')
        commit('GET_REVIEW', res.data)
        router.push({ name: 'AdminReviewDetail'})
      })
      .catch((err) => {
        console.error(err)
      })
    },
    // 사이트에서 영화 목록 가져오기, 수정 불가
    getMoviesFromGist ({ dispatch }) {
      event.preventDefault()
      let MOVIEURL = 'https://gist.githubusercontent.com/AttractiveMinki/61dfd0117ae727828d94156080aa31af/raw/093427193bef460788d7a4923c73d8c73f825043/gistfile1.json'
      axios.get(MOVIEURL)
      .then((res) => {
        console.log('getMoviesFromGist 통신 성공!')
        this.state.movies = res.data
        dispatch('setMoviesToDB', res.data) // 아래 setMoviestoDB로 보내기
      })
      .catch((err) => {
        console.log('getMoviesFromGist 통신 실패ㅠㅠ')
        console.error(err)
      })
    },
    // 사이트에서 가져온 영화 목록을 DB에 저장하기 위해 장고로 보내주기
    setMoviesToDB: function ({ getters, commit }, items) {
      const headers = getters.config
      axios ({
        url: SERVER.URL + SERVER.ROUTES.setdb,
        method: 'post',

        data: items,
        headers,
      })
      .then((res) => {
        console.log('setMoviesToDB 송신 성공!')
        commit('SET_ADMINMOVIEINFORMATION', res.data)
        router.push({ name: 'AdminMovie'})
      })
      .catch((err) => {
        console.log('setMoviesToDB 송신 실패ㅜㅜ')
        console.log(err)
      })
    },

    // admin 영화 정보 수정
    updateAdminMovieInformation: function ({ getters, commit }, items) {
      event.preventDefault()
      const headers = getters.config
      axios ({
        url: SERVER.URL + SERVER.ROUTES.detail + this.state.movieInformationselect.id + '/',
        method: 'put',
        data: items,
        headers,
      })
      .then((res) => {
        console.log('영화 수정 생성 완료')
        commit('SET_ADMINMOVIEINFORMATION', res.data)
        router.push({ name: 'AdminMovie'})
      })
      .catch((err) => {
        console.log('영화 정보 생성 실패ㅜㅜ')
        console.log(err)
      })
    },
    createMovieComment: function ({ getters }, values) {
      event.preventDefault()
      const headers = getters.config
      let reviewId = this.state.selectedMovie.id
      if (values){
        axios({
          url: SERVER.URL + SERVER.ROUTES.detail + reviewId + '/review/',
          method: 'post',
          data: values,
          headers,
        })
        .then(() => {
          console.log('댓글 작성 성공!')
          router.push({ name: 'Home'}) // 고치고 싶다..
        })
        .catch((err) => {
          console.log('요청 실패')
          console.error(err)
        })
      }
    },
    updateMovieComment: function ({ getters }, values) {
      event.preventDefault()
      const headers = getters.config
      let movieId = this.state.selectedMovie.id
      if (values){
        axios({
          url: SERVER.URL + SERVER.ROUTES.detail + movieId + '/review/' + values.id + '/',
          method: 'put',
          data: values,
          headers,
        })
        .then(() => {
          console.log('댓글 수정 성공!')
          router.push({ name: 'Home'}) 
        })
        .catch((err) => {
          console.log('댓글 수정요청 실패')
          console.error(err)
        })
      }
    },
    deleteMovieComment: function ({ getters }, values) {
      event.preventDefault()
      const headers = getters.config
      let movieId = this.state.selectedMovie.id
      if (values){
        axios({
          url: SERVER.URL + SERVER.ROUTES.detail + movieId + '/review/' + values.id + '/',
          // url: `${SERVER.URL}/community/${reviewId}/comments/`,
          method: 'delete',
          headers,
        })
        .then(() => {
          console.log('댓글 삭제 성공!')
          router.push({ name: 'Home'}) 
        })
        .catch((err) => {
          console.log('댓글 삭제요청 실패')
          console.error(err)
        })
      }
    },
    setSelectedMovie: function ({ commit }, review) {
      commit('SET_SELECTED_MOVIE', review)
      router.push({ name: 'MovieDetailReviewChange'})
    },
  },
  modules: {
  },
})