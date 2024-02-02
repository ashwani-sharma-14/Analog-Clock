let hr = document.querySelector('.hour');
let min = document.querySelector('.minute');
let sec = document.querySelector('.second');
let hrHand = document.querySelector('.hourHand');
let minHand = document.querySelector('.minuteHand');
let secHand = document.querySelector('.secondHand');

function clock(){
    let date = new Date();

    let second= date.getSeconds();
    let minute= date.getMinutes();
    let hour = date.getHours();

    let secRotation = 6*second;
    let minRotation = 6*minute;
    let hrRotation = 30*hour+minute/2;

    // hr.innerHTML = hour;
    // min.innerHTML = minute;
    // sec.innerHTML = second;

    secHand.style.transform = `rotate(${secRotation}deg)`;
    minHand.style.transform = `rotate(${minRotation}deg)`;
    hrHand.style.transform = `rotate(${hrRotation}deg)`;
}

setInterval(clock , 1000);