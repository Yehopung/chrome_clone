const images = ["0.jpg", "1.jpg", "2.jpg"];

// 랜덤으로 이미지 선택
const chosenImage = images[Math.floor(Math.random() * images.length)];

// img 태그 생성 후 src 속성 설정
const bgImage = document.createElement("img");
bgImage.src = `images/${chosenImage}`;

// body 태그에 img 태그 추가하기
document.body.appendChild(bgImage);
