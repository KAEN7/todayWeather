const weatherBtn = document.querySelector(".weatherBtn");
const listBox = document.querySelector(".listBox");
const cloudy = document.querySelector(".cloudy");
const raning = document.querySelector(".raning");
const snowly = document.querySelector(".snowly");
const thunder = document.querySelector(".thunder");
const sunny = document.querySelector(".sunny");

// 서버에서 받아올 날씨
function catchServer() {
  let weater = "cloudy";
  onClickWeather(weater);
}

function onClickWeather(x) {
  weatherBtn.style.display = "none";
  listBox.style.display = "flex";
  console.log("함수는 동작됨", typeof x, x);
  switch (x) {
    case "sunny":
      sunny.style.display = "flex";
      break;
    case "cloudy":
      console.log(x);
      cloudy.style.display = "flex";
      break;
    case "snowly":
      snowly.style.display = "flex";
      break;
    case "thunder":
      thunder.style.display = "flex";
      break;
    case "raning":
      raning.style.display = "flex";
      break;
  }
}

if (weatherBtn) {
  weatherBtn.addEventListener("click", catchServer);
}
