Function.prototype.አጣማሪ = function () {
	return this;
};

let add = () => {
	console.log("የአማርኛ ጃቫስክሪብት ላይብራሪ");
};

function Student(firstName, age) {
	this.firstName = firstName;
	this.age = age;
	this.getInfo = function () {
		console.log(
			`this student name is ${this.firstName} and the age of this student is ${this.age}`
		);
	};
	return this;
}
class Teacher {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	getInfo() {
		console.log("method comes from the class instance");
		return this;
	}
}
let myObjectIsAwsom = {
	firstName: "samule",
	age: "Bla Bla Bla",
};
let student1 = new Student("samuel", 23);
let teacher = new Teacher("Ayele", 44);

student1.__proto__.getMyName = function () {
	console.log(this.firstName);
};
function extendedFun() {
	console.log(this);
}
