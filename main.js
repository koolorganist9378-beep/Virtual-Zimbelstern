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

let audioContext;
let audioBuffer;
let source;

async function loadAudio() {
    audioContext = new AudioContext();

    const response = await fetch("img/Zimbelstern.wav");
    const arrayBuffer = await response.arrayBuffer();

    audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
}

loadAudio();
