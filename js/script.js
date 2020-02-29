//Learn More about Recording
let button = document.querySelector("#need");
let list = document.querySelector("#list");

list.style.display = "none";

button.onclick = () => {
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  };
};

//Bass Guitar Quiz
let correct = document.querySelector("#boxer");

correct.onclick = () => {
  correct.style.background = "#FFAA3F";
};

//Synthesizer Photo Switch
let daniel = document.querySelector("#daniel");
let synth = document.querySelector("#synth");

synth.style.display = "none";

daniel.onmouseover = () => {
  if (synth.style.display === "none") {
    daniel.style.display = "none";
    synth.style.display = "block";
  } else {
    synth.style.display = "none";
//Can't revert image back yet
  }
};

daniel.onmouseleave = () => {
  daniel.style.display = "block";
  synth.style.display = "none";
};
