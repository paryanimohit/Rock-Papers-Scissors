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
	let x= document.getElementById("button2");
	if (x.style.display === "none") {
  	  x.style.display = "block";
 	 } else {
    	x.style.display = "block";
 	 }
}

