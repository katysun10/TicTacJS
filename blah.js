
var prompt = require("prompt-sync")();

function getSymbol(){
	var symbolHistory = {
		calory: true
	};
	var queryStrSymb = "enter a symbol: "
	var symbol = prompt(queryStrSymb);	
	while(symbolHistory[symbol] !== undefined){
		console.log("That symbol is already taken, try again: ");
		symbol = prompt(queryStrSymb);
		symbolHistory.symbol;
	}
	symbolHistory[symbol] = true;
	console.log(symbolHistory);
	process.exit();
}


getSymbol();