const weatherBtn = document.querySelector(".weatherBtn");
const sun = document.querySelector(".sun");
const cloud = document.querySelector(".cloud");
const rainnig = document.querySelector(".raining");
const thunder = document.querySelector(".thunder");

let weather = "sun";

function onClickWeather(weather) {
  weatherBtn.style.display = "none";
  switch (weather) {
    case "sun":
      sun.style.display = "flex";
      break;
    case "cloud":
      cloud.style.display = "flex";
      break;
    case "rainnig":
      rainnig.style.display = "flex";
      break;
    case "thunder":
      thunder.style.display = "flex";
      break;
  }
}

if (weatherBtn) {
  weatherBtn.addEventListener("click", onClickWeather);
}
