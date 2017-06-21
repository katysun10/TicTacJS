
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

exports.GameBoard = GameBoard;