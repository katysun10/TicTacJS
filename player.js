Player = function(){
	this.name = "";
	this.symbol = "";
}

var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);

var numPlayers = 2;
var count;

/*rl.question("How many players are there?\n**Note: for TicTacToe there can only be 2** ", 
	function(playerNum){
		numPlayers = playerNum;
		console.log(numPlayers);
		rl.pause();
});*/


for(var i=1; i<=numPlayers; i++){
	//rl.resume();
	rl.question("Player "+i+" please enter your name: ", function(name){
		var name = new Player();
		console.log(name);
		//rl.pause();
	});
}
