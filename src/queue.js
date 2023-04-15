const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor() {
		this.count = 0;
		this.head = null;
	}
	getUnderlyingList() {
		return this.head;
	}

	enqueue(element) {
		const node = new ListNode(element);
		if (this.isEmpty()) {
			this.head = node;
		} else {
			console.log(this.count);
			const last = this.getElementAt(this.count - 1);
			console.log(last);
			last.next = node;
		}
		this.count++;
	}
	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}
		const current = this.head;
		this.head = current.next;
		this.count--;
		return current.value;
	}
	size() {
		return this.count;
	}
	isEmpty() {
		return this.size() === 0;
	}
	getElementAt(index) {
		if (this.isInRange(index)) {
			let node = this.head;
			for (let i = 0; i < index && node != null; i++) {
				node = node.next;
			}
			return node;
		}
		return undefined;
	}
	isInRange(index) {
		return index >= 0 && index <= this.count;
	}
}

module.exports = {
	Queue,
};
