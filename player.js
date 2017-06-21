
var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);

function Player(){
	this.name = "";
	this.symbol = "";
}

var playerOne = new Player();
var playerTwo = new Player();

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

exports.Player = Player;