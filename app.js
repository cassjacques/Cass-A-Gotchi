const foodBtn = document.getElementById('foodBtn');
const mouth = document.getElementById('mouth');

foodBtn.addEventListener('click', function (event) {
    mouth.classList.remove('foodAnimation');
    mouth.classList.add('foodAnimation');
    setTimeout(function () {
        mouth.classList.remove('animate');
    }, 1000)
});







const restBtn = document.getElementById('restBtn');
const body = document.getElementsByClassName('light');

restBtn.addEventListener('click', function lightsOut(event) {
    let element = document.body;
    element.classList.toggle("dark");
});




const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', function (event) {

});


mouth.addEventListener('animationend', function lightsOut() {
    mouth.classList.remove('foodAnimation');
});