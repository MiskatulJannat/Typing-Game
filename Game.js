var canvas;
var canvasContext;
var string;
let x=1;
let score = 0;
let board = 0;
let num = 0;

window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	
	setInterval(function(){
		
		if(x==1){
			string = str(num);
		}
		moveEverything()
		drawEverything(x,string);
		

		if(check()){			
			document.getElementById("val").value = ''; 		//if inputed value get match then blank the input box.
			x=1;
			num++;
		}
			if(x==1000){
			window.alert("             😥GAME OVER😥       \n\n🔁Reload the page to play again🔁");
		}
	}
  )
}

function moveEverything(){
	x+=1;
}


function drawEverything(x,string){
	canvasContext.fillStyle='black';		//for background.
	canvasContext.fillRect(2,20,canvas.width,canvas.height);
	drawString(x,string);
	Score(score);
	ScoreBoard(board);
}

function drawString(x,string){
	canvasContext.font="40px Verdana";
	canvasContext.fillStyle='pink';
	canvasContext.fillText(string,x,200);  // place of text appearing.
}

function str(len){
	let random_str='';
	let random_ascii;
	for(let i=0;i<=len;i++){
		random_ascii=(Math.random()*25)+97;
		random_str+=String.fromCharCode(random_ascii);
	}
	return random_str;
}

function holdString(num){
	return str(num);
}

function check(){
	var userVal = document.getElementById("val").value;
	if(userVal==string){
		return true;
	}
	return false;
}

function Score(score){
	scoreVal();
}

function scoreVal(){
	if(check()){
		score++;
	}
}

function BoardVal(){
	if(score>board){
		board=score;
	}
}

function ScoreBoard(board){
	BoardVal();
	canvasContext.fillStyle = "white";
	canvasContext.fillText("⚡SCORE⚡ :: ",300,60);
	canvasContext.fillStyle = "green";
	canvasContext.font = "50px Verdana";
	canvasContext.fillText(board,640,63);
}