var GameBoard = require("./gameboard").GameBoard;
var Player = require("./player").Player;
var NUM_PLAYERS = require("./constants").NUM_PLAYERS;
var STARTING_PLAYER = require("./constants").STARTING_PLAYER;

var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);

function enterCommandsLoop(){
    rl.question("**type 'exit' to close**\nEnter a command: ", function (answer) {
        if (answer === "exit"){ //we need some base case, for recursion
            return rl.close();
        } //closing RL and returning from function.
        console.log("That command is not recognized:", answer);
        enterCommandsLoop(); //Calling this function again to ask new question
    });
};

function getNameAndCommands(numPlayers, startingPlayer){
	rl.question("Player "+startingPlayer+", what is your name? ", function(answer){
		if(startingPlayer === numPlayers){
			console.log("Player "+startingPlayer+" "+answer+", nice to meet you!");
			console.log("The max number of players has been reached");
			enterCommandsLoop();
		}
		console.log("Player "+startingPlayer+" "+answer+", nice to meet you!");
		startingPlayer++;
		getNameAndCommands(numPlayers, startingPlayer);
	});
}

getNameAndCommands(NUM_PLAYERS, STARTING_PLAYER);