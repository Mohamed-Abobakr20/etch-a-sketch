"use strict";
const draw = document.querySelector(".draw");
const board = document.querySelector(".board");
const gridNumber = document.querySelector("#gridNumber");
let squares = document.querySelectorAll(".gridItem");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const gridLines = document.querySelector(".gridLines");
let colorModeType;

// Color Mode variables
const colorPicker = document.querySelector("#bgColor");
let bgColor = colorPicker.value;
const colorModeBtn = document.querySelector(".colorMode");
// Random color Mode variables
const randomColorBtn = document.querySelector(".randomColor");
let randomColor;





// Functions
// ----------------------------------------------------------
function createSquares(num) {
    for (let i = 0; i < (num * num); i++) {
        const square = document.createElement("div");
        square.classList.add("gridItem");
        board.appendChild(square);
    }
    board.style.display = "grid";
    board.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    squares = document.querySelectorAll(".gridItem");
}


function init(num) {
    createSquares(num);
    colorModeBtn.classList.add("active");
    randomColorBtn.classList.remove("active");
    eraser.classList.remove("active");
    colorModeType = "Mode"

    for (let item of squares) {
        item.addEventListener("click", () => {
            if (colorModeType === "Mode") {
                item.style.backgroundColor = bgColor;
            } else if (colorModeType === "Random") {
                randomColor = Math.floor(Math.random() * 16777215).toString(16);
                item.style.backgroundColor = "#" + randomColor;
            } else {
                item.style.backgroundColor = "white";
            }
        })
    }
}


init(16);


// Event Listeners
// ----------------------------------------------------------
colorPicker.addEventListener("input", () => {
    bgColor = colorPicker.value;

})


draw.addEventListener("click", () => {
    if (gridNumber.value > 0) {
        board.innerHTML = "";
        randomColorBtn.classList.remove("active");
        init(gridNumber.value);
    }
})


colorModeBtn.addEventListener("click", () => {
    colorModeBtn.classList.add("active");
    randomColorBtn.classList.remove("active");
    eraser.classList.remove("active");
    colorModeType = "Mode";

})


randomColorBtn.addEventListener("click", () => {
    colorModeBtn.classList.remove("active");
    eraser.classList.remove("active");
    randomColorBtn.classList.add("active");
    colorModeType = "Random";
})


eraser.addEventListener("click", () => {
    colorModeBtn.classList.remove("active");
    randomColorBtn.classList.remove("active");
    eraser.classList.add("active");
    colorModeType = "";
})


clear.addEventListener("click", () => {
    for (let item of squares) {
        item.style.backgroundColor = "white";
    }
})

gridLines.addEventListener("click", () => {
    board.classList.toggle("board-border");
    for (let item of squares) {
        item.classList.toggle("gridItem")
    }
})