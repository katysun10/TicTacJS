var GameBoard = require("./gameboard").GameBoard;
var Player = require("./player").Player;

function GameMaster(player1Obj, player2Obj, gameboardObj){
	this.checkWin = function(){
		var win = false;
		if(gameboardObj.board[0] || gameboardObj.board[1] || gameboardObj.board[2] === [player1Obj.symbol, player1Obj.symbol, player1Obj.symbol]){
			console.log("Congragulations, "+player1Obj.name+" you won this game with a horizontal win!");
		}
		else if(gameboardObj.board[0] || gameboardObj.board[1] || gameboardObj.board[2] === [player2Obj.symbol, player2Obj.symbol, player2Obj.symbol]){
			console.log("Congragulations, "+player2Obj.name+" you won this game with a horizonal win!");
		}
		else if(){}
	};
	this.reset = function(){

	};
}


var test = new GameBoard();
test.numRows = 3;
test.numCols = 3;
test.buildBoard();



console.log(test)
