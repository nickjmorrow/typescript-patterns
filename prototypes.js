Array.prototype.all = function(callback) {
	const length = this.length;
	for (let i = 0; i < length; i++) {
		if (!callback(this[i])) {
			return false;
		}
	}
	return true;
};

input = [1, 2, 3];

console.log(input.all(num => num < 4));
console.log(input.all(num => num % 2 == 0));
