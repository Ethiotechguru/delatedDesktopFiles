let count = 0;
const merge = (arr) => {
	count++;
	if (arr.length < 2) {
		return arr;
	}
	const left = arr.splice(0, Math.floor(arr.length / 2));
	const right = arr.splice(0, arr.length);
	let a = merge(left);
	let b = merge(right);

	return sort(a, b);
};
let increment = 0;
const sort = (arr1, arr2) => {
	let sortedArr = [];
	let i = 0;
	let j = 0;
	increment++;
	while (arr1.length > i && arr2.length > j) {
		if (arr1[i] < arr2[j]) {
			sortedArr.push(arr1[i]);
			i++;
		} else {
			sortedArr.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		sortedArr.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		sortedArr.push(arr2[j]);
		j++;
	}

	return sortedArr;
};
let mergedArr = merge([
	9, 4, 8, 5, 21, 11, 74, 23, 43, 36, 84, 63, 1, 6, 7, 89, 3, 2,
]);
