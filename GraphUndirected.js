function hasPath(graph, src, dst, visited) {
	console.log(visited);
	if (src === dst) {
		return true;
	}
	if (visited.has(src)) return false;
	visited.add(src);
	for (let neighbor of graph[src]) {
		if (hasPath(graph, neighbor, dst, visited) === true) {
			return true;
		}
	}
	return false;
}
const adjacencyListToGraph = (arr) => {
	let graph = {};
	for (let ele of arr) {
		let [a, b] = ele;
		if (!graph[a]) graph[a] = [];
		if (!graph[b]) graph[b] = [];
		graph[a].push(b);
		graph[b].push(a);
	}
	return graph;
};

function justCheck(arr, val1, val2) {
	const graph = adjacencyListToGraph(arr);
	let set = new Set();
	return hasPath(graph, val1, val2, set);
}

let adList = [
	["i", "j"],
	["k", "i"],
	["m", "k"],
	["k", "l"],
	["o", "l"],
];
// justCheck(adList,'i', 'l');

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
let head = new Node(2);

function addToList(node, val) {
	let newNode = {
		val: val,
		next: null,
	};
	if (!node.next) {
		node.next = newNode;
		return node;
	}
	let head = node;
	while (head.next) {
		head = head.next;
	}
	head.next = newNode;
	return head;
}
let a = new Node(3);
let b = new Node(4);
let c = new Node(5);
let d = new Node(6);
let e = new Node(7);
let f = new Node(8);
head.next = a;
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
const graphOne = {
	i: ["j", "k"],
	j: ["i", "k"],
	k: ["i", "m", "l", "j"],
	m: ["k"],
	l: ["k"],
	o: ["n"],
	n: ["o"],
};

const undirectedGraph = (graph, source, destination) => {
	let visited = {};
	let queue = [source];

	while (queue.length > 0) {
		let current = queue.shift();
		if (visited[current]) {
			continue;
		}
		for (let neighbor of graph[current]) {
			if (source === neighbor) {
				return true;
			}
			if (!visited[neighbor]) {
				visited[neighbor] = neighbor;
			}
			queue.push(neighbor);
		}
	}
	return false;
};
undirectedGraph(graphOne, "i", "l");