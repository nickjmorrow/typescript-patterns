const whoAmI = {
	name: 'Leslie Knope',
	regularFunction: function() {
		console.log(this.name);
	},
	arrowFunction: () => {
		console.log(this.name);
	},
};

whoAmI.regularFunction(); // "Leslie Knope"
whoAmI.arrowFunction(); // undefined

class Birdfeeder {
	constructor() {
		this.firstArg = 'firstArg';
		this.firstFunc = this.firstFunc.bind(this);
		this.secondFunc = this.secondFunc.bind(this);
	}

	firstFunc() {
		return () => this.firstArg;
	}

	secondFunc() {
		let ret = function() {
			return this.firstArg;
		};
		// this is necessary, removing it leads to this beind unndefined
		ret = ret.bind(this);
		return ret;
	}

	thirdFunc = () => {
		return () => this.firstArg;
	};

	fourthFunc = () => {
		let ret = function() {
			return this.firstArg;
		};
		// this is necessary, removing it leads to this beind unndefined
		ret = ret.bind(this);
		return ret;
	};
}

const { firstFunc, secondFunc, thirdFunc, fourthFunc } = new Birdfeeder();
console.log(firstFunc()());
console.log(secondFunc()());
console.log(thirdFunc()());
console.log(fourthFunc()());
