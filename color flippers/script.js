const body = document.getElementsByTagName("body")[0];
// const greenbtn = document.getElementById("green");
// const redBtn = document.getElementById("red");
// const blueBtn = document.getElementById("blue");



function setColor(name) {
    body.style.backgroundColor = name;
}


function randomColor() {
    const red = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}
