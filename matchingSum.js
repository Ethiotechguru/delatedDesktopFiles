function findMathcingSum(arr, sum) {
	//time complexity of O(n^2)
	let matchingSum = 0;
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			count++;

			matchingSum = arr[i] + arr[j];
			if (matchingSum === sum) {
				console.log([arr[i], arr[j]]);
				return [arr[i], arr[j]];
			}
		}
	}
	return -1;
}

findMathcingSum([3, 5, 6, 8, 9, 11], 22);

function findMathcingSumBinary(arr, num) {
	//must be ordered Arr
	//time complexity of O(n);
	let count = 0;
	let i = 0;
	let j = arr.length - 1;
	while (i <= j) {
		count++;
		if (arr[i] + arr[j] === num) {
			console.log(count);
			return { val: [arr[i], arr[j]], index: [i, j] };
		}
		if (arr[i] + arr[j] > num) {
			j--;
		} else if (arr[i] + arr[j] < num) {
			i++;
		}
	}
	return -1;
}
findMathcingSumBinary([3, 5, 6, 7, 9, 11], 8);

function findMathcingSumNoOrder(arr, num) {
	// no order gauranied
	//time complexity of O(n)
	let set = new Set();
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (set.has(num - arr[i])) {
			console.log(num - arr[i], arr[i], num);
			console.log(count);
			return true;
		}
		set.add(arr[i]);
		count++;
	}
	console.log(count);
	return -1;
}
findMathcingSumNoOrder([1, 3, 4, 5], 8);
console.time("hello");
findMathcingSumBinary([1, 3, 4, 5, 6, 7, 8, 9, 10], 19);
findMathcingSumNoOrder([3, 1, 23, 5, 12, 7, 44, 10, 9], 11);
findMathcingSum([3, 5, 7, 9, 12, 23, 44, -1, 10], 11);
findMathcingSumBinary([1, 3, 5, 7, 9, 10, 12, 23, 44], 11);

function checkForcommenItem(arr1, arr2) {
	let set = new Set();
	let count = 0;
	for (let i = 0; i < arr1.length; i++) {
		set.add(arr1[i]);
	}
	for (let j = 0; j < arr2.length; j++) {
		count++;
		if (set.has(arr2[j])) {
			console.log(set);
			console.log(arr2[j]);
			return true;
		}
	}
	console.log(set);
	return -1;
}
function setObj(arr1) {
	let obj = {};
	for (let i = 0; i < arr1.length; i++) {
		if (typeof arr1[i] === "object" || typeof arr1[i] === "function") {
			continue;
		}
		if (!obj[arr1[i]]) {
			obj[arr1[i]] = arr1[i];
		} else {
			console.log(obj[arr1[i]], "existes");
		}
	}
	return obj;
}
function findMatch(arr2, obj) {
	for (let j = 0; j < arr2.length; j++) {
		if (obj[arr2[j]] === arr2[j]) {
			console.log(obj[arr2[j]], arr2[j]);
			return true;
		}
	}
	return -1;
}
function checkForItem(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
		return "one or more input is invalid";
	}
	if (arr1.length <= 0 || arr2.length <= 0) {
		return "invalid input";
	}
	return findMatch(arr2, setObj(arr1));
}

let a = ["a", "b", "c", "m"];
let b = ["z", "y", "h"];
let c = ["z", "h", "x"];
let d = [3, 2, 6, 3, 4, 8];
let e = [10, 4, 7, 5];
checkForItem("q", b);
