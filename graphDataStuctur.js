const depthFirstIterative = (graph, source) => {
	const stack = [source];
	while (stack.length > 0) {
		const current = stack.pop();
		console.log(current);
		for (let neighbor of graph[current]) {
			stack.push(neighbor);
		}
		//         console.log(stack);
	}
	//     console.log(source);
	//     for(let neighbor of graph[source]){
	//         depthFirstSearch(graph, neighbor);
	//     }
};

const depthFirstRecursive = (graph, source) => {
	console.log(source);
	for (let neighbor of graph[source]) {
		depthFirstRecursive(graph, neighbor);
	}
};
const graph = {
	a: ["b", "c"], ///Stack = ['b']
	b: ["d", "e"],
	c: ["f", "g"],
	d: [],
	e: [],
	f: [],
	g: [],
};
console.log("Recursive solution");
depthFirstRecursive(graph, "a");
console.log("************************");
console.log("Interative solution");
depthFirstIterative(graph, "a");
