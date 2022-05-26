//div 영역 불러오기
const mainBanner = document.querySelector(".main-banner");
const imgBanner = document.querySelector(".img-banner");
const bgInner = document.querySelectorAll(".bg-inner");
const listBar = document.querySelector(".list-bar");
const list = listBar.querySelectorAll("li");
const ACTIVE_NAME = "active";
let currentIndex = 0;
bgInner.forEach((inner) => {
  inner.style.width = `${mainBanner.clientWidth}px`;
}); //bg-inner의 width를 모두 main-banner width로 만들기.

imgBanner.style.width = `${mainBanner.clientWidth * bgInner.length}px`;

//button 불러오기
const backBtn = document.querySelector(".backBtn");
const goBtn = document.querySelector(".goBtn");

backBtn.addEventListener("click", () => {
  currentIndex--;
  currentIndex = currentIndex < 0 ? 0 : currentIndex;
  //index값이 0보다 작은경우 0으로 바꾼다.
  imgBanner.style.marginLeft = `-${mainBanner.clientWidth * currentIndex}px`;
  //index 만큼 마진을 주어 옆으로 밀기.
  list[currentIndex].classList.add(ACTIVE_NAME); //현재 인덱스에 클래스 추가
  list[currentIndex + 1].classList.remove(ACTIVE_NAME); // 뒤로갔으니 현재 인덱스 다음 칸에 엑티브된 클래스 이름 제거
  clearInterval(interval);
  interval = getInterval();
});

goBtn.addEventListener("click", () => {
  currentIndex++;
  currentIndex =
    currentIndex >= bgInner.length ? bgInner.length - 1 : currentIndex;
  imgBanner.style.marginLeft = `-${mainBanner.clientWidth * currentIndex}px`;
  list[currentIndex].classList.add(ACTIVE_NAME);
  list[currentIndex - 1].classList.remove(ACTIVE_NAME);
  clearInterval(interval);
  interval = getInterval();
});

//list-bar active 부분 구현
list.forEach((index) => {
  index.addEventListener("click", () => {
    for (let i = 0; i < list.length; i++) {
      if (index.className !== "list active") {
        index.classList.add(ACTIVE_NAME);
        list[i].classList.remove(ACTIVE_NAME);
        if (index.className === "list active") {
          currentIndex = i - 1;
        }
        imgBanner.style.marginLeft = `-${
          mainBanner.clientWidth * currentIndex
        }px`;
        clearInterval(interval);
        interval = getInterval();
      } else if (index.className !== "list") {
        index.classList.add(ACTIVE_NAME);
        list[i].classList.remove(ACTIVE_NAME);
        if (index.className === "list") {
          currentIndex = i;
        }
        imgBanner.style.marginLeft = `-${
          mainBanner.clientWidth * currentIndex
        }px`;
        clearInterval(interval);
        interval = getInterval();
      }
    }
  });
});

//일정시간마다 자동으로 슬라이드
function getInterval() {
  return setInterval(function () {
    currentIndex++;
    currentIndex = currentIndex >= bgInner.length ? 0 : currentIndex;
    imgBanner.style.marginLeft = `-${mainBanner.clientWidth * currentIndex}px`;
    console.log(currentIndex);
    if (currentIndex != list.length - 1) {
      list[list.length - 1].classList.remove(ACTIVE_NAME);
    }
    list[currentIndex].classList.add(ACTIVE_NAME);
    list[currentIndex - 1].classList.remove(ACTIVE_NAME);
  }, 4000);
}

let interval = getInterval();
