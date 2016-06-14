//Nightmare Mode:Try to write (or just think of) a function with one argument, n. 
//It should use console.log to print the numbers from n down to 0 without using a for loop. 
//Is there any possible way this could work? (Hint: It is possible and you'll need a conditional. This is pretty tricky.)


// Example of Recursion
var nightmare = function(n) {
	if (n>=0) {
		console.log(n);
		n = n - 1;
		nightmare(n);
	} else {
		console.log("You did it!");
	}
}
