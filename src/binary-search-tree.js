const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
	constructor() {
		this.tree = null;
	}
	root() {
		return this.tree ? this.tree : null;
	}

	add(key) {
		if (this.tree == null) {
			this.tree = new Node(key);
		} else {
			this.insertNode(this.tree, key);
		}
	}
	insertNode(node, key) {
		if (node.data > key) {
			if (node.left == null) {
				node.left = new Node(key);
			} else {
				this.insertNode(node.left, key);
			}
		} else {
			if (node.right == null) {
				node.right = new Node(key);
			} else {
				this.insertNode(node.right, key);
			}
		}
	}
	has(data) {
		return this.searchNode(this.tree, data)[0];
	}
	searchNode(node, key) {
		if (node == null) {
			return [false, null];
		}
		if (node.data > key) {
			return this.searchNode(node.left, key);
		} else if (node.data < key) {
			return this.searchNode(node.right, key);
		} else {
			return [true, node];
		}
	}
	find(data) {
		return this.searchNode(this.tree, data)[1];
	}
	remove(key) {
		this.tree = this.removeNode(this.tree, key);
	}
	removeNode(node, key) {
		if (node == null) {
			return null;
		}
		if (node.data > key) {
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (node.data < key) {
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			if (node.left == null && node.right == null) {
				node = null;
				return node;
			}

			if (node.left == null) {
				node = node.right;
				return node;
			} else if (node.right == null) {
				node = node.left;
				return node;
			}
			const aux = this.minNode(node.right);
			node.data = aux.data;
			node.right = this.removeNode(node.right, aux.data);
			return node;
		}
	}

	min() {
		return this.minNode(this.tree).data;
	}
	minNode(node) {
		let current = node;
		while (current != null && current.left != null) {
			current = current.left;
		}
		return current;
	}
	max() {
		return this.maxNode(this.tree).data;
	}
	maxNode(node) {
		let current = node;
		while (current != null && current.right != null) {
			current = current.right;
		}
		return current;
	}
}

module.exports = {
	BinarySearchTree,
};
