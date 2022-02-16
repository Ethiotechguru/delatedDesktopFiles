function helper(bi8) {
	if (!isNaN(bi8)) {
		let num = String(bi8);
		for (let n of num) {
			if (+n < 0 || +n > 1) {
				return false;
			}
		}
		let len = num.length - 1;
		let dec = 0;
		for (let n of num) {
			dec = dec + +n * 2 ** len;
			len--;
		}
		return dec;
	}
	return false;
}
const binaryToDecimal = (binary) => {
	if (binary.length > 8) {
		let list = binary.split("");
		let newList = [];
		while (list.length > 0) {
			let first = list.splice(0, 8);
			newList.push(first.join(""));
		}
		let binaryToReturn = [];
		for (let b of newList) {
			let val = helper(b);
			if (val) {
				binaryToReturn.push(val);
			} else {
				return "invalid value";
			}
		}
		return binaryToReturn;
	} else {
		return helper(binary);
	}
};

binaryToDecimal("0100000101000010010001010100001001000101");
