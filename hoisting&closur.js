const getUser = (name, age, job) => {
	return {
		name: getName(name),
		age: getAge(age),
		job: getJob(job),
	};
};
let data;
setTimeout(() => {
	data = getUser("Samuel", 12, "developer");
}, 0);
const getName = (myName) => {
	console.log(myName, "before");
	return myName;
};

const getAge = (age) => {
	console.log(age);
	return age;
};

const getJob = (job) => {
	console.log(job);
	return job;
};

setTimeout(() => {
	console.log(data, "is it here yet?");
}, 0);

function processUsers() {
	let obj3 = [
		{
			name: "Lidet",
			age: 34,
			id: 1,
			address: {
				street: "1234 23nd Ave South",
				city: "seattle",
				state: "WA",
				zipcode: "98036",
			},
			picturs: ["a.jpeg", "b.jpeg", "c.jpeg", "d.jpeg"],
		},
		{ name: "Mike", age: 37, id: 2 },
		{ name: "David", age: 31, id: 3 },
		{ name: "Emily", age: 14, id: 4 },
		{ name: "Lindsy", age: 24, id: 5 },
	];
	function getUserData(data) {
		return function (id) {
			return data.filter((user) => user.id === id);
		};
	}
	return getUserData(obj3);
}
