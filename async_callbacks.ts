const throwErrorWrong = () => {
	throw 'Some error';
};

const someAsyncListener = (callback: () => any) => setTimeout(callback);

// doesn't catch the error
// try {
// 	someAsyncListener(throwErrorWrong);
// } catch (error) {
// 	console.log(error);
// }

const throwErrorCorrect = () => {
	try {
		throw 'Some error';
	} catch (error) {
		console.log(error);
	}
};

someAsyncListener(throwErrorCorrect);

console.log(`I'm alive!`);
