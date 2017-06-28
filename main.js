var GameBoard = require("./gameboard").GameBoard;
var Player = require("./player").Player;
var Constants = require("./constants").Constants;
var prompt = require('prompt-sync')();

function initializePlayers (numPlayers) {
    var players = [];
    for (var i = 0; i < numPlayers; i++) {
        var queryStr = "Player " + (i + 1) + ", what is your name? ";
        var name = prompt(queryStr);
        players[i] = new Player(name);
    }
    return players;
}

function initializeGameboard () {
    
}

function startGame () {
    var command = "";
    while (command !== "exit") {
        command = prompt("Show time! ");
    }
}

var players = initializePlayers(Constants.NUM_PLAYERS);
startGame();

// Forcefully exiting the process as there is a bug in the "prompt-sync" library that doesn't
// provide the user any means of closing the i/o stream
process.exit();