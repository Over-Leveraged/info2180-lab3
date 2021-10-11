"use strict"; 
window.onload=function(){ 
    winCond = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]]
   
    let squares=document.getElementById("board").children; 
    for(let i=0;i<squares.length;i++){ 
        squares[i].className= "square"; 
     } 
  
  var j=0; 
  for (const element of squares){ 
    element.addEventListener("click",function(){ 
      if (j%2==0){ 
                element.textContent="X"; 
                element.classList.add("X"); 
            }  
            else{ 
                element.textContent="O"; 
                element.classList.add("O"); 
            } 
            j++; 
    }) 
    element.addEventListener("mouseover",function(){ 
      element.classList.add("hover"); 
    }) 
    element.addEventListener("mouseout",function(){ 
      element.classList.remove("hover"); 
      }) 
  } 
     
     
}