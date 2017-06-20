GameBoard = function(){
	this.numRows;
	this.numCols;
	this.buildBoard = function(){
    	var matrix = [];
   	 	var tempArr = [];
    	for(var j=0; j<this.numCols; j++){
        	for(var i=1+(this.numRows*j); i<=this.numRows*(j+1); i++){
            	tempArr.push("");
        	}
        	matrix.push(tempArr);
        	tempArr = [];
    	}
    	return matrix;

	}
}

var test = new GameBoard();
	test.numRows = 3;
	test.numCols = 3;

console.log(test.buildBoard());