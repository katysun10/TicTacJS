
var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);

function GameBoard(){
	this.numRows;
	this.numCols;
	this.buildBoard = function(){
    	this.board = [];
   	 	var tempArr = [];
    	for(var j=0; j<this.numCols; j++){
        	for(var i=1+(this.numRows*j); i<=this.numRows*(j+1); i++){
            	tempArr.push("");
        	}
        	this.board.push(tempArr);
        	tempArr = [];
    	}
	}
}

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
    });
}

exports.GameBoard = GameBoard;