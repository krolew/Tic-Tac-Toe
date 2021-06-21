const Game = (function(){
    const players = [];
    const indexesOfOPositions = [];
    const indexesOfXPositions = []; 
    const winIndex = [
        [0,4,8],[0,3,6],[0,1,2],[2,4,6],[2,5,8],[3,4,5],[6,7,8],[1,4,7]
    ];
    let moves =  1;
    let winner = false;
    // Dom elements 
    const boxes = document.querySelectorAll(".box");
    const para = document.querySelector("p");
    const restartBtn = document.querySelector("button")
    let currentDiv;
    //Game functions
    function startGame(){
        displaySign();
    }
    function displaySign(){
            boxes.forEach(function(box, boxIndex){
                box.addEventListener("click", () =>{
                    if(!winner){
                        if(box.dataset.sign == ""){ 
                            currentDiv = box;
                            gameConditions(boxIndex);
                        }
                    }else{
                        return false;
                    }
                })
            })

    }
    function gameConditions(boxIndex){
        if(moves % 2 === 0){
            currentDiv.innerHTML = players[1].sign; // display O
            para.textContent = "X's move";
            indexesOfOPositions.push(boxIndex);

        }
        else if(moves % 2 !== 0){
            currentDiv.innerHTML = players[0].sign; //display X
            para.textContent = "O's move";
            indexesOfXPositions.push(boxIndex);
        }
        checkWinner()
        currentDiv.dataset.sign = 'filled';
        moves++;
    }
    
    function checkWinner(){
        if(moves % 2 === 0){
            for(let i in winIndex){
                if(winIndex[i].every(el => indexesOfOPositions.includes(el)) === true){
                    para.textContent = "O's win";
                    winner = true;
                }
            }
        }
        else if(moves % 2 !== 0){
            for(let i in winIndex){
                if(winIndex[i].every(el => indexesOfXPositions.includes(el)) === true){
                    para.textContent = "X's win";
                    winner = true;
                }
            }
        }
    }
    restartBtn.addEventListener("click", ()=>{
            boxes.forEach(function(box){
                box.dataset.sign = "";
                box.textContent = "";
                moves = 1;
                indexesOfOPositions.splice(0, indexesOfOPositions.length);
                indexesOfXPositions.splice(0, indexesOfXPositions.length);
                para.textContent = "X's move";
                winner = false;
                currentDiv = undefined;
            })
    })

    return{
        startGame: startGame,
        players: players,
    }
})();

const Player = (name, sign) =>{
    return {name,sign}
}
const player1 = Player("Xesar", "X");
const player2= Player("Olek", "O");
Game.players.push(player1, player2);
Game.startGame();









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
//             if(moves % 2 == 0){
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

