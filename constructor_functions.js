function Hero(name, level) {
	this.name = name;
	this.level = level;
}

Hero.prototype.greet = function() {
	console.log(`hello, my name is ${this.name}`);
};

const hero = new Hero('marty', 77);
hero.greet();

function Mage(name, level, spell) {
	Hero.call(this, name, level);
	this.spell = spell;
}

Mage.prototype = Object.create(Hero.prototype);

const mage = new Mage('sally', 99);
mage.greet();
