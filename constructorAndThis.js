class MyCalss {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	getData() {
		return (myFunc = () => {
			console.log(this);
		});
	}
}

let users = [];
function creatUser(name, age, job) {
	const supperObj = {
		name: "samuel",
		age: 13,
		job: "Developer",
		getName(school, year) {
			this.school = school;
			this.year = year;
			return this;
		},
	};
	let newUser = Object.create(supperObj);
	newUser.name = name;
	newUser.age = age;
	newUser.job = job;
	users.push(newUser);
	newUser.getFullInfo = function () {
		console.log(
			this.name + " is " + this.age + " years old and he is a " + this.job
		);
	};
	return newUser;
}

const supperObj = {
	name: "",
	age: "",
	job: "",
	hobbies: ["reading", "hiking", "dancing"],
	getName(school, year) {
		this.school = school;
		this.year = year;
		return this;
	},
};

let newObj = { name: "sam", age: 33, job: "developer" };
let obj1 = { name: "Mamushet", age: 33, job: "Developer" };
newObj.func = function (school, year) {
	this.school = school;
	this.year = year;
	return this;
};

Function.prototype.addIt = function (...val) {
	let [obj1, ...list] = val;
	console.log(obj1);
	console.log(list);
	let obj = this;
	return function (...args) {
		let [o, ...arr] = val;
		let params = arr.concat(args);
		console.log(params);
		return obj.call(o, ...params);
	};
};
newObj.func.addIt(
	{ name: "Tsion", age: 16, job: "sutdent" },
	"Lynnwood Elementary",
	2008
);
