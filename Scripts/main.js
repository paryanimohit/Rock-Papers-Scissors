var userResult = document.getElementById("userScore");
var computerResult = document.getElementById("computerScore");
var rock, paper, scissor
var userMessage = document.getElementById("usermsg");
var computerRock, computerPaper, computerScissor;

function computerPlay(){

    var computerSelection = Math.floor(Math.random() * 2);
	if(computerSelection === 0){
		showRock();
         return "Rock";
      }  
    else if(computerSelection === 1){
		showPaper();
         return "Paper";
      }
    else if(computerSelection === 2){
		showScissor();
         return "Scissor";
      }
 }

function playRound(player){

     var computer = computerPlay();
     var playerSelection = player.toUpperCase();
     var computerSelection = computer.toUpperCase();

	 if(playerSelection === computerSelection){
		userMessage.textContent="It's a Draw! Looks like no one wants to win the Game..."
      }

     else if((playerSelection === "ROCK" && computerSelection === "SCISSOR") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSOR" && computerSelection === "PAPER")){
		
		userResult.textContent = Number(userResult.textContent) + 1;
		userMessage.textContent = "Hurrah! You won this round";
	}
     else if((playerSelection === "SCISSOR" && computerSelection === "ROCK") || (playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSOR")){
		
		computerResult.textContent = Number(computerResult.textContent) + 1;
		userMessage.textContent="Oops! Computer won this round";
	}
     else{
		 userMessage.textContent="Oops that's our bad. Please reload the page";
	}
}

function startPlay(element1){
	rock = document.getElementById("rock");
	paper = document.getElementById("paper");
	scissor = document.getElementById("scissor");
	if(element1 === "Rock"){
			paper.style.visibility = "hidden";
			scissor.style.visibility = "hidden";
			playRound(element1);
	}
	if(element1 === "Paper"){
			rock.style.visibility = "hidden";	
			scissor.style.visibility = "hidden";
			playRound(element1);
	}
	if(element1 === "Scissor"){
			rock.style.visibility = "hidden";	
			paper.style.visibility = "hidden";		
			playRound(element1);
	}
}

function showRock(){
		computerPaper = document.getElementById("paperC");
		computerScissor = document.getElementById("scissorC");
		computerPaper.style.visibility = "hidden";
		computerScissor.style.visibility = "hidden";
		console.log("Rock is visible");
}

function showPaper(){
		computerRock = document.getElementById("rockC");
		computerScissor = document.getElementById("scissorC");
		computerRock.style.visibility = "hidden";
		computerScissor.style.visibility ="hidden";
		console.log("Paper is visible");
	}

function showScissor(){
		computerRock = document.getElementById("rockC");
		computerPaper = document.getElementById("paperC");
		computerRock.style.visibility="hidden";
		computerPaper.style.visibility = "hidden";
		console.log("Scissor is visible");
	}

function resetScores()
{ 
    $( "#userScore" ).load(window.location.href + " #userScore" );
	$( "#computerScore" ).load(window.location.href + " #computerScore" );
	playAgain();
}

function playAgain(){
	$( "#usergame" ).load(window.location.href + " #usergame" );
	$( "#computergame" ).load(window.location.href + " #computergame" );
	userMessage.textContent = "Choose Wisely! Computer is Smart"
}

var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];
var userName = document.getElementById("username");
var elname = document.getElementById("name");

function updateName(){
	userName.textContent = elname.value;
}

function openModal() {
	modal.style.display = "block";
  }
  
  span.onclick = function() {
	modal.style.display = "none";
  }

  window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
  }