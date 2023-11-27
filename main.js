let btnplayer = document.querySelector(".btnplayer");
let count1 = document.querySelector(".countainer");
let count2 = document.querySelector(".countainer2");
let btnchoices = document.querySelectorAll(".choicecard");
let squares = document.querySelectorAll(".gameboard div");
let p1score =document.querySelector(".player1score");
let p2score = document.querySelector(".plyaer2score");
let tiescore = document.querySelector(".tiescore");
let turn = 0;
let board;
console.log(board)
btnplayer.addEventListener("click",()=>{
count1.style.display = "none";
count2.style.display = "flex";
startGame();
});
    function toggleSelection(element) {
        const x = document.getElementById('x');
        const o = document.getElementById('o');
        const oImg = document.querySelector("#o img");
        const xImg = document.querySelector("#x img");

        if (element.id === 'x') {
            x.classList.add('selected-character');
            o.classList.remove('selected-character');
            xImg.src = xImg.src.replace("silver", "dark-navy");
            oImg.src = oImg.src.replace("dark-navy", "silver");
            game.p1mark="x"
            game.p2mark="o"
        } else {
            x.classList.remove('selected-character');
            o.classList.add('selected-character');
            xImg.src = xImg.src.replace("dark-navy", "silver");
            oImg.src = oImg.src.replace("silver", "dark-navy");
            game.p1mark = "o";
            game.p2mark = "x";
        }
    }
squares.forEach(square =>{
    square.addEventListener("click",handlemark, { once : true })

})
function handlemark (e) {
const square = e.target;
square.style.display = "flex"
square.style.justifyContent = "center";
square.style.alignItems = "center"
const image = square.querySelector('img');
const turnimg = document.querySelector(".turn img");
    if(turn === 1){
        image.src = image.src.replace("icon-","icon-x");
        turnimg.src = turnimg.src.replace("icon-x","icon-o")}
        else if(turn === 0){
            image.src = image.src.replace("icon-","icon-o");
            turnimg.src = turnimg.src.replace("icon-o","icon-x")
        }
        swapturn();
    }
    function swapturn() {
        turn = turn === 1 ? 0 : 1;
      }
      

         
function createBoard () {
    board = [
        ["","",""],
        ["","",""],
        ["","",""]

    ];
}
function startGame () {
createBoard();
p1score.textContent ="0"
p2score.textContent ="0"
tiescore.textContent ="0"

}








