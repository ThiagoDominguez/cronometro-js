window.onload = () => {
  h = 0;
  m = 0;
  s = 0;
  mls = 0;
  timeStarted = 0;
  time = document.getElementById("time");
  btnStart = document.getElementById("btn-start");
  btnStop = document.getElementById("btn-stop");
  btnReset = document.getElementById("btn-reset");
  btnSave = document.getElementById("btn-save");
  btnSaveKey = document.getElementById("btn-saveKey");
  btnStart.addEventListener("click", start);
  btnStop.addEventListener("click", stop);
  btnReset.addEventListener("click", reset);
  btnSave.addEventListener("click", save);
  // btnSaveKey.addEventListener("click", saveKey);
};
let times = [];
function write() {
  let ht, mt, st, mlst;
  mls++;

  if (mls > 99) {
    s++;
    mls = 0;
  }
  if (s > 59) {
    m++;
    s = 0;
  }
  if (m > 59) {
    h++;
    m = 0;
  }
  if (h > 24) h = 0;

  mlst = ("0" + mls).slice(-2);
  st = ("0" + s).slice(-2);
  mt = ("0" + m).slice(-2);
  ht = ("0" + h).slice(-2);

  time.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
}

function start() {
  write();
  timeStarted = setInterval(write, 10);
  btnStart.removeEventListener("click", start);
}

function stop() {
  clearInterval(timeStarted);
  btnStart.addEventListener("click", start);
}

function reset() {
  clearInterval(timeStarted);
  time.innerHTML = "00:00:00.00";
  h = 0;
  m = 0;
  s = 0;
  mls = 0;
  btnStart.addEventListener("click", start);
}
function save(i) {
  spanTime = `
  Auto:${i}
  Tiempo:
  <li>${time.innerHTML}</li>`;
  times.push(spanTime);
  spanSaved = document.getElementById("saved").innerHTML = times;
}
function presionarTecla(e) {
  const tecla = e.code;
  // if (tecla === "Digit1") {
  //   return save(1);
  // }

  if (tecla === "Digit1" || tecla === "Numpad1") {
    return save(1);
  } else if (tecla === "Digit2" || tecla === "Numpad2") {
    return save(2);
  } else if (tecla === "Digit3" || tecla === "Numpad3") {
    return save(3);
  } else if (tecla === "Digit4" || tecla === "Numpad4") {
    return save(4);
  } else if (tecla === "Digit5" || tecla === "Numpad5") {
    return save(5);
  } else if (tecla === "Digit6" || tecla === "Numpad6") {
    return save(6);
  } else if (tecla === "Digit7" || tecla === "Numpad7") {
    return save(7);
  } else if (tecla === "Digit8" || tecla === "Numpad8") {
    return save(8);
  } else if (tecla === "Digit9" || tecla === "Numpad9") {
    return save(9);
  } else if (tecla === "Digit0" || tecla === "Numpad0") {
    return save(10);
  }
}

window.onkeydown = presionarTecla;
