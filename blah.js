// const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// rl.on('line', function(line){
// 	console.log("it worked!",line);
// 	rl.close();
// });


function test(counter, counterLimit){
	if(counter === counterLimit){
		return "done";
	}
	console.log("the counter is at",counter)
	counter++;
	return test(counter,counterLimit);
}

var result = test(3,6);

console.log(result);
