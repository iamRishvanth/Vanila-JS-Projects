const colors = ["red", "green", "blue", "yellow"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


//Developed for Consecutive Random No. Should not Same
//Compare 'newRandomNo' with 'randomNo'

let randomNo = 0;

btn.addEventListener('click', function () {
    let newRandomNo = getRandomNo(0, colors.length);
    while (randomNo === newRandomNo) {
        newRandomNo = getRandomNo(0, colors.length);
    }
    randomNo = newRandomNo;
    console.log(randomNo);
    document.body.style.backgroundColor = colors[randomNo];
    color.innerText = colors[randomNo];
})

function getRandomNo(min, max) {
    let x = Math.random();
    let res = Math.floor(x * (max - min) + min);
    return res;
}