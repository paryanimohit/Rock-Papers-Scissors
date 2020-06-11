let myGame = document.getElementById("myButton1");
let myGame1 = document.getElementById("myButton2");

function computerPlay(){

    let computerSelection = Math.floor(Math.random() * 2);
    if(computerSelection == 0){
         return "Rock";
      }  
    if(computerSelection == 1){
         return "Paper";
      }
    if(computerSelection == 2){
         return "Scissor";
      }
 }

function playRound(playerSelection,computerSelection){

     let player =prompt("Enter your choice");
     let computer = computerPlay();
     playerSelection = player.toUpperCase();
     computerSelection = computer.toUpperCase();
	console.log(playerSelection,computerSelection)
     if(playerSelection == computerSelection){
	 console.log("Equal");
         return "Oops! You both played "+playerSelection; 
      }
     if((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSOR" && computerSelection == "PAPER")){
          
	console.log("You Won")
	 return "Hurrah! You won! "+playerSelection+" beats "+computerSelection;
      }
     else{
	  console.log("Lost")
          return "Oops! You Lose! "+computerSelection+" beats "+playerSelection;
      }

}

function playGame(){
    for(i=0;i<5;i++){
       playRound('rock','rock');
     }
}

function hide(){
	var x= document.querySelectorAll("p s");
	console.log(x);
	if (x[0].style.display === "none" && x[1].style.display==="None") {
  	  x[0].style.display = "block";
	  x[1].style.display = "block";
 	 } else {
    	x[0].style.display = "block";
	x[1].style.display = "block";
 	 }
}

