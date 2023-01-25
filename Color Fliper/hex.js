const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.getElementById('color');

btn.addEventListener('click', function () {
    let randomNo = getRandomNo(0, hex.length - 1);
    document.body.style.backgroundColor = hex[randomNo];
    color.innerHTML = hex[randomNo];
})

function getRandomNo(start, end) {
    let x = Math.random();
    let res = Math.floor(x * (end - start) + start + 1);
    return res;
}