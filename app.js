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

function resetProgressBar(id){
    const target = document.querySelector(id);
    target.innerHTML="";
}

const foodBtn = document.getElementById('foodBtn');
const mouth = document.getElementById('mouth');

foodBtn.addEventListener('click', function (event) {
    resetProgressBar('#hunger');
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

function deadtama() {
    console.log('I ded');
    //add animation here
}


setInterval(function(){ 
    updateProgressBar('#hunger');
    updateProgressBar('#exhaustion');
    updateProgressBar('#boredom');
}, 1000);