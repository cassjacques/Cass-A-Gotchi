const foodBtn = document.getElementById('foodBtn');
const mouth = document.getElementById('mouth');

foodBtn.addEventListener('click', function (event) {
    mouth.classList.remove('foodAnimation');
    mouth.classList.add('foodAnimation');
    setTimeout(function () {
        mouth.classList.remove('animate');
    }, 1000);
});

const restBtn = document.getElementById('restBtn');
const body = document.getElementsByClassName('light');

restBtn.addEventListener('click', function lightsOut(event) {
    let element = document.body;
    element.classList.toggle("dark");
});

const playBtn = document.getElementById('playBtn');
const ball = document.getElementById('ball');

playBtn.addEventListener('click', function (event) {
    ball.classList.remove('playAnimation');
    ball.classList.add('playAnimation');
    setTimeout(function () {
        ball.classList.remove('animate');
    }, 1000)
});


mouth.addEventListener('animationend', function () {
    mouth.classList.remove('foodAnimation');
});

ball.addEventListener('animationend', function () {
    ball.classList.remove('playAnimation');
}); 

function createProgressbar(id, duration, callback) {
    // We select the div that we want to turn into a progressbar
    var progressbar = document.getElementById(id);
    progressbar.className = 'progressbar';
  
    // We create the div that changes width to show progress
    var progressbarinner = document.createElement('div');
    progressbarinner.className = 'inner';
  
    // Now we set the animation parameters
    progressbarinner.style.animationDuration = duration;
  
    // Eventually couple a callback
    if (typeof(callback) === 'function') {
      progressbarinner.addEventListener('animationend', callback);
    }
  
    // Append the progressbar to the main progressbardiv
    progressbar.appendChild(progressbarinner);
  
    // When everything is set up we start the animation
    progressbarinner.style.animationPlayState = 'running';
  }
  
  addEventListener('load', function() {
    createProgressbar('hunger', '40s');
    createProgressbar('exhaustion', '30s');
    createProgressbar('boredom', '20s')
  });