var GameBoard = require("./gameboard").GameBoard;
var Player = require("./player").Player;

var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);

// function getPlayerInfo(){
// 	rl.resume();
// 	rl.question("Player 1, what is your name? ", function(name1){
// 		var name1 = new Player;
// 		name1.name = name1;

// 		rl.question("Player 2, what is your name? ", function(name2){
// 			var name2 = new Player;
// 			name2.name = name2;

// 			rl.question("Enter a symbol to use as your game piece "+name1.name+": ", function(symbol1){
// 				name1.symbol = symbol1;

// 				rl.setPrompt("Enter a symbol to use as your game piece "+name2.name+": ");
// 				rl.prompt();

// 				rl.on('line', function(symbol2){
// 					if(symbol2 === symbol1){
// 						console.log("Player one and two cannot have the same symbol "+name2.name+"!")
// 						rl.prompt();
// 					}
// 					else{
// 						name2.symbol = symbol2;
// 						console.log(name1.name);
// 						console.log(name2.name);
// 						rl.close();
// 					}
// 				});
// 			});
// 		});
// 	});	
// }

// function setUpBoard(){
//     var board = new GameBoard();
//     rl.resume();
//     rl.question("How many rows? (Enter a 3) ", function(rows){
//         board.numRows = rows;
//         rl.question("How many columns? (Enter a 3) ", function(columns){
//             board.numCols = columns;
//             console.log("Your board has "+board.numRows+" rows, and "+board.numCols+" columns");
//             console.log("");
//             board.buildBoard();
//             board.getBoard();
//             rl.pause();
//          });
//     });
// }

function getName(){
    rl.question("**type 'exit' to close**\nWhat is your name? ", function (answer) {
        if (answer == 'exit'){ //we need some base case, for recursion
            return rl.close();
        } //closing RL and returning from function.
        console.log("Nice to meet you,", answer);
        getName(); //Calling this function again to ask new question
    });
};

function getPlayerName(numPlayers, startingPlayer){
	rl.question("Player "+startingPlayer+", what is your name? ", function(answer){
		if(startingPlayer === numPlayers){
			console.log("Player "+startingPlayer+" "+answer+", nice to meet you!");
			console.log("The max number of players has been reached");
			return rl.close();
		}
		console.log("Player "+startingPlayer+" "+answer+", nice to meet you!");
		startingPlayer++;
		getPlayerName(numPlayers, startingPlayer);
	});
}

getPlayerName(2,1);