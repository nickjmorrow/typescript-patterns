const throwError = () => {
	throw Error('Some error');
};

// try {
// 	Promise.resolve(1).then(throwError);
// } catch (e) {
// 	console.log(e);
// }

// Promise.resolve(1)
// 	.then(throwError)
// 	.catch(console.log);

Promise.reject('reason')
	.then(() => console.log('then'))
	.catch(() => console.log('catch'));
