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

let times2 = [];
let times3 = [];
let times4 = [];
let times5 = [];
let times6 = [];
let times7 = [];
let times8 = [];
let times9 = [];
let times10 = [];
// TODO: crear boton para agregar mas autos
// TODO:  agregar numero de vueltas
function save(e) {
  spanTime = `[${time.innerHTML}]`;
  const tecla = e.code;
  if (tecla === "Digit1" || tecla === "Numpad1") {
    times.push(spanTime);

    return (document.getElementById("vtl1").innerHTML = times);
  } else if (tecla === "Digit2" || tecla === "Numpad2") {
    times2.push(spanTime);

    return (document.getElementById("vtl2").innerHTML = times2);
  } else if (tecla === "Digit3" || tecla === "Numpad3") {
    times3.push(spanTime);
    return (document.getElementById("vtl3").innerHTML = times3);
  } else if (tecla === "Digit4" || tecla === "Numpad4") {
    times4.push(spanTime);
    return (document.getElementById("vtl4").innerHTML = times4);
  } else if (tecla === "Digit5" || tecla === "Numpad5") {
    times5.push(spanTime);
    return (document.getElementById("vtl5").innerHTML = times5);
  } else if (tecla === "Digit6" || tecla === "Numpad6") {
    times6.push(spanTime);
    return (document.getElementById("vtl6").innerHTML = times6);
  } else if (tecla === "Digit7" || tecla === "Numpad7") {
    times7.push(spanTime);
    return (document.getElementById("vtl7").innerHTML = times7);
  } else if (tecla === "Digit8" || tecla === "Numpad8") {
    times8.push(spanTime);
    return (document.getElementById("vtl8").innerHTML = times8);
  } else if (tecla === "Digit9" || tecla === "Numpad9") {
    times9.push(spanTime);
    return (document.getElementById("vtl9").innerHTML = times9);
  } else if (tecla === "Digit0" || tecla === "Numpad0") {
    times10.push(spanTime);
    return (document.getElementById("vtl10").innerHTML = times10);
  }
}

// Funcion Funcionando
// function presionarTecla(e) {
//   const tecla = e.code;
//   if (tecla === "Digit1" || tecla === "Numpad1") {
//     return save(1);
//   } else if (tecla === "Digit2" || tecla === "Numpad2") {
//     return save(2);
//   } else if (tecla === "Digit3" || tecla === "Numpad3") {
//     return save(3);
//   } else if (tecla === "Digit4" || tecla === "Numpad4") {
//     return save(4);
//   } else if (tecla === "Digit5" || tecla === "Numpad5") {
//     return save(5);
//   } else if (tecla === "Digit6" || tecla === "Numpad6") {
//     return save(6);
//   } else if (tecla === "Digit7" || tecla === "Numpad7") {
//     return save(7);
//   } else if (tecla === "Digit8" || tecla === "Numpad8") {
//     return save(8);
//   } else if (tecla === "Digit9" || tecla === "Numpad9") {
//     return save(9);
//   } else if (tecla === "Digit0" || tecla === "Numpad0") {
//     return save(10);
//   }
// }

window.onkeydown = save;
