var heading = document.getElementById('timer'),
      miliseconds = 0,
      seconds = 0,
      minutes = 0,
      timer;

function stopWatch() {
      miliseconds++
      if (miliseconds >= 60) {
            miliseconds = 0
            seconds++
      } else if (seconds >= 60) {
            seconds = 0
            minutes++
      }

      heading.innerHTML = (minutes ? (minutes > 9 ? minutes : '0' + minutes) : "00") + ':' + (seconds ? (seconds > 9 ? seconds : '0' + seconds) : "00") + ':' + (miliseconds ? (miliseconds > 9 ? miliseconds : '0' + miliseconds) : "00")
      timerStart()
}

function timerStart() {
      // 20 miliseconds
      timer = setTimeout(stopWatch, 20)
}
timerStart()

function timerStop() {
      clearTimeout(timer)
}

function clearTimer() {
      clearTimeout(timer)
      heading.innerHTML = '00:00:00'
      miliseconds = 0
      seconds = 0
}

// var age = 12;
// // if (age > 10) {

// // } else {

// // }
// var message = (age > 10) ? "Exist" : "nh mila"