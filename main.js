

(function() {


const Gameboard = {
    gameboard: ["X","O","X","X","O","X","X","O","X"],
    players: [],
    moves: 1,
    winNumbers:  [
            [0,4,8],[0,3,6],[0,1,2],[2,4,6],[2,5,8],[3,4,5],[6,7,8],[1,4,7]
    ],
    init: function(){
        this.domElements();
        this.displaySign();
    },
    domElements: function(){
        this.boxes = document.querySelectorAll(".box");
        this.currentDiv;
    },
    displaySign: function(){
        this.boxes.forEach(function(box){
            box.addEventListener("click", () =>
                box.innerHTML = "X"
            )
        })
    },
}
const Player = (name, sign) =>{
    return{name, sign}
}
const player1 = Player("maks", "X")
const player2 = Player("king", "O")
Gameboard.players.push(player1, player2)
console.log(Gameboard.players)
// let moves = 1;
// let currentDiv;
// let INDEX;
// const winNumbers = [
//     [0,4,8],
//     [0,3,6],
//     [0,1,2],
//     [2,4,6],
//     [2,5,8],
//     [3,4,5],
//     [6,7,8],
//     [1,4,7]
// ]
// const indexesOfx =[];
// const indexesOfo = [];
// const boxes = document.querySelectorAll(".box");
// const paraMove = document.querySelector("p");
// const Player = (name, sign) =>{
//     const arrowFunction = ()=>{
//         if(currentDiv.dataset.sign == ""){ 
//             console.log("siema")
//             if(moves % 2 == 0){
//                 this.sign = "O"
//                 paraMove.textContent = "X's move"
//                 indexesOfo.push(INDEX);
//                 for(let i = 0; i<winNumbers.length; i++){
//                     if(winNumbers[i].every(el => indexesOfo.includes(el)) === true ){
//                         paraMove.textContent = "O's win the game";
//                         currentDiv.innerHTML = this.sign;
//                     }
//                 }
                
//             }else if(moves % 2 != 0){
//                 this.sign = "X"
//                 paraMove.textContent = "O's move"
//                 indexesOfx.push(INDEX);
//                 for(let i = 0; i<winNumbers.length; i++){
//                     if(winNumbers[i].every(el => indexesOfx.includes(el)) === true ){
//                         paraMove.textContent = "X's win the game";
//                         currentDiv.innerHTML = this.sign;   
//                     }
//                 }
//             }
//             if(moves == 9){
//                 paraMove.textContent = "TIE"
//             }
//                 currentDiv.innerHTML = this.sign;
//                 currentDiv.dataset.sign = this.sign;
//                 moves++;
            
//         }
//         else if(moves == 8){
//             paraMove.textContent = "TIE";
//         }
//         return undefined;
//     }
//     let displaySign = () =>{
//         boxes.forEach((div, index)=>{
//             div.addEventListener("click", (e)=>{
//                 currentDiv = div;
//                 INDEX = index;
//                 arrowFunction()
//             })
//         })
//     }
//     return {name, sign, displaySign}
// }
// const xPlayer = Player("Maks", "X");
// xPlayer.displaySign()
})()

// function CheckIfWin(){
//     for(let i = 0; i<winNumbers.length; i++){
//             if(indexesOfx.every(el => winNumbers[i].includes(el)) === true){
//                 console.log("Wygrałeś")
//             } 
//         }
// }
// tab = [0,1]
// tab2 = [0,1,2,3]
// tab.every(el => tab2.includes(el)) true
// for(let i = 0; i<winNumbers.length; i++){
//     if(tabT.every(el => winNumbers[i].includes(el)) === true){
//         console.log("Wygrałeś")
//     } 
// }

// const boxes = document.querySelectorAll(".box");

// const players = [];
// let bolenek = true; 
// const Player = (name, sign, isClicked) =>{
//     const displaySign = () =>{
//         boxes.forEach(function(box){
//             box.addEventListener("click", ()=>{
//                 box.innerHTML = sign;
//                 bolenek = isClicked;
//                 changeSign()        
//             })
//         })
//     }
//     return {name, displaySign, isClicked}
// }
// const maks = Player("Maks", "X", false);
// const kuba = Player("Kuba", "O", true);
// players.push(maks, kuba);

// function changeSign(){
//     if(bolenek){
//         maks.displaySign()
//     }
//     else{
//         kuba.displaySign()
//     }
// }
// maks.displaySign()

