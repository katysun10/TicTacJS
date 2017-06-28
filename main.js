
var GameBoard = require("./gameboard").GameBoard;
var Player = require("./player").Player;
var Constants = require("./constants").Constants;
var prompt = require('prompt-sync')();

function initializePlayers(numPlayers) {
    var players = [];
    var queryStrName;
    var queryStrSym;
    var symbolHistory = {};
    var name;
    var symbol;

    for (var i=0; i<numPlayers; i++){
        queryStrName = "Player "+(i + 1)+", enter your name: "
        name = prompt(queryStrName);

        queryStrSym = name+" enter a symbol: "
        symbol = prompt(queryStrSym);
        while(symbolHistory[symbol] !== undefined){
        	console.log("This symbol is already taken, try again");
        	symbol = prompt(queryStrSym);
        }
        symbolHistory[symbol] = true;
        players[i] = new Player(name, symbol);
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
console.log(players);

// Forcefully exiting the process as there is a bug in the "prompt-sync" library that doesn't
// provide the user any means of closing the i/o stream
process.exit();

// var GameBoard = require("./gameboard").GameBoard;
// var Player = require("./player").Player;
// var NUM_PLAYERS = require("./constants").NUM_PLAYERS;
// var STARTING_PLAYER = require("./constants").STARTING_PLAYER;

// var readline = require('readline'),
// rl = readline.createInterface(process.stdin, process.stdout);

// function getPlayerInfo(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions){
// 	rl.question("Player "+startingPlayer+", what is your name? ", function(answer){
// 		nameArray.push(answer);
// 		if(startingPlayer === numPlayers){
// 			console.log("Player "+startingPlayer+" "+answer+", nice to meet you!");
// 			var answer = new Player();
// 			playerArr.push(answer);
// 			answer.name = nameArray[startingPlayer-1];

// 			console.log("The max number of players has been reached");
// 			startingPlayer = STARTING_PLAYER;
// 			getPlayerSymbol(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray);
// 		}
// 		else{
// 			console.log("Player "+startingPlayer+" "+answer+", nice to meet you!");
// 			var answer = new Player();
// 			playerArr.push(answer);
// 			answer.name = nameArray[startingPlayer-1];
// 			startingPlayer++;
// 			getPlayerInfo(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray);
// 		}
// 	});
// } 

// function getPlayerSymbol(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions){
// 	rl.question(nameArray[startingPlayer-1]+", enter your game piece symbol: ", function(answer){
// 		symbolArray.push(answer);
// 		if(startingPlayer === numPlayers){
// 			playerArr[startingPlayer-1].symbol = answer;
// 			console.log(nameArray[startingPlayer-1]+"'s symbol is: ",answer);

// 			console.log("Max player symbols have been reached");
// 			startingPlayer = STARTING_PLAYER;
// 			getBoardInfo(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions);
// 		}	
// 		else if(answer === prevAnswer){
// 			console.log("That symbol is already taken, try again");
// 			getPlayerSymbol(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions);

// 		}
// 		else{
// 			playerArr[startingPlayer-1].symbol = answer;
// 			console.log(nameArray[startingPlayer-1]+"'s symbol is: ",answer);
// 			prevAnswer = answer;			
// 			startingPlayer++;
// 			getPlayerSymbol(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions);
// 		}			
// 	});
// }

// function getBoardInfo(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions){
// 	//console.log(boardInfo);
// 	rl.question("How many "+boardInfo[placeHolder]+" are there? ", function(answer){
// 		if(placeHolder === boardLimit){
// 			dimOfBoard.push(answer);
// 			placeHolder++;
// 			buildBoard(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions);
// 		}
// 		else{
// 			dimOfBoard.push(answer);
// 			placeHolder++;
// 			getBoardInfo(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions);
// 		}
// 	});
// };

// function buildBoard(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions){
// 	rl.question("Type 'build' to create the game board: ", function(answer){
// 		if(answer === "build"){
// 			var gBoard = new GameBoard;
// 			gBoard.numRows = dimOfBoard[0];
// 			gBoard.numCols = dimOfBoard[1];
// 			gBoard.buildBoard();
// 			console.log("The board is built!");
// 			for(var j=0; j<gBoard.numCols; j++){
// 				console.log(gBoard.board[j]);
// 			}
// 			console.log("The Game Is Starting!!!!\n ")
// 			initalizeGame(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions);
// 		}
// 		else{
// 			console.log("That is not a recognized command, try again");
// 			buildBoard(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions);

// 		}
// 	});
// }

// function initalizeGame(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions){
// 	rl.question("*To see a list of commands type 'list'*\nEnter a command: ", function(answer){
// 		if(answer === "list"){ 
// 			console.log("This section is still under construction!");
// 			console.log("-'place piece' this will ask you where you want to put down your piece");
// 			console.log("-");
// 			initalizeGame(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions);
// 		}
// 		else if(answer === "place piece"){
// 			placePiece(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions);
// 		}
// 		else{
// 			console.log("The command you entered is not recognized, try again");
// 			initalizeGame(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions);
// 		}
// 	});
// }

// function placePiece(playerDataBase, numPlayers, startingPlayer, nameArray, symbolArray, prevAnswer, boardCriteria, i, limit, boardDimensions){
// 	console.log("still under construction!")
// 	rl.close();
// }


// //_____________________________________________________________________________
// var playerArr = [];
// var arrayOfNames = [];
// var arrayOfSymbols = [];
// var dimOfBoard = [];
// var boardInfo = ["rows", "columns"];
// var placeHolder = 0;
// var boardLimit = 1;
// var previousAnswer;
// getPlayerInfo(playerArr, NUM_PLAYERS, STARTING_PLAYER, arrayOfNames, arrayOfSymbols, previousAnswer, boardInfo, placeHolder, boardLimit, dimOfBoard);
// //placePiece();

