//"use strict"; 
const player_X = "X";
const player_O = "O";
const winCond = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]]
let board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = player_X;

window.onload=function(){ //#1
    var squares=document.getElementById("board").children;  
    var turn=0;
    for(let i=0;i<squares.length;i++){ 
        squares[i].className= "square"; 
        squares[i].id = ""+i;
     } 
  
  for (const element of squares){ 
    element.addEventListener("click",function(){ //#2
      if (turn%2==0 && element.textContent == ""){ //Disallow Cheating # 6
                element.textContent="X"; 
                element.classList.add("X"); 
                currentPlayer = player_X;
                board[element.id]="X";
                //console.log(element.id)
                winChecker();
            }  
            else if (turn%2!=0 && element.textContent == ""){//Disallow Cheating #6
                element.textContent="O"; 
                element.classList.add("O"); 
                currentPlayer = player_O;
                board[element.id]="O";
                //console.log(element.id);
                winChecker();
            }
             
            turn++; 
    }) 
    element.addEventListener('mouseover',mouseOver);
    element.addEventListener("mouseout",mouseOut);
  } 
    document.querySelector("button").addEventListener("click",newGameClick);
}

function mouseOver(mouseAction){//#3
    this.classList.add("hover");}

function mouseOut(mouseAction){//#3
    this.classList.remove("hover");}

function winChecker (){ //#4
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winCond[i];
        //console.log(winCond[i])
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        //console.log(board);
        //console.log(currentPlayer)
        if (a === '' || b === '' || c === '') {
            //console.log("No win")
            //console.log(a)
            //roundWon = true;
            continue;
            
        }
        if (a === b && b === c) {
            roundWon = true;
            //console.log("Win Condition Meet")
            //console.log(a)
            //console.log(b)
            break;
        }
    
    }
    if (roundWon) {
        document.getElementById("status").className = "you-won"; 
        document.getElementById("status").textContent = "Congratulations! " + currentPlayer + " is the winner"
        //isGameActive = false;
        return;
    }
}

function newGameClick(){ //#5
    board = ['', '', '', '', '', '', '', '', ''];
    var squares=document.getElementById("board").children;
    for(let i=0;i<squares.length;i++){ 
        squares[i].classList.remove("X") 
        squares[i].classList.remove("O")
        squares[i].textContent= "";
     } 
     document.getElementById("status").textContent = "Move your mouse over a square and click to play a X or an O";
     document.getElementById("status").classList.remove("you-won");
}

