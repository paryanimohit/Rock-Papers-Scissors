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

function playRound(player,computerSelection){
     let computer = computerPlay();
     let playerSelection = player.toUpperCase();
     computerSelection = computer.toUpperCase();
	console.log(playerSelection,computerSelection)
     if(playerSelection == computerSelection){
	 console.log("Equal");
         return "Oops! You both played "+playerSelection; 
      }
     if((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSOR" && computerSelection === "PAPER")){
          
	console.log("You Won")
	 return "Hurrah! You won! "+playerSelection+" beats "+computerSelection;
      }
     if((playerSelection === "SCISSORS" && computerSelection === "ROCK") || (playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSOR")){
	  console.log("Lost")
          return "Oops! You Lose! "+computerSelection+" beats "+playerSelection;
      }
     else{
	console.log("Please Enter a valid response and Try again");
	}

}

function playGame(element1){
    for(i=0;i<5;i++){
       playRound(element1,'rock');
     }
}

function hide(element1,element2,element3){
	if(element1 == "Paper"&& element2=="Scissor"){
	var x = document.querySelector(".p");
	var y = document.querySelector(".s");
		if(x.style.visibility == "visible"){
			x.style.visibility = "hidden";
			showLinks();	
		}
		else{x.style.visibility="hidden"}
		
		if(y.style.visibility == "visible"){
			y.style.visibility = "hidden";	
			showLinks();
		}
		else{y.style.visibility="hidden"}
	playGame(element3);
	}
	if(element1 == "Rock"&& element2=="Scissor"){
	var x = document.querySelector(".r");
	var y = document.querySelector(".s");
		if(x.style.visibility == "visible"){
			x.style.visibility = "hidden";	
			showLinks();
		}
		else{x.style.visibility="hidden"}
		
		if(y.style.visibility == "visible"){
			y.style.visibility = "hidden";
			showLinks();	
		}
		else{y.style.visibility="hidden"}
	playGame(element3);
	}
	if(element1 == "Rock"&& element2=="Paper"){
	var x = document.querySelector(".r");
	var y = document.querySelector(".p");
		if(x.style.visibility == "visible"){
			x.style.visibility = "hidden";
			showLinks();	
		}
		else{x.style.visibility="hidden"}
		
		if(y.style.visibility == "visible"){
			y.style.visibility = "hidden";
			showLinks();	
			
		}
		else{y.style.visibility="hidden"}
	playGame(element3);
	}	
}

function showHeading(){
	var y=document.querySelector(".showHeading");
	if(y.style.visibility == "hidden"){
		y.style.visibility="visible";
		document.querySelector(".btn").style.visibility="hidden";
	}
	else{
		y.style.visibility="visible";
	}
}

function showLinks(){
	var x = document.querySelectorAll(".abc");
	if(x[0].style.visibility=="hidden"){
		x[0].style.visibility = "visible";
		}
	if(x[1].style.visibility=="hidden"){
		x[1].style.visibility = "visible";
		}
	if(x[2].style.visibility=="hidden"){
		x[2].style.visibility = "visible";
		}
}

function changedClass(){
	document.querySelector('.p').className = "r";
	document.querySelector('.s').className = "r"; 
}
