class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	push(item) {
		if (!item) {
			return this;
		}
		this.data[this.length] = item;
		this.length++;
		this.data.length = this.length;
		return this.length;
	}

	pop() {
		let itemDeleted = this.data[this.length - 1];
		if (this.length > 0) {
			delete this.data[this.length - 1];
			this.length--;
		}
		if (!itemDeleted) {
			return undefined;
		}
		return itemDeleted;
	}
	shift(item) {
		if (!item) {
			return this;
		}
		let i = 0;
		this.length++;
		this.data.length = this.length;
		let temp = this.data[i];
		this.data[i] = item;
		while (i < this.length - 1) {
			let temp2 = this.data[i + 1];
			this.data[i + 1] = temp;
			temp = temp2;
			i++;
		}
		return this;
	}
	unshift() {
		if (this.data.length <= 0) {
			return undefined;
		}
		let i = 0;
		delete this.data[i];
		while (i < this.length) {
			if (this.data[i + 1]) {
				this.data[i] = this.data[i + 1];
				i++;
			} else {
				delete this.data[i];
				this.length--;
				this.data.length = this.length;
			}
		}
		//         this.data.prototype.length = this.length;
		return this;
	}
	getItem(idx) {
		return this.data[idx];
	}
	getAll() {
		return this.data;
	}
}
let myArr = new MyArray();
myArr.push("s");
myArr.push("l");
myArr.push("m");
myArr.push("k");
myArr.push("n");
myArr.push("t");
let arr = myArr.getAll();
