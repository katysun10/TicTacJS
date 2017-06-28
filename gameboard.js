
function buildBoard(numRows, numCols){
    var board = [];
    var tempArr = [];
    for(var j=0; j<numRows; j++){
        for(var i=1+(numCols*j); i<=numCols*(j+1); i++){
            tempArr.push("");
        }
        board.push(tempArr);
        tempArr = [];
    }
    return board;
}
function GameBoard(numRows, numCols){
	this.numRows = numRows;
	this.numCols = numCols;
	this.board = buildBoard(this.numRows, this.numCols);
    this.printBoard = function(){
        for(var i=0; i<numRows; i++){
            console.log(this.board[i]);
        }
    };
    this.placePiece = function(symbol, row, col){
        var canWork = false;
        if(row > numRows || col > numCols){
            console.log("The spot you want to place your piece is out of bounds");
            return canWork;
        }
        this.board[row][col] = symbol;
    };
}

exports.GameBoard = GameBoard;


var blah = new GameBoard(3, 3);
blah.placePiece("K", 100, 100);
blah.printBoard();
