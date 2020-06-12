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

function hide(element1,element2){
	if(element1 == "Paper"&& element2=="Scissor"){
	var x = document.querySelector(".p");
	var y = document.querySelector(".s");
		if(x.style.visibility == "visible"){
			x.style.visibility = "hidden";	
		}
		else{x.style.visibility="hidden"}
		
		if(y.style.visibility == "visible"){
			y.style.visibility = "hidden";	
		}
		else{y.style.visibility="hidden"}
	}
	if(element1 == "Rock"&& element2=="Scissor"){
	var x = document.querySelector(".r");
	var y = document.querySelector(".s");
		if(x.style.visibility == "visible"){
			x.style.visibility = "hidden";	
		}
		else{x.style.visibility="hidden"}
		
		if(y.style.visibility == "visible"){
			y.style.visibility = "hidden";	
		}
		else{y.style.visibility="hidden"}
	}
	if(element1 == "Rock"&& element2=="Paper"){
	var x = document.querySelector(".r");
	var y = document.querySelector(".p");
		if(x.style.visibility == "visible"){
			x.style.visibility = "hidden";	
		}
		else{x.style.visibility="hidden"}
		
		if(y.style.visibility == "visible"){
			y.style.visibility = "hidden";	
		}
		else{y.style.visibility="hidden"}
	}
	
			
}

function showHeading(){
	var y=document.querySelector(".showHeading");
	if(y.style.visibility == "hidden"){
		y.style.visibility="visible";
		var x=document.getElementsByClassName("btn");
		if(x[0].innerHTML == "Start a New Game"){
		x[0].innerHTML="Reset";
		var z=document.querySelector(".btn");
		if(z.innerHTML =="reset")
			{ z.onClick("reset()");}
		}
	}
	else{
		y.style.visibility="visible";
	}
}

function reset(){
		var x = document.querySelector(".r");
		var y = document.querySelector(".s");
		var z = document.querySelector(".p");
		if(x.style.visibility == "hidden"){
		x.style.visibility = "visible";
		}
		if(y.style.visibility == "hidden"){
		y.style.visibility = "visible";
		}
		if(z.style.visibility == "hidden"){
		z.style.visibility = "visible";
		}
}

function startGame(){
	playgame();
}
