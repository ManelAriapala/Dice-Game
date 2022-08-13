let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImageSource = "images/dice" + randomNumber1 + ".png";
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "❤️ Player 1 won";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "❤️ Player 2 won";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}