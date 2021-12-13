let min = document.getElementById("min");
let sec = document.getElementById("sec");
let dec = document.getElementById("ds");
let hourid = document.getElementById("hr");
let minute_timer = 0;
let second_timer = 0;
let decaSecond_timer = 0;
let hour_timer = 0;

let start = document.getElementById("start_btn");
start.addEventListener("click", function () {
  let minInterval = setInterval(minute, 60000);
  let secInterval = setInterval(second, 1000);
  let decaInterval = setInterval(decasecond, 1000 / 60);
  let hourInterval = setInterval(hour, 3600000);

  let stopbtn = document.getElementById("stop_btn");
  stopbtn.addEventListener("click", function () {
    clearInterval(minInterval);
    clearInterval(secInterval);
    clearInterval(hourInterval);
    clearInterval(decaInterval);
    minute_timer = 0;
    second_timer = 0;
    hour_timer = 0;
    decaSecond_timer = 0;
    min.innerText = minute_timer;
    sec.innerText = second_timer;
    dec.innerText = second_timer;
    hourid.innerText = hour_timer;
  });
  let pausebtn = document.getElementById("pause_btn");
  pausebtn.addEventListener("click", function () {
    clearInterval(minInterval);
    clearInterval(secInterval);
    clearInterval(decaInterval);
    clearInterval(hourInterval);
  });
  function minute() {
    minute_timer++;
    min.innerText = minute_timer + " ";
    if (minute_timer == 60) {
      minute_timer = 0;
      min.innerText = minute_timer;
    }
  }
  function second() {
    second_timer++;
    sec.innerText = second_timer + " ";
    if (second_timer == 60) {
      second_timer = 0;
      sec.innerText = second_timer;
    }
  }
  function decasecond() {
    decaSecond_timer++;
    dec.innerText = decaSecond_timer + " ";
    if (decaSecond_timer == 60) {
      decaSecond_timer = 0;
      dec.innerText = second_timer;
    }
  }
  function hour() {
    hour_timer++;
    hourid.innerText = hour_timer + " ";
    if (hour_timer == 60) {
      hour_timer = 0;
      hourid.innerText = hour_timer;
    }
  }
});
