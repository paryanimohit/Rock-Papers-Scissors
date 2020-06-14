var computerScore = 0;
var playerScore = 0; 
function computerPlay(){

    let computerSelection = Math.floor(Math.random() * 2);
    if(computerSelection == 0){
	showRock();
         return "Rock";
      }  
    if(computerSelection == 1){
	showPaper();
         return "Paper";
      }
    if(computerSelection == 2){
	showScissor();
         return "Scissor";
      }
 }

function playRound(player){
     let computer = computerPlay();
     let playerSelection = player.toUpperCase();
     let computerSelection = computer.toUpperCase();
     if(playerSelection === computerSelection){
	 var x = document.getElementById("scores");
	var y = document.getElementById("result");
	x.innerHTML="Scores:<br>You &nbsp;&nbsp;&nbsp;&nbsp; Computer<br>"+playerScore+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+computerScore;
	y.innerHTML="Oi! No one won this round"
      }
     else if((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSOR" && computerSelection === "PAPER")){
	playerScore+=1;
           var x = document.getElementById("scores");
	var y = document.getElementById("result");
	x.innerHTML="Scores:<br>You &nbsp;&nbsp;&nbsp;&nbsp; Computer<br>"+playerScore+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+computerScore;
	y.innerHTML = "Hurrah! You won this round";
	}
     else if((playerSelection === "SCISSORS" && computerSelection === "ROCK") || (playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSOR")){
		computerScore+=1;
		 var x = document.getElementById("scores");
	         var y = document.getElementById("result");
	x.innerHTML="Scores:<br>You &nbsp;&nbsp;&nbsp;&nbsp; Computer<br>"+playerScore+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+computerScore;
	y.innerHTML="Oops! Computer won this round";
	}
     else{
	console.log("Please Enter a valid response and Try again");
	}

}

function hide(element1,element2,element3){
	if(element1 === "Paper"&& element2==="Scissor"){
	var x = document.querySelector(".p");
	var y = document.querySelector(".s");
		if(x.style.visibility == "visible"){
			x.style.visibility = "hidden";
		}
		
		if(y.style.visibility == "visible"){
			y.style.visibility = "hidden";
			
		}
	playRound(element3);	
	showLinks();
	}
	else if(element1 === "Rock"&& element2==="Scissor"){
	var x = document.querySelector(".r");
	var y = document.querySelector(".s");
		if(x.style.visibility == "visible"){
			x.style.visibility = "hidden";	
			
		}
		
		if(y.style.visibility == "visible"){
			y.style.visibility = "hidden";
	
		}
	playRound(element3);
	showLinks();
		
	}
	else if(element1 === "Rock"&& element2==="Paper"){
	var x = document.querySelector(".r");
	var y = document.querySelector(".p");
		if(x.style.visibility == "visible"){
			x.style.visibility = "hidden";	
		}
		
		if(y.style.visibility == "visible"){
			y.style.visibility = "hidden";		
		}
	playRound(element3);
	showLinks();
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

function showRock(){
	var y = document.getElementById("rockC");
	if(y.style.visibility == "hidden"){
		y.style.visibility = "visible";
	}
}

function showPaper(){
	var y = document.getElementById("paperC");
	if(y.style.visibility == "hidden"){
		y.style.visibility ="visible";
	}
}

function showScissor(){
	var y = document.getElementById("scissorC");
	if(y.style.visibility=="hidden"){
		y.style.visibility = "visible";
	}
}

function changedClass(){
	document.querySelector('.p').className = "r";
	document.querySelector('.s').className = "r"; 
}

function unBlur(){
	var x = document.querySelector(".game");
	if(x.style.filter=="blur(8px)");{ x.style.filter = "blur(0px)";}
}
