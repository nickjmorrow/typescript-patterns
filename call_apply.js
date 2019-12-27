function printThis(firstArg, secondArg) {
	console.log(this.message, firstArg, secondArg);
}

printThis();

const book = {
	message: 'im a book',
};

printThis.call(book);

printThis.call(book, 'first arg', 'second arg');
printThis.apply(book, ['first arg', 'second arg']);
