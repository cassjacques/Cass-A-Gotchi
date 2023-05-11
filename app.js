function nameTheGhost() {
    var n = document.getElementById("name").value;
    document.getElementById("named").innerHTML = n;
    document.getElementById("name-container").style.display = "none";
    document.getElementById("named").style.display = "block";
};

function updateProgressBar(id) {
    const target = document.querySelector(id);
    const increments = target.querySelectorAll('li');

    if (increments && increments.length < 10) {
        const newIncr = document.createElement('li');
        target.appendChild(newIncr);
    }
    else {
        deadtama();
    }
}

function resetProgressBar(id) {
    const target = document.querySelector(id);
    target.innerHTML = "";
}

//Modified code found on jsfiddle
var h1 = document.getElementsByTagName('h1')[0],
    seconds = 0, minutes = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    h1.textContent = "Age: " + ((minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") * 5);

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}
timer();

stop.deadTama = function () {
    clearTimeout(t);
}

const foodBtn = document.getElementById('foodBtn');
const mouth = document.getElementById('mouth');

foodBtn.addEventListener('click', function (event) {

    resetProgressBar('#hunger');
    mouth.classList.remove('foodAnimation');
    mouth.classList.add('foodAnimation');
    setInterval(function () {
        mouth.classList.remove('animate');
    }, 1000);
});

const restBtn = document.getElementById('restBtn');
const body = document.getElementsByClassName('light');

restBtn.addEventListener('click', function lightsOut(event) {
    resetProgressBar('#exhaustion');
    let element = document.body;
    element.classList.toggle("dark");
});

const playBtn = document.getElementById('playBtn');
const ball = document.getElementById('ball');

playBtn.addEventListener('click', function (event) {
    resetProgressBar('#boredom');
    ball.classList.remove('playAnimation');
    ball.classList.add('playAnimation');
    setInterval(function () {
        ball.classList.remove('animate');
    }, 1000)
});


mouth.addEventListener('animationend', function () {
    mouth.classList.remove('foodAnimation');
});

ball.addEventListener('animationend', function () {
    ball.classList.remove('playAnimation');
});

function deadtama() {
    alert('Game Over');
}


setInterval(function () {
    updateProgressBar('#hunger');
    updateProgressBar('#exhaustion');
    updateProgressBar('#boredom');
}, 10000);