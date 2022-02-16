let arr = [
	1,
	2,
	3,
	4,
	5,
	[
		"lidet",
		"kidist",
		"age",
		"amele",
		[
			6,
			7,
			8,
			9,
			[
				"wolkite",
				"addis",
				"gondar",
				"bahirdar",
				["Amara", "Gurage", "Oromo", "Tigre"],
				{
					name: "samule",
					age: 34,
					job: "developer",
					address: {
						street: "1234",
						city: "Seattle",
						zip: 98036,
						county: "snohomish",
						faves: [
							"reading Books",
							"swimming",
							"sky diving",
							"hiking",
						],
					},
				},
			],
		],
	],
	100,
	200,
	300,
	400,
];
let count = 0;
function recursivArr(arr) {
	if (typeof arr === "object") {
		for (let key in arr) {
			if (Array.isArray(arr[key])) {
				recursivArr(arr[key]);
			} else if (typeof arr[key] === "object") {
				recursivArr(arr[key]);
			} else {
				console.log(arr[key]);
				count++;
			}
		}
	} else if (Array.isArray(arr)) {
		arr.forEach((ele) => {
			if (Array.isArray(ele)) {
				recursivArr(ele);
			} else if (typeof ele === "object") {
				recursivArr(ele);
			} else {
				console.log(ele);
				count++;
			}
		});
	}
}
recursivArr(arr);
