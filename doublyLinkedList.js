class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	addToList(val) {
		if (this.head === null) {
			let newNode = {
				value: val,
				next: null,
				prev: null,
			};
			this.head = newNode;
			this.length++;
			return this;
		}
		let head = this.head;
		while (head.next) {
			head = head.next;
		}
		let newNode = {
			value: val,
		};
		head.next = newNode;

		newNode.prev = head;
		newNode.next = null;
		this.tail = newNode;
		this.length++;
		return this;
	}
	findItem(val) {
		if (!this.head) {
			console.warn("No value in the List please add some content");
			return false;
		}
		if (this.head.value === val) {
			return this.head;
		}
		let head = this.head;
		while (head.next) {
			if (head.next.value === val) {
				return head.next;
			}
			head = head.next;
		}
		return false;
	}
	deleteItem(val) {
		if (this.head.value === val) {
			this.head = this.head.next;
			this.length--;
			return this;
		}
		let head = this.head;
		while (head.next) {
			if (head.next.value === val) {
				head.next = head.next.next;
				this.length--;
				return this;
			}
			head = head.next;
		}
		return false;
	}
}
class DoublyLinked {
	constructor() {
		this.head = null;
		this.tail = this.head;
		this.length = 0;
	}
	addToHead(val) {
		if (!this.head) {
			let newNode = {
				value: val,
				prev: null,
				next: null,
			};
			this.head = newNode;
			this.tail = this.head;
			this.length++;
			return this;
		}
		let newNode = {
			value: val,
		};
		newNode.next = this.head;
		this.head.prev = newNode;
		newNode.prev = null;
		this.head = newNode;
		this.length++;
		return this;
	}
	removeFirstItem() {
		if (this.head === this.tail) {
			this.head = null;
			this.tail = this.head;
			this.length--;
			return this;
		}
		let head = this.head;
		this.head = head.next;
		this.head.prev = null;
		this.length--;
		return this;
	}
	removeItemByIndex(idx) {
		if (idx === 0) {
			return this.removeFirstItem();
		}
		if (idx === this.length - 1) {
			return this.removeLastItem();
		}
		if (idx > Math.floor(this.length / 2)) {
			let tail = this.tail;
			let temp;
			let j = this.length - 1;
			while (tail.prev && j !== idx) {
				temp = tail;
				tail = tail.prev;
				j--;
			}
			if (j === idx) {
				temp.prev = tail.prev;
				tail.prev.next = temp;
				this.length--;
				return this;
			}
		}
		let j = 0;
		let head = this.head;
		let temp;
		while (head.next && j !== idx) {
			temp = head;
			head = head.next;
			j++;
		}
		if (j == idx) {
			temp.next = head.next;
			head.next.prev = temp;
			this.length--;
			return this;
		}
	}
	removeLastItem() {
		let tail = this.tail;
		this.tail = tail.prev;
		this.tail.next = null;
		this.length--;
		return this;
	}
}

let dbL = new DoublyLinked();