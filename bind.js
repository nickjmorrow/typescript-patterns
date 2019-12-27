function summary() {
	console.log(`book: ${this.book}, author: ${this.author}`);
}

const book1 = {
	book: '1984',
	author: 'George Orwell',
};

const book1Summary = summary.bind(book1);
book1Summary();

const book2 = {
	book: 'Harry Potter and the Goblet of Fire',
	author: 'J.K. Rowling',
};

// returns new function, does not modify function
book1Summary.bind(book2);

book1Summary();
