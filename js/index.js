function time() {
  let time = new Date();
  let sec = time.getSeconds();
  let secs = document.querySelector(".secs");
  secs.innerHTML = sec;

  let min = time.getMinutes();
  let mins = document.querySelector(".mins");
  mins.innerHTML = min;

  let hr = time.getHours();
  let hrs = document.querySelector(".hr");
  hrs.innerHTML = hr;

  if (sec < 10) {
    secs.innerHTML = "0" + sec;
  }

  if (min < 10) {
    mins.innerHTML = "0" + min;
  }

  if (hr < 10) {
    hrs.innerHTML = "0" + hr;
  }
}

setInterval(time, 1000);
