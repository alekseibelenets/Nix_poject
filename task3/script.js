let one = document.getElementById('one');
let two = document.getElementById('two');
let count = document.getElementById('count')
let button = document.getElementById('push');
let score = document.getElementById('score');


function randomInteger() {
    const min = one.value;
    const max = two.value;
    const countNum = count.value;
    const arrayOfNum =[];
    if (min < 0 || max < 0) {
        alert("отрицательные значения не принимаем");
        return;
    } else if (max < min) {
        alert("min не может быть больше  max ");
        return;
    }
    for (let i = 0; i < countNum; i++) {
        let rand = Math.random() * (max - min) + min;
        arrayOfNum.push(Math.ceil(rand).toString());
    }
    score.innerHTML = arrayOfNum.join(',');
}

button.addEventListener("click", randomInteger);


