//Hard-mode: Write a function that takes three parameters x, y, and z.
//It should return the sum of the squares of the two largest numbers.

var squareBig = function(x, y, z) {
	if (x >= y) {
		if (y >=z) {
			return (x*x + y*y);
		} else {
			return (x*x + z*z);
		}
	} else {
			if (x >= z) {
				return (x*x + y*y);
			} else {
				return (y*y + z*z);
				}
		}
}