function errerHandler(str) {
	if (typeof str === "number") {
		return str.toString();
	}

	if (typeof str !== "string" || str.length === 0) {
		return false;
	}
	return str;
}
function reversString(str) {
	let strReversed = "";
	if (!errerHandler(str)) {
		return errerHandler(str);
	}
	str = errerHandler(str);
	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] == "[" || str[i] == "]") {
			break;
		}
		strReversed += str[i];
	}
	return strReversed.toLowerCase();
}
reversString("Samuel");
reversString([12, 34, 56]);
Array.prototype.add = function (x) {
	this.push(x);
	return this;
};
let arrArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let a = arrArr.splice(3, 5, 1, 2, 3);
console.log(a);
console.log(arrArr);
arrArr.add("e");
arrArr.add("h");
arrArr.add([1, 2, 3, 4, 5]);
console.log(arrArr);
console.dir(Array.prototype);
["a", "b", "c", 1, 2, 3, "i", "j"];
arrArr;
a[("d", "e", "f", "g", "h")];
