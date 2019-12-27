let myObj = {
	propOne: 1,
	propTwo: 2,
	propThree: 3,
};

console.log(Object.getOwnPropertyDescriptor(myObj, 'propOne'));

Object.defineProperty(myObj, 'propOne', {
	enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(myObj, 'propOne'));

console.log(Object.keys(myObj));

Object.freeze(myObj);

console.log(Object.getOwnPropertyDescriptors(myObj));
