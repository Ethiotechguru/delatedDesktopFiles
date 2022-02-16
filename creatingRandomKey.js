let lowerCase = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

let upperCase = lowerCase.map((el) => el.toUpperCase());

async function randomeLetterPickerFunc() {
	let usersId;
	let smallLetters = "";
	let capitalLetters = "";
	let nums = "";

	for (let i = 0; i < 10; i++) {
		const randemNum = Math.random();
		if (randemNum > 0 && randemNum < 0.39) {
			nums = nums + Math.floor(randemNum * 10);
		} else if (randemNum <= 10) {
			let randemSmallLetter =
				lowerCase[Math.floor(Math.random() * lowerCase.length)];
			smallLetters = smallLetters + randemSmallLetter;
		} else {
			let randemCapitalLetter =
				upperCase[Math.floor(Math.random() * lowerCase.length)];
			capitalLetters = capitalLetters + randemCapitalLetter;
		}
	}
	let firstPick = Math.random();
	if (firstPick <= 0.4) {
		usersId = smallLetters + capitalLetters + "_" + nums;
	}
	if (firstPick > 0.4 && firstPick < 0.7) {
		usersId = capitalLetters + nums + "_" + smallLetters;
	} else {
		usersId = nums + capitalLetters + smallLetters;
	}
	return await usersId;
}
let start = Date.now();

// for(let i = 0; i<=150; i++){
//     randomeLetterPickerFunc()

// }
const generate150User = async () => {
	let users = [];
	for (let i = 0; i < 50000; i++) {
		await users.push(randomeLetterPickerFunc());
	}

	let set = new Set(users);
	if (users.length !== set.size) {
		console.warn("duplicated item found!");
		return false;
	} else {
		console.log(set.size === users.length);
		console.log(users);
	}
};

async function checkForRandemness() {
	for (let i = 0; i < 500; i++) {
		await generate150User();
	}
}

checkForRandemness();
let end = Date.now();
console.log(end - start);
