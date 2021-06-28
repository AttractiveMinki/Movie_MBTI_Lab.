// 'ISTJ', 0
// 'ISFJ', 1
// 'INFJ', 2
// 'INTJ', 3
// 'ISTP', 4
// 'ISFP', 5
// 'INFP', 6
// 'INTP', 7
// 'ESTP', 8
// 'ESFP', 9
// 'ENFP', 10
// 'ENTP', 11
// 'ESTJ', 12
// 'ESFJ', 13
// 'ENFJ', 14
// 'ENTJ', 15

const qnaList = [
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
]

const infoList = [
  {
    name: '청렴결백한 논리주의자, 세상의 소금형 <ISTJ>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<ISFJ>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<INFJ>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<INTJ>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<ISTP>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<ISFP>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<INFP>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<INTP>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<ESTP>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<ESFP>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<ENFP>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<ENTP>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<ESTJ>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<ESFJ>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<ENFJ>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
  {
    name: '<ENTJ>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus dicta unde libero. Doloremque iusto ducimus laudantium obcaecati culpa, sed libero debitis laboriosam? Quia doloribus iusto harum autem ex animi!'
  },
]
