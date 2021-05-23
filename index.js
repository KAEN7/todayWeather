const weatherBtn = document.querySelector(".weatherBtn");
const listBox = document.querySelector(".listBox");
const cloudy = document.querySelector(".cloudy");
const raning = document.querySelector(".raning");
const snowly = document.querySelector(".snowly");
const thunder = document.querySelector(".thunder");
const sunny = document.querySelector(".sunny");

// 서버에서 받아올 날씨
let x = "cloudy";

function onClickWeather(x) {
  console.log("cloudy");
  weatherBtn.style.display = "none";
  listBox.style.display = "flex";
  switch (x) {
    case "sunny":
      sunny.style.display = "flex";
      break;
    case "cloud":
      cloud.style.display = "flex";
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
  weatherBtn.addEventListener("click", onClickWeather);
}
