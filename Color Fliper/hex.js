const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.getElementsByClassName('color')[0];

btn.addEventListener('click', function () {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        let temp = getRandomNo(0, hex.length)
        hexColor += hex[temp]
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.innerText = hexColor;
})

function getRandomNo(min, max) {
    let x = Math.random();
    let res = Math.floor(x * (max - min) + min);
    return res;

}