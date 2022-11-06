const greatQoutes = [
  { phrase: "삶이 있는 한 희망은 있다.", speaker: "키케로" },
  { phrase: "산다는 것, 그것은 치열한 전투이다.", speaker: "로망로랑" },
  {
    phrase: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    speaker: "사무엘 존슨",
  },
  {
    phrase: "언제나 현재에 집중할수 있다면 행복할것이다.",
    speaker: "파울로 코엘료",
  },
  {
    phrase:
      "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
    speaker: "찰리 채플린",
  },
  {
    phrase: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    speaker: "엘버트 허버드",
  },
  { phrase: "신은 용기있는자를 결코 버리지 않는다.", speaker: "켄러" },
  {
    phrase:
      "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    speaker: "L.론허바드",
  },
  { phrase: "계단을 밟아야 계단 위에 올라설수 있다.", speaker: "from. 터키" },
  { phrase: "행복은 습관이다,그것을 몸에 지니라", speaker: "허버드" },
  { phrase: "1퍼센트의 가능성, 그것이 나의 길이다.", speaker: "나폴레옹" },
  {
    phrase: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
    speaker: "괴테",
  },
  {
    phrase: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
    speaker: "이소룡",
  },
  {
    phrase:
      "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리 자신에 깜짝 놀랄 것이다.",
    speaker: "에디슨",
  },
  { phrase: "문제점을 찾지 말고 해결책을 찾으라.", speaker: "헨리 포드" },
  { phrase: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다.", speaker: "볼드윈" },
  {
    phrase: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
    speaker: "헨리 포드",
  },
  {
    phrase: "눈물과 더불어 빵을 먹어 보지 않은 자는 인생의 참다운 맛을 모른다.",
    speaker: "괴테",
  },
  {
    phrase:
      "이룰수 없는 꿈을 꾸고 이길수 없는 적과 싸우며, 이룰수 없는 사랑을 하고 견딜 수 없는 고통을 견디고, 잡을수 없는 저 하늘의 별도 잡자.",
    speaker: "세르반테스",
  },
];

const qoutePhrase = document.querySelector("#qoute");
const qouteSpeaker = document.querySelector("#speaker");

const randomNumber = Math.floor(Math.random() * greatQoutes.length);
console.log(greatQoutes.length);
qoutePhrase.innerText = greatQoutes[randomNumber].phrase;
qouteSpeaker.innerText = greatQoutes[randomNumber].speaker;
