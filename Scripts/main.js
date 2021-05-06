// var computerScore = 0;
// var playerScore = 0;

var scores ={
	userScore = 0,
	computerScore = 0
}

var scores = document.getElementsByClassName("scores");
var userResult = document.getElementsByClassName("user-result");
var computerResult = document.getElementsByClassName("computer-result");
var rock = document.getElementById("#rock");
var paper = document.getElementById("#paper");
var scissor = document.getElementById("#scissor");

function computerPlay(){

    var computerSelection = Math.floor(Math.random() * 2);
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

     var computer = computerPlay();
     var playerSelection = player.toUpperCase();
     var computerSelection = computer.toUpperCase();
     
	 if(playerSelection === computerSelection){
		
		userResult.textContent= score.userScore;
		computerResult.textContent = score.computerScore;
		scores.textContent="It's a Draw! Looks like no one wants to win the Game..."
      }

     else if((playerSelection === "ROCK" && computerSelection === "SCISSOR") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSOR" && computerSelection === "PAPER")){
		
		playerScore+=1;
        userResult.textContent=playerScore;
		computerResult.textContent = computerScore;
		scores.textContent = "Hurrah! You won this round";
	}
     else if((playerSelection === "SCISSOR" && computerSelection === "ROCK") || (playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSOR")){
		
		computerScore+=1;
		userResult.textContent=playerScore;
		computerResult.textContent = computerScore;
		scores.textContent="Oops! Computer won this round";
	}
     else{
		scores.textContent="Oops that's our bad. Please reload the page";
	}
}

function startPlay(element1,element2,element3){
	if(element1 === "Paper" && element2==="Scissor"){
	
		if(paper.style.visibility == "visible"){
			paper.style.visibility = "hidden";
		}
		if(scissor.style.visibility == "visible"){
			scissor.style.visibility = "hidden";
		}
	playRound(element3);
	// showLinks();
	}
	else if(element1 === "Rock" && element2==="Scissor"){
		if(rock.style.visibility == "visible"){
			rock.style.visibility = "hidden";	
		}
		
		if(scissor.style.visibility == "visible"){
			scissor.style.visibility = "hidden";
		}
	playRound(element3);
	// showLinks();
		
	}
	else if(element1 === "Rock" && element2==="Paper"){
		if(rock.style.visibility == "visible"){
			rock.style.visibility = "hidden";	
		}
		
		if(paper.style.visibility == "visible"){
			paper.style.visibility = "hidden";		
		}
	playRound(element3);
	// showLinks();
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
	if(rock.style.visibility == "hidden"){
		rock.style.visibility = "visible";
	}
}

function showPaper(){
	if(paper.style.visibility == "hidden"){
		paper.style.visibility ="visible";
	}
}

function showScissor(){
	if(scissor.style.visibility=="hidden"){
		scissor.style.visibility = "visible";
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
