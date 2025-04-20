/*
1D array
let arr = ["apple", "banana", "titchi"]; 

2D Array
let arr2 = [ ["apple", "banana"], ["potato", "tomato"], ["Pants", "shirts"] ];

*/
let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#resetBtn");

let newGameBtn = document.querySelector("#newGameBtn");

let msgContainer = document.querySelector(".msgContainer");

let msgPara = document.querySelector("#msg")

let turnO = true;  // playerX, playerO

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],

    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],

    [3, 4, 5],
    [6, 7, 8]
];


const resetGame = () => {
    let turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const boxClickedHandler = () => {
    console.log("box was clicked");
    // box.innerText = "X";
    if (turnO === true) { // playerO turn
        box.innerText = "O";
        turnO = false;
    }
    else { // playerX turn
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;

    checkWinnerHandler();
}

const disabledAllBtnBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledAllBtnBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinnerHandler = (winner) => {
    msg.innerText = `Congratulations ! ${winner} won the game.`
    msgContainer.classList.remove("hide");
    disabledAllBtnBoxes();
}

const checkWinnerHandler = () => {
    for (let pattern of winPattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
            boxes[pattern[0]].innerText, // position 1
            boxes[pattern[1]].innerText, // position 2
            boxes[pattern[2]].innerText // position 3
        );
        let pos1Val = boxes[pattern[0]].innerText; // position 1
        let pos2Val = boxes[pattern[1]].innerText; // position 2
        let pos3Val = boxes[pattern[2]].innerText; // position 3

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinnerHandler(pos1Val);

            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", boxClickedHandler);
})

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);