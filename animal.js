class Animal {
	constructor(species){
		this.species = species;
	}
	eat(){
		console.log("Nom Nom Nom!");
	}
	speak(){
		console.log(this.species + " makes a sound");
	}
	
}

class Dog extends Animal {
	constructor(name){ 
		super("Dog"); 		
		this.name = name;      	
	}
	speak(){
		console.log(this.name + " says hello!");
	}
	setJob(job){
		this.job = job;
	}
}

class Working extends Dog {
	constructor(name){
		super(name);
		this.setJob("hearding");
	
	}
}
class Protecting extends Dog {
	constructor(name){
		super(name);
		this.setJob("guarding");
	
	}
}

class Companion extends Dog {
	constructor(name){
		super(name);
		this.setJob("being a pal");
	}
}






var Molly = new Working("Molly");
Molly.speak();
Molly.eat();
console.log(Molly.species);
console.log(Molly.job);


// var Sammich = new Companion("Sammich");









// var koala = new Animal("koala");
// var ZZ = new Dog("Harley");

// koala.speak();
// koala.eat();
// console.log(koala.species);

// ZZ.speak();
// console.log(ZZ.species);
// ZZ.eat();


