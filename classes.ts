class Hero {
	name: string;
	level: number;

	constructor(name: string, level: number) {
		this.name = name;
		this.level = level;
	}

	sayName() {
		console.log(`hello, my name is ${this.name}`);
	}

	sayLevel() {
		console.log(`my level is ${this.level}`);
	}
}

class Mage extends Hero {
	spell: string;

	constructor(name: string, level: number, spell: string) {
		super(name, level);
		this.spell = spell;
	}

	sayName() {
		console.log(`beware, my name is ${this.name}`);
	}

	castSpell() {
		console.log(`i cast ${this.spell}`);
	}
}

const hero = new Hero('martin', 50);
hero.sayName();
hero.sayLevel();

const mage = new Mage('sally', 99, 'kaboom');
mage.sayName();
mage.castSpell();
