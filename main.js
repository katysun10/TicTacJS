var GameBoard = require("./gameboard").GameBoard;
var Player = require("./player").Player;

var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);

function getPlayerInfo(){
	rl.question("Player 1, what is your name? ", function(name1){
		playerOne.name = name1;

		rl.question("Player 2, what is your name? ", function(name2){
			playerTwo.name = name2;

			rl.question("Enter a symbol to use as your game piece "+playerOne.name+": ", function(symbol1){
				playerOne.symbol = symbol1;

				rl.setPrompt("Enter a symbol to use as your game piece "+playerTwo.name+": ");
				rl.prompt();

				rl.on('line', function(symbol2){
					if(symbol2 === symbol1){
						console.log("Player one and two cannot have the same symbol "+playerTwo.name+"!")
						rl.prompt();
					}
					else{
						playerTwo.symbol = symbol2;
						rl.close();
						console.log(playerOne);
						console.log(playerTwo);
					}
				});
			});
		});
	});
}
getPlayerInfo();

function setUpBoard(){
    var board = new GameBoard();
    rl.question("How many rows? (Enter a 3) ", function(rows){
        board.numRows = rows;
        rl.question("How many columns? (Enter a 3) ", function(columns){
            board.numCols = columns;
            console.log("Your board has "+board.numRows+" rows, and "+board.numCols+" columns");
            console.log("");
            board.buildBoard();
            board.getBoard();
            rl.pause();
         });
    });d
}
