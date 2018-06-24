var square = document.querySelectorAll(".square");
var reset = document.querySelector("#reset");
var score = document.querySelector("#score");
var grid = [[0,1,2,3],
            [4,5,6,7],
            [8,9,10,11],
            [12,13,14,15]
            ];
var count = 0;
var countBox = 0;

function setUp() {
	start();
	changeColor();
	start();
	changeColor();
}

function start() {
	var r = Math.floor(Math.random() * square.length);
	if (square[r].innerHTML == "") {
			square[r].innerHTML = randomNum();
	}
	else{
		start();
	}
}

function randomNum () {
	var num = Math.random();
		if ( num < 0.5 ) {
			num = 2;
		}else{
			num = 4;
		}
		return num;
}

window.onkeydown = function (key) {
	if (key.keyCode == "37") {
		goLeft();
		start();
		changeColor();
		checking();

	}
	if (key.keyCode == "39") {
		goRight();
		start();
		changeColor();
		checking();
		
	}
	if (key.keyCode == "38") {
		goUp();
		start();
		changeColor();
		checking();
		
	}
	if (key.keyCode == "40") {
		goDown();
		start();
		changeColor();
		checking();
		
	}
}

function changeColor() {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			var spot = square[grid[i][j]].innerHTML;
			if (spot == "") {
				square[grid[i][j]].style.backgroundColor = "#edd5cd";
			}
			if (spot == "2") {
				square[grid[i][j]].style.backgroundColor = "#f4f2e5";
			}
			if (spot == "4") {
				square[grid[i][j]].style.backgroundColor = "#dbd9ce";
			}
			if (spot == "8") {
				square[grid[i][j]].style.backgroundColor = "#c3c1b7";
			}
			if (spot == "16") {
				square[grid[i][j]].style.backgroundColor = "#ffe09b";
			}
			if (spot == "32") {
				square[grid[i][j]].style.backgroundColor = "#ffc035";
			}
			if (spot == "64") {
				square[grid[i][j]].style.backgroundColor = "#fb7f4a";
				square[grid[i][j]].style.fontSize = "50px";
			}
			if (spot == "128") {
				square[grid[i][j]].style.backgroundColor = "#fa5c18";
				square[grid[i][j]].style.fontSize = "50px";
			}
			if (spot == "256") {
				square[grid[i][j]].style.backgroundColor = "#e4a2a2";
				square[grid[i][j]].style.fontSize = "45px";
			}
			if (spot == "512") {
				square[grid[i][j]].style.backgroundColor = "#d97b7a";
				square[grid[i][j]].style.fontSize = "50px";
			}
			if (spot == "1024") {
				square[grid[i][j]].style.backgroundColor = "#b8c4df";
				square[grid[i][j]].style.fontSize = "40px";
			}
			if (spot == "2048") {
				square[grid[i][j]].style.backgroundColor = "#8da0cb";
				square[grid[i][j]].style.fontSize = "30px";
			}
		} 
	}
}

function goLeft() {
	//ce loop ira de droite a gauche, de haut en bas sans passer par la premiere col de gauche
	for (var i = 0; i < 4; i++) {
		for (var j = 1; j < 4; j++) {
			if (square[grid[i][j]].innerHTML) {
				//spot = position que l'on comparera avec les cases qui lui sont adjacente a gauche
				var spot = j;
				//un while loop qui fera passera dans chaque positions en sens inverse jussqua que les conditions soient remplis
				while (spot - 1 >= 0) {
					//si une case est a cote d'une case vide, elle prend son spot et disparait de son spot precedent
					if (square[grid[i][spot - 1]].innerHTML == "") {
						square[grid[i][spot - 1]].innerHTML = square[grid[i][spot]].innerHTML;
						square[grid[i][spot]].innerHTML = "";
					//on diminue j a chaque tour pour passer dans tout les spots possible
						spot--;
					}
					//si les 2 cases se touchent et sont identiques, celle qui a bouger se multiplie par 2 et prend sa nouvelle place et disparait de l'ancienne
					else if (square[grid[i][spot -1]].innerHTML == square[grid[i][spot]].innerHTML) {
						square[grid[i][spot - 1]].innerHTML *= 2;
						square[grid[i][spot]].innerHTML = "";
						score.innerHTML = Number(square[grid[i][spot - 1]].innerHTML) + Number(score.innerHTML);
						break;
					}
					else break;
				}
			}
		}
	}
}

function goRight() {
	for (var i = 0; i < 4; i++) {
		for (var j = 2; j >= 0; j--) {
			if (square[grid[i][j]].innerHTML) {
				var spot = j;
				while (spot + 1 < 4) {
					if (square[grid[i][spot + 1]].innerHTML == "") {
						square[grid[i][spot + 1]].innerHTML = square[grid[i][spot]].innerHTML;
						square[grid[i][spot]].innerHTML = "";
						spot++;
					}
					else if (square[grid[i][spot]].innerHTML == square[grid[i][spot + 1]].innerHTML) {
						square[grid[i][spot + 1]].innerHTML *= 2;
						square[grid[i][spot]].innerHTML = "";
						score.innerHTML = Number(square[grid[i][spot + 1]].innerHTML) + Number(score.innerHTML);
						break;
					}
					else break;
				}
			}
		}
	}
}


function goUp() {
	for (var j = 0; j < 4; j++) {
		for (var i = 1; i < 4; i++) {
			if (square[grid[i][j]].innerHTML) {
				var spot = i;
				while (spot>0) {
					if (square[grid[spot - 1][j]].innerHTML == "") {
						square[grid[spot -1][j]].innerHTML = square[grid[spot][j]].innerHTML;
						square[grid[spot][j]].innerHTML = "";
						spot--;
					}
					else if (square[grid[spot][j]].innerHTML == square[grid[spot -1][j]].innerHTML) {
						square[grid[spot -1][j]].innerHTML *= 2;
						square[grid[spot][j]].innerHTML = "";
						score.innerHTML = Number(square[grid[spot - 1][j]].innerHTML) + Number(score.innerHTML);
						break;
					}
					else break;
				}
			}
		}
	}
}

function goDown() {
	for (var j = 0; j < 4; j++) {
		for (var i = 2; i >= 0; i--) {
			if (square[grid[i][j]].innerHTML) {
				var spot = i;
				while (spot + 1 < 4) {
					if (square[grid[spot + 1][j]].innerHTML == "") {
						square[grid[spot + 1][j]].innerHTML = square[grid[spot][j]].innerHTML;
						square[grid[spot][j]].innerHTML = "";
						spot++;
					}
					else if (square[grid[spot][j]].innerHTML == square[grid[spot + 1][j]].innerHTML) {
						square[grid[spot + 1][j]].innerHTML *= 2;
						square[grid[spot][j]].innerHTML = "";
						score.innerHTML = Number(square[grid[spot + 1][j]].innerHTML) + Number(score.innerHTML);
						break;
					}
					else break;
				}
			}
		}
	}
}

function checking() {
for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			count++;
			if (square[grid[i][j]].innerHTML == "2048") {
				alert("YOU WIN!!!");
			}	
			if (square[grid[i][j]].innerHTML !== "") {
				countBox++
			}
			if (countBox === 16) {
				alert("gameover");
			}
			else if (count === 16) {
				count = 0;
				countBox = 0;
			}
		}	
	}
}

reset.addEventListener("click", function() {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			square[grid[i][j]].innerHTML = "";
			score.innerHTML = "0";
		}
	}
	setUp();
});

/*function win() {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (square[grid[i][j]].innerHTML == "2048") {
				alert("YOU WIN!!!");
			}
		}
	}
}		*/



