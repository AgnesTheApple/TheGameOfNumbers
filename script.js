var square = document.querySelectorAll(".square");
var grid = [[0,1,2,3],
            [4,5,6,7],
            [8,9,10,11],
            [12,13,14,15]
            ];

	start();
	start();

function start() {
	var r = Math.floor(Math.random() * square.length);
	if (square[r].innerHTML == "") {
			square[r].innerHTML = randomNum();
			
	
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
	}
	if (key.keyCode == "39") {
		goRight();
		start();
	}
	if (key.keyCode == "38") {
		goUp();
		start();
	}
	if (key.keyCode == "40") {
		goDown();
		start();
	}
}

function goLeft() {
	//ce loop ira de droite a gauche, de haut en bas sans passer par la premiere col de gauche
	for (var i = 0; i < 4; i++) {
		for (var j = 1; j < 4; j++) {
			if (square[grid[i][j]].innerHTML) {
				//spot = position que l'on comparera avec les cases qui lui sont adjacente a gauche
				var spot = j;
				//un while loop qui fera passera dans chaque positions en sens inverse et s'executera selon les conditions 
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
					}else if (square[grid[i][spot]].innerHTML == square[grid[i][spot + 1]].innerHTML) {
						square[grid[i][spot + 1]].innerHTML *= 2;
						square[grid[i][spot]].innerHTML = "";
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
					}else if (square[grid[spot][j]].innerHTML == square[grid[spot + 1][j]].innerHTML) {
						square[grid[spot + 1][j]].innerHTML *= 2;
						square[grid[spot][j]].innerHTML = "";
						break;
					}
					else break;
				}
			}
		}
	}
}