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
}

function goLeft() {
	//this loop wont move the first col on the left
	for (var i = 0; i < 4; i++) {
		for (var j = 1; j < 4; j++) {
			if (square[grid[i][j]].innerHTML) {
				//spot is a position in the grid that will be compare with the previous spot(spot - 1)
				var spot = j;

				while (spot - 1 >= 0) {
					if (square[grid[i][spot - 1]].innerHTML == "") {
						square[grid[i][spot - 1]].innerHTML = square[grid[i][spot]].innerHTML;
						square[grid[i][spot]].innerHTML = "";
						spot--;
					}
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



