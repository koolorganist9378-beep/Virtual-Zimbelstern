let zimbel;
let isPlaying = false;

function toggleZimbelstern() {
  const btn = document.getElementById("zimbelBtn");

  if (!isPlaying) {
    zimbel = new Audio("img/Zimbelstern.wav");
    zimbel.loop = true;
    zimbel.play();

    isPlaying = true;
    btn.textContent = "ON";
    btn.classList.add("active");

  } else {
    zimbel.pause();
    zimbel.currentTime = 0;

    isPlaying = false;
    btn.textContent = "OFF";
    btn.classList.remove("active");
  }
}
