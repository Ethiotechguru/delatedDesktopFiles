class LinkedList {
	constructor() {
		//         if(!value){
		//             console.warn('You must put a value before you submit');
		//             return;
		//         }
		this.head = null;
		this.tail = this.head;
		this.lenght = 0;
	}
	append(item) {
		if (!item) {
			console.warn("append function is missing arguments");
			return this;
		}
		if (this.head === null && this.tail == null) {
			return this.nullChecker(item);
		}
		let newNode = {
			value: item,
			next: null,
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.lenght++;
		return this;
	}
	prepend(item) {
		if (this.tail === null && this.head === null) {
			return this.nullChecker(item);
		}
		let head = this.head;
		this.head = { value: item };
		this.head.next = head;
		this.lenght++;
		return this;
	}
	search(val) {
		let temp = this.head;
		while (temp) {
			if (temp.value === val) {
				console.log(temp);
				return temp;
			}
			temp = temp.next;
		}
		return -1;
	}
	delete(val) {
		//         if(this.head === this.tail){}
		if (this.tail === this.head) {
			this.head = null;
			this.tail = null;
			this.lenght--;
			return this;
		}
		let temp = this.head;
		let head = temp;

		if (temp.value === val) {
			this.head = temp.next;
			this.lenght--;
			return this;
		}
		while (temp) {
			if (head.value === val) {
				temp.next = head.next;
				if (this.tail === head) {
					this.tail = temp;
				}
				this.lenght--;
				return this;
			}
			temp = head;
			head = head.next;
		}
		return -1;
	}
	insert(val, i) {
		if (!val || typeof i !== "number") {
			console.warn("invalid input please inter the correct input");
			return;
		}
		if (i >= this.lenght) {
			return this.append(val);
		}
		let temp = this.head;
		let head = temp;
		if (this.head === null && this.tail === null) {
			return this.nullChecker(item);
		}
		if (i === 0) {
			return this.prepend(val);
		}
		let count = 0;
		while (count !== i && head.next) {
			temp = head;
			head = temp.next;
			count++;
		}
		temp.next = { value: val };
		temp.next.next = head;
		this.lenght++;
		return this;
	}
	nullChecker(item) {
		this.head = {
			value: item,
		};
		this.head.next = null;
		this.tail = this.head;
		this.lenght++;
		return this;
	}
	revertList() {
		let first = this.head;
		let second = first.next;
		while (second) {
			let temp = second.next;
		}
	}
}

let myLindedList = new LinkedList("Samule");
