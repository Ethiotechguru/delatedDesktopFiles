let arr = [5, 11, 34, 6, 6, 5, 17, 8, 1, 22, 9, 11]; //5,

function getDuplicateInefficient(arr) {
	let count = 0;
	let firstFoundIndex;
	let lastFoundIndex;
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				if (
					firstFoundIndex === undefined &&
					lastFoundIndex === undefined
				) {
					firstFoundIndex = j;
				} else if (
					firstFoundIndex !== undefined &&
					lastFoundIndex === undefined
				) {
					lastFoundIndex = j;
				}
				if (
					firstFoundIndex !== undefined &&
					lastFoundIndex !== undefined
				) {
					if (j < lastFoundIndex) {
						lastFoundIndex = j;
					}
				}
			}
		}
	}
	if (firstFoundIndex > lastFoundIndex) {
		return arr[lastFoundIndex];
	} else if (lastFoundIndex > firstFoundIndex) {
		return arr[firstFoundIndex];
	}
	return -1;
}
// getDuplicateInefficient(arr);

function getDuplicate(arr) {
	let obj = {};
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		count++;
		if (!obj[arr[i]] && obj[arr[i]] !== 0) {
			obj[arr[i]] = i;
		} else {
			//           console.log(arr[i],obj[arr[i]],i);
			console.log(arr[i]);
			return arr[i];
		}
	}
	//     console.log(obj)
	return -1;
}
// getDuplicate(arr)

// let abj = {};
// abj[0] = 1;
// abj[1]=0;
// 'use strict';
// if(abj[1] !== undefined){
//     console.log('hell');
// }

// let newMap = new Map();
// console.log(newMap)
