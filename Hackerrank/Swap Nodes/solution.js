let nodes = {}, printAnswers = [], index = 0;
nodes[1] = {
    index: 1,
    left: null,
    right: null,
    depth: 1
};

function swapNodes(indexes, queries) {
    fillNodes(indexes);
    setDepth(nodes);
    for (let query of queries) {
        for (let key in nodes) {
            let node = nodes[key];
            if (node.depth % query === 0) {
                let left = node.left;
                node.left = node.right;
                node.right = left;
            }
        }
        printAnswers[index] = [];
        printTree(nodes, printAnswers[index]);
        index++;
    }
    return printAnswers;
}

let printTree = (nodes, array) => {
    traverse(nodes[1], 1, true, array);
};

let setDepth = (nodes) => {
    traverse(nodes[1], 1, false, []);
};

let traverse = (node, depth, print, arr) => {
    node.depth = depth;
    if (node.left) {
        traverse(node.left, depth + 1, print, arr);
    }
    if (print) {
        arr.push(node.index);
    }
    if (node.right) {
        traverse(node.right, depth + 1, print, arr);
    }
};

let fillNodes = (indexes) => {
    for (let i = 1; i <= indexes.length; i++) {
        let left = indexes[i - 1][0], right = indexes[i - 1][1];
        let leftNode = {
            index: left,
            left: null,
            right: null,
            depth: 0,
        };
        let rightNode = {
            index: right,
            left: null,
            right: null,
            depth: 0,
        };
        if (left !== -1) {
            nodes[left] = leftNode;
            nodes[i].left = leftNode;
        }
        if (right !== -1) {
            nodes[right] = rightNode;
            nodes[i].right = rightNode;
        }
    }
};


let indexes = [
    [2, 3],
    [4, -1],
    [5, -1],
    [6, -1],
    [7, 8],
    [-1, 9],
    [-1, -1],
    [10, 11],
    [-1, -1],
    [-1, -1],
    [-1, -1]
];
let queries = [2, 4];

swapNodes(indexes, queries);


console.log(printAnswers);